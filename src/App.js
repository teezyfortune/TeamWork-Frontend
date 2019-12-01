import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
// import Footer from './components/layouts/Footer';
// import Login from './components/login';
// import Register from './components/Register'
// import Body from './components/layouts/body';



function App() {
  return (
    <div>
   <BrowserRouter>
   <Header/>
   <Route  path= '/' exact  render = {
     () => {
       return (
        <h1> Hello World</h1>
       )
     }
   }> 

   </Route>

   </BrowserRouter>


 <h1>Hello</h1>
</div>
  )
}


export default App;
