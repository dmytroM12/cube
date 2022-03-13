
import React, {Component} from 'react'

export class NewColSquare extends Component{
    render(){
        return(
            <button className='box newcol' onClick={this.props.plusColumn}>+</button>
        )
    }
}