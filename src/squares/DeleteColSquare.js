
import React, {Component} from 'react'


export class DeleteColSquare extends Component{
    render(){
        return(
            <btn className='box' onClick={this.delCol} id={this.props.id} onMouseEnter={this.appear} onMouseLeave={this.disappear}>-</btn>
        )
    }
    delCol=()=>{
        if(this.props.colNum>1){
            this.props.mod(0,-1);
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
