
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