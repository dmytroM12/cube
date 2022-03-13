
import React, {Component} from 'react'
export class Square extends Component{
    render(){
    return(
        <div className="box blue" style={{ gridRow: this.props.row, gridColumn: this.props.col }} row={this.props.row} col={this.props.col} />
    )
    
}
}