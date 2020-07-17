import React from 'react';

import Input from '../Input/index'
import Output from '../Output/index'

import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { updateContent } from '../../store/action/CalculateContent'
import { IStoreState } from '../../store/reducer';

const mapStateToProps = (state: IStoreState) => ({
    content: state.CalculateContent.content
})

// const mapDispatchToProps = (dispatch: Dispatch) => ({ updateContent: () => dispatch(updateContent) }) OR USE FOLLOWING LINE
const mapDispatchToProps = (dispatch: Dispatch) => (bindActionCreators({ updateContent }, dispatch))
const initialState = { content: '' }

type ICalculatorProps = {} & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
type ICalculatorState = typeof initialState

class Calculator extends React.Component<ICalculatorProps, ICalculatorState> {
    constructor(props: ICalculatorProps) {
        super(props);
        this.state = initialState;
    }

    onContentChange = (content: string) => {
        // console.log('setState in Calculator is called')
        // this.setState({ content: content })
        // this.props.updateContent(content)
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
            <Output content={this.props.content} />
            <Input changeContent={this.onContentChange} />
        </div>

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)