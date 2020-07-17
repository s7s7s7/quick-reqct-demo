import React from 'react';

import Input from '../Input/index'
import Output from '../Output/index'

const initialState = { content: '' }

type ICalculatorProps = {}
type ICalculatorState = typeof initialState

class Calculator extends React.Component<ICalculatorProps, ICalculatorState> {
    constructor(props: ICalculatorProps) {
        super(props);
        this.state = initialState;
    }

    onContentChange = (content: string) => {
        console.log('setState in Calculator is called')
        this.setState({ content: content })
    }

    componentDidMount() {
        console.log('the Calculator component is already mount, which means it is already rendered at least once')
    }

    componentDidUpdate(prevProps: ICalculatorProps, prevState: ICalculatorState) {
        console.log(`the content in state of Calculator changed from ${prevState.content} to ${this.state.content}`)
    }

    render() {
        console.log('rendering Calculator component')
        return <div className='calculator-pad'>
            <Output content={this.state.content} />
            <Input changeContent={this.onContentChange} />
        </div>

    }
}

export default Calculator