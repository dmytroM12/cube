import React, {Component} from 'react'

export class NewRowSquare extends Component{
    render(){
        return(
            <btn className='box orange' onClick={this.addRow}>+</btn>
        )
    }
    addRow=()=>{
        this.props.mod(1,0);
    }
}