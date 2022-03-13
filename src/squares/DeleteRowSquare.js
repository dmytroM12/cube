
import React, {Component} from 'react'


export class DeleteRowSquare extends Component{
    render(){
        return(
            <button className='box delrow' onClick={this.props.minusRow}>-</button>
        )
    }
}