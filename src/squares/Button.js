import React, {Component} from 'react'


export class Button extends Component{
    render(){
        return(
            <button className={`box ${this.props.type}`} id={this.props.type} onClick={this.props.action} style={this.props.style}>{this.props.text}</button>
        )
    }
}
