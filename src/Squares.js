
import React, {Component} from 'react'
export class Square extends Component{
    render(){
    return(
        <div className="box blue" row={this.props.row} col={this.props.col} onMouseEnter={this.toggler} onMouseLeave={this.toggler}/>
    )
    
}
toggler=()=>{
        let r=document.getElementById(`dr${this.props.row}`)
        let c=document.getElementById(`dc${this.props.col}`)
        r.classList.toggle('red')
        c.classList.toggle('red')

    }}
export class NotSquare extends Component{
    render(){
    return(
        <div className="box" row={this.props.row} col={this.props.col}/>
    )
}}


export class NewRowSquare extends Component{
    render(){
        return(
            <div className='box orange' onClick={this.addRow}>+</div>
        )
    }
    addRow=()=>{
        this.props.mod(1,0);
    }
}
export class NewColSquare extends Component{
    render(){
        return(
            <div className='box orange' onClick={this.addCol}>+</div>
        )
    }
    addCol=()=>{
        this.props.mod(0,1);
    }
}
export class DeleteRowSquare extends Component{
    render(){
        return(
            <div className='box' onClick={this.delRow}>-</div>
        )
    }
    delRow=()=>{
        if(this.props.rn>1){
            this.props.mod(-1,0);
        }
    }
}

export class DeleteColSquare extends Component{
    render(){
        return(
            <div className='box' onClick={this.delCol}>-</div>
        )
    }
    delCol=()=>{
        if(this.props.cn>1){
            this.props.mod(0,-1);
        }
    }
}
