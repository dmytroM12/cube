
import React, {Component} from 'react'


export class DeleteColSquare extends Component{
    render(){
        return(
            <button className='box delcol' id="delCol" onClick={this.props.minusColumn} style={{display:"none"}}>-</button>
        )
    }
}
