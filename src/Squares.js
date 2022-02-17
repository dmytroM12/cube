
import React, {Component} from 'react'
export class Square extends Component{
    render(){
    return(
        <div className="box blue" row={this.props.row} col={this.props.col} onMouseEnter={this.appear} onMouseLeave={this.disappear}/>
    )
    
}
appear=()=>{
        let delRow=document.querySelector(`#dr${this.props.row}`)
        let delCol=document.querySelector(`#dc${this.props.col}`)
        delRow.classList.add('red')
        delCol.classList.add('red')

    }
disappear=()=>{
        let delRow=document.querySelector(`#dr${this.props.row}`)
        let delCol=document.querySelector(`#dc${this.props.col}`)
        delRow.classList.remove('red')
        delCol.classList.remove('red')
    
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

export class DeleteColSquare extends Component{
    render(){
        return(
            <div className='box' onClick={this.delCol} id={this.props.id} onMouseEnter={this.appear} onMouseLeave={this.disappear}>-</div>
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
