
import React, {Component} from 'react'


export class DeleteColSquare extends Component{
    render(){
        return(
            <button className='box delcol' onClick={this.props.minusColumn}>-</button>
        )
    }
}
