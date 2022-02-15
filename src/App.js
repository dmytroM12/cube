import React, {Component} from 'react'
import Field from './Field'
class App extends Component {
    state={
            rows:4,
            columns:4,
    }
  render() {
    return (
      <div className="container">
      <Field row={this.state.rows} col={this.state.columns} mod={this.mod}/>
      </div>
    )
  }
  mod=(x,y)=>{
    this.setState({rows:this.state.rows+x,columns:this.state.columns+y})
}
}

export default App