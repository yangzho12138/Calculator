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
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/home' element={<Home />}></Route>
                        <Route path='/calculator' element={<Calculator />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/register' element={<Register />}></Route>
                        <Route path='/404' element={<NotFound />}></Route>
                        <Route path='*' element={<Navigate replace to='/404' />}></Route>
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;