import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import NameComponent from './components/NameComponent'
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      un: 'kaushik'};
    }
  
  componentDidMount()
    {
        console.log("mounted");
    }
  
  clickHandle() {
    this.setState({
      un: 'kaushik brahmin king'
    });
  }
  
render(){
  return (
    <div>
     <p style={{fontSize:'50px'}} className="text-large">hi</p>
   <NameComponent un='shivansh kaushik' />
   {this.state.un}
   <button onClick={this.clickHandle.bind(this)}>clickMe</button>
    </div>
  );
}
}
export default App;
