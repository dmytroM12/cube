import React, {Component} from 'react'

export class NewRowSquare extends Component{
    render(){
        return(
            <button className='box newrow' onClick={this.props.plusRow}>+</button>
        )
    }
}