import React, {Component} from 'react'
import {Square,NewColSquare,NewRowSquare,DeleteColSquare,DeleteRowSquare,NotSquare} from './squares/Squares'
class Field extends Component {
    state={
        arr:[]
    }
    componentWillMount(){
        let gridArr=[]
        for(let theRow=0;theRow<4;theRow++){
            gridArr.push([])
            for(let theCol=0;theCol<4;theCol++){
                gridArr[theRow].push({row:theRow, col:theCol})
            }
        }
        this.setState({arr:gridArr})
    }
    render(){
        let gridArr=this.state.arr
        let TheGrid=gridArr.map(theRow=> theRow.map(el=><div class='box-blue' style={{gridRow:el.row, gridColumn:el.col}}row={el.row} col={el.col} key={`${el.row}x${el.col}`}></div>))
        console.log(TheGrid)
        return (
        <div class="grid-container" key="gridContainer">
            <TheGrid key="theGrid"/>
        </div>
        )
    }
}
export default Field