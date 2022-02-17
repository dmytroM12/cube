import React, {Component} from 'react'
import {Square,NewColSquare,NewRowSquare,DeleteColSquare,DeleteRowSquare,NotSquare} from './Squares'

class Field extends Component {
    render(){
        const {row,col}=this.props
        let column=[]
        let theRow
        let firstRow=[]
        firstRow.push(<td key="td_not1"><NotSquare key="not1"/></td>)
        for(let frc=0;frc<col;frc++){
            firstRow.push(<td key={`td_dc${frc}`}><DeleteColSquare key={`dc${frc}`} id={`dc${frc}`} cn={col} mod={this.props.mod}/></td>)
        }        
        column.push(<tr key={`firstRow`}>{firstRow}</tr>)
        for(let r=0;r<row;r++){
            theRow=[]
            theRow.push(<td key={`td_dr${r}`}><DeleteRowSquare key={`dr${r}`} id={`dr${r}`} rn={row} mod={this.props.mod}/></td>)
            for(let c=0;c<col;c++){
                theRow.push(<td key={`td_${r}x${c}`}><Square  row={r} col={c} key={`${r}x${c}`} /></td>)

            }
            if(r===0){
                theRow.push(<td key="td_newRow"><NewRowSquare key="newRow" mod={this.props.mod}/></td>)
            }
            column.push(<tr key={`r${r}`}>{theRow}</tr>)
        }

        column.push(<tr key="lastRow"><td key="td_not2"><NotSquare key="not2"/></td><td key="td_newCol"><NewColSquare  mod={this.props.mod} key="newCol"/></td></tr>)


        return (
        <table key="table">
            <tbody key="tbody">{column}</tbody>
        </table>
        )
    }
}
export default Field