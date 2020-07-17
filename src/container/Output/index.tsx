import React, { ReactNode } from 'react';


const initialState = {
}

export type IOutputProps = { content: string }
type IOutputState = typeof initialState

class Output extends React.Component<IOutputProps, IOutputState>{
    constructor(props: IOutputProps) {
        super(props)
        this.state = initialState
    }

    componentDidUpdate(prevProps: IOutputProps, prevState: IOutputState) {
        console.log(`this content in props of Output is changing from ${prevProps.content} to ${this.props.content}`)
    }

    render() {
        console.log('the Output component is rendering')
        return <div className='output-pad'>
            <span>{this.props.content}</span>
        </div>
    }
}

export default Output