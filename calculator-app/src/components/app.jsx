import React, { Component } from 'react';
import NavBar from './navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './content/home';
import Calculator from './content/calculator';
import Login from './content/login';
import Register from './content/register';
import NotFound from './content/notFound';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavBar />
                <div className='container'>
                    <Routes>
                        <Route path='/calculator' element={<Home />}></Route>
                        <Route path='/calculator/home' element={<Home />}></Route>
                        <Route path='/calculator/calculator' element={<Calculator />}></Route>
                        <Route path='/calculator/login' element={<Login />}></Route>
                        <Route path='/calculator/register' element={<Register />}></Route>
                        <Route path='/calculator/404' element={<NotFound />}></Route>
                        <Route path='/calculator/*' element={<Navigate replace to='/calculator/404' />}></Route>
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;