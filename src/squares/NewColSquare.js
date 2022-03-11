
import React, {Component} from 'react'

export class NewColSquare extends Component{
    render(){
        return(
            <btn className='box orange' onClick={this.addCol}>+</btn>
        )
    }
    addCol=()=>{
        this.props.mod(0,1);
    }
}