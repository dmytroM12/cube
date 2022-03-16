
import React, {Component} from 'react'
export class Square extends Component{
    render(){
    return(
        <div className="box blue" style={{ gridRow: this.props.row, gridColumn: this.props.col }} row={this.props.row} col={this.props.col} onMouseEnter={this.moveThem}/>
    )
    }
    moveThem=()=>{
        const delCol=document.getElementById('delCol');
        const delRow=document.getElementById('delRow');
        delCol.style.left=`${55*(this.props.col-1)}px`;
        delRow.style.top=`${55*(this.props.row-1)}px`;
        
    }
}