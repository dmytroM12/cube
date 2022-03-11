
import React, {Component} from 'react'


export class NotSquare extends Component{
    render(){
    return(
        <div className="box" row={this.props.row} col={this.props.col}/>
    )
}}
