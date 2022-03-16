
import React, {Component} from 'react'


export class DeleteRowSquare extends Component{
    render(){
        return(
            <button className='box delrow' id="delRow" onClick={this.props.minusRow} style={{display:"none"}}>-</button>
        )
    }
}