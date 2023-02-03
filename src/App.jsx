import "./App.css"
import { Component } from "react";
import BtnPanel from "./components/BtnPanel";
import Display from "./components/Display";
import operations from "./logic/operations";

class App extends Component {
  state = {
    total: null,
    next: null,
    operator: null,
  };

  handleClick = btnName => this.setState(operations(this.state, btnName))
  render() {
    return(
      <div className="component-app">
        <Display value={this.state.next || this.state.total || '0'}/>
        <BtnPanel clickHandler={this.handleClick} />
      </div>
    )
  }
}

export default App;
