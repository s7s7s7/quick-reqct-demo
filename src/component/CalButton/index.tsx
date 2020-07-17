import React, { ReactNode } from 'react';


const initialState = {
    stack: [] as string[]
}

export type ICalButtonProps = { character: string, onClick: () => any }
type ICalButtonState = typeof initialState

// class CalButton extends React.Component<ICalButtonProps, ICalButtonState>{
//     constructor(props: ICalButtonProps) {
//         super(props)
//         this.state = initialState
//     }

//     render() {
//         return <button className='calbutton' onClick={this.props.onClick}>
//             <div>{this.props.character}</div>
//         </button >
//     }
// }

const CalButton = (props: ICalButtonProps) => {
    return <button className='calbutton' onClick={props.onClick}>
        <div>{props.character}</div>
    </button >
}

export default CalButton