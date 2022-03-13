import React, {Component} from 'react'
import {Square,NewColSquare,NewRowSquare,DeleteColSquare,DeleteRowSquare} from './squares/Squares'
class Field extends Component {
    state={
        arr:[],
        rows:5,
        columns:5
    }
    componentWillMount(){
        let gridArr=[]
        for(let theRow=1;theRow<=this.state.rows;theRow++){
            gridArr.push([])
            for(let theCol=1;theCol<=this.state.columns;theCol++){
                gridArr[theRow-1].push({row:theRow, col:theCol})
            }
        }
        this.setState({arr:gridArr})
    }
    render(){
        return (
        <div className='outer-grid' key='outerGrid'>
            <DeleteColSquare key='delCol' minusColumn={this.minusColumn}/>
            <DeleteRowSquare key='delRow' minusRow={this.minusRow}/>
            <div className="grid-container" key="gridContainer">
                {this.state.arr.map((row, rowIndex) => (
                    <div className="grid-container-row" key={rowIndex}>
                        {row.map((el) => (
                            <Square key={`${el.row}x${el.col}`} row={el.row} col={el.col}/>
                        ))}
                    </div>
                ))}
            </div>
            <NewColSquare key='newCol' plusColumn={this.plusColumn}/>
            <NewRowSquare key='newRow' plusRow={this.plusRow}/>
            
        </div>
        );
    }
    plusColumn=()=>{
        let colNum=this.state.columns+1
        let theArr=this.state.arr.map((theRow,rowIndex)=>[...theRow,{row:rowIndex+1,col: colNum}])
        this.setState({arr:theArr, columns:colNum})
        
        console.log(this.state)
    }
    
    plusRow=()=>{
        let colNum=this.state.columns
        let rowNum=this.state.rows+1
        let theArr=this.state.arr
        let thisRow=[]
        for(let theCol=1;theCol<=colNum;theCol++){
            thisRow.push({col:theCol,row: rowNum})
        }
        theArr.push(thisRow)
        this.setState({arr:theArr, rows:rowNum})
    }
    minusColumn=()=>{
        if(this.state.columns>1){
            let colNum=this.state.columns
            let theArr=this.state.arr.map(row=>row.filter(el=>el.col<colNum))
            colNum--
            this.setState({columns:colNum,arr:theArr})
        }
    }
    minusRow=()=>{
        if(this.state.rows>1){
            let rowNum=this.state.rows-1
            let theArr=this.state.arr.slice(0,rowNum)
            this.setState({rows:rowNum,arr:theArr})
        }
    }

}
export default Field