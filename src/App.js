import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Login from './components/login';
import Register from './components/Register'
import Body from './components/layouts/body';


if (localStorage.jwtToken) {
  //decode the jwt token
  const decoded = jwt_decode(localStorage.jwtToken)

  //set current user
  store.dispatch(setCurrentUser(decoded))

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //logout user

    //redirect to login
    window.location.href = '/login';
  }
}


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Notification />
          <div className='router-component'>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          </div>
          <Body/>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
