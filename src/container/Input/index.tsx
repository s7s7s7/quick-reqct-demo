import React, { ReactNode } from 'react';
import CalButton, { ICalButtonProps } from '../../component/CalButton/index'


const initialState = {
    stack: ['0'] as string[]
}

type IInputProps = { changeContent: (content: string) => any }
type IInputState = typeof initialState

const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
const operators = ['+', '-', '<', '=']

class Input extends React.Component<IInputProps, IInputState>{
    constructor(props: IInputProps) {
        super(props)
        this.state = initialState
    }

    handleEqual = () => {
        // should show the result here
        this.setState({ stack: ['0'] }, () => this.props.changeContent(this.state.stack.join('')))
    }

    handleBackSpace = () => {
        const { stack } = this.state
        let s = stack.pop()
        if (!s || s.length < 2) return;
        s = s.substring(0, s.length - 1)
        stack.push(s)
        this.setState({ stack: stack })
    }

    handleNumberClick = (c: string) => {
        const { stack } = this.state
        let s = stack.pop()!
        if (operators.includes(s)) {
            stack.push(s);
            stack.push(c);
        }
        else {
            s = s === '0' ? c : `${s}${c}`
            stack.push(s)
        }
        this.setState({ stack: stack }, () => this.props.changeContent(this.state.stack.join('')))
    }

    handleOperatorClick = (c: string) => {
        const { stack } = this.state
        if (c === '<') {
            let s = stack.pop()!
            if (!operators.includes(s) && s.length > 1) {
                s = s.substring(0, s.length - 1)
                stack.push(s)
            }
            if (stack.length === 0) stack.push('0')

            this.setState({ stack: stack }, () => this.props.changeContent(this.state.stack.join('')))
        } else if (c === '=') {
            this.handleEqual()
        } else {
            if (operators.includes(stack[stack.length - 1]))
                stack[stack.length - 1] = c
            else stack.push(c)

            this.setState({ stack: stack }, () => this.props.changeContent(this.state.stack.join('')))
        }
    }

    generateNumbers() {
        const res: ReactNode[] = []
        nums.forEach(c => {
            const CalButtonProps: ICalButtonProps = { character: c, onClick: () => this.handleNumberClick(c) }
            res.push(<CalButton {...CalButtonProps} />)
        })
        return res;
    }

    generateOperators() {
        const res: ReactNode[] = []
        operators.forEach(c => {
            const CalButtonProps: ICalButtonProps = { character: c, onClick: () => this.handleOperatorClick(c) }
            res.push(<CalButton {...CalButtonProps} />)
        })
        return res;
    }

    componentDidMount() {
        this.props.changeContent(this.state.stack.join(''))
    }

    render() {
        return <div className='input-pad'>
            <div className='input-pad__numbers'>
                {this.generateNumbers()}
            </div>
            <div className='input-pad__operators'>
                {this.generateOperators()}
            </div>
        </div>
    }
}

export default Input