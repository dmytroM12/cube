import React, {Component} from 'react'
import {Square,NewColSquare,NewRowSquare,DeleteColSquare,DeleteRowSquare,NotSquare} from './Squares'

class Field extends Component {
    render(){
        const {row,col}=this.props
        let column=[]
        let theRow
        let firstRow=[]
        firstRow.push(<td><NotSquare/></td>)
        for(let frc=0;frc<col;frc++){
            firstRow.push(<td><DeleteColSquare id={`dc${frc}`} cn={col} mod={this.props.mod}/></td>)
        }        
        column.push(<tr>{firstRow}</tr>)
        for(let r=0;r<row;r++){
            theRow=[]
            theRow.push(<td><DeleteRowSquare id={`dr${r}`} rn={row} mod={this.props.mod}/></td>)
            for(let c=0;c<col;c++){
                theRow.push(<td><Square  row={r} col={c} /></td>)

            }
            if(r===0){
                theRow.push(<td><NewRowSquare mod={this.props.mod}/></td>)
            }
            column.push(<tr >{theRow}</tr>)
        }

        column.push(<tr><td><NotSquare/></td><td><NewColSquare  mod={this.props.mod}/></td></tr>)


        return (
        <table >
            <tbody>{column}</tbody>
        </table>
        )
    }
}
export default Field