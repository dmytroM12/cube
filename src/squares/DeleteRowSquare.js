
import React, {Component} from 'react'


export class DeleteRowSquare extends Component{
    render(){
        return(
            <btn className='box' onClick={this.delRow} id={this.props.id} onMouseEnter={this.appear} onMouseLeave={this.disappear}>-</btn>
        )
    }
    delRow=()=>{
        if(this.props.rowNum>1){
            this.props.mod(-1,0);
        }
    }
    appear=()=>{
        let self=document.querySelector("#"+this.props.id)
        self.classList.add('red')

    }
    disappear=()=>{
        let self=document.querySelector("#"+this.props.id)
        self.classList.remove('red')
    }
}