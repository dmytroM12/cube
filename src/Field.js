import React, {Component} from 'react'
import { NotSquare } from './squares/NotSquare'
import {Square,NewColSquare,NewRowSquare,DeleteColSquare,DeleteRowSquare} from './squares/Squares'
class Field extends Component {
    constructor(){
        super()
        let gridArr=[]
        for(let theRow=1;theRow<=5;theRow++){
            gridArr.push([])
            for(let theCol=1;theCol<=5;theCol++){
                gridArr[theRow-1].push({row:theRow, col:theCol})
            }
        }
        this.state={arr:gridArr,rows:5,columns:5}
    }
    render(){
        return (
        <div className='outer-grid' key='outerGrid'  onMouseLeave={this.hideThem}>
            <NotSquare key="notSquare"/>
            <DeleteColSquare key='delCol'  minusColumn={this.minusColumn}/>
            <DeleteRowSquare key='delRow' minusRow={this.minusRow}/>
            <div className="grid-container" key="gridContainer"onMouseEnter={this.showThem}>
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
            this.resetThem();
        }
    }
    minusRow=()=>{
        if(this.state.rows>1){
            let rowNum=this.state.rows-1
            let theArr=this.state.arr.slice(0,rowNum)
            this.setState({rows:rowNum,arr:theArr})
            this.resetThem();
        }
    }
    showThem(){
        const delCol=document.getElementById('delCol');
        const delRow=document.getElementById('delRow');
        delCol.style.display="block";
        delRow.style.display="block"; 
    }
    hideThem(){
        const delCol=document.getElementById('delCol');
        const delRow=document.getElementById('delRow');
        delCol.style.display="none";
        delRow.style.display="none"; 
    }
    resetThem(){
        const delCol=document.getElementById('delCol');
        const delRow=document.getElementById('delRow');
        delCol.style.display="none";
        delRow.style.display="none"; 
        delCol.style.left=`0px`;
        delRow.style.top=`0px`;
    }

}
export default Field