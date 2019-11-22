import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/employees/signup';
import Login from './components/employees/login';

class App extends Component {
  
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>
        </p>
        <login />
        <SignUp />
      </header>
    </div>
  );
}
}
export default App;
