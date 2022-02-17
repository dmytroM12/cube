
import React, {Component} from 'react'
export class Square extends Component{
    render(){
    return(
        <div className="box blue" row={this.props.row} col={this.props.col} onMouseEnter={this.appear} onMouseLeave={this.disappear}/>
    )
    
}
appear=()=>{
        let r=document.querySelector(`#dr${this.props.row}`)
        let c=document.querySelector(`#dc${this.props.col}`)
        r.classList.add('red')
        c.classList.add('red')

    }
disappear=()=>{
        let r=document.querySelector(`#dr${this.props.row}`)
        let c=document.querySelector(`#dc${this.props.col}`)
        r.classList.remove('red')
        c.classList.remove('red')
    
    }

}
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
            <div className='box' onClick={this.delRow} id={this.props.id} onMouseEnter={this.appear} onMouseLeave={this.disappear}>-</div>
        )
    }
    delRow=()=>{
        if(this.props.rn>1){
            this.props.mod(-1,0);
        }
    }
    appear=()=>{
        let e=document.querySelector("#"+this.props.id)
        e.classList.add('red')

    }
    disappear=()=>{
        let e=document.querySelector("#"+this.props.id)
        e.classList.remove('red')
    }
}

export class DeleteColSquare extends Component{
    render(){
        return(
            <div className='box' onClick={this.delCol} id={this.props.id} onMouseEnter={this.appear} onMouseLeave={this.disappear}>-</div>
        )
    }
    delCol=()=>{
        if(this.props.cn>1){
            this.props.mod(0,-1);
        }
    }
    appear=()=>{
        let e=document.querySelector("#"+this.props.id)
        e.classList.add('red')

    }
    disappear=()=>{
        let e=document.querySelector("#"+this.props.id)
        e.classList.remove('red')
    }
}
