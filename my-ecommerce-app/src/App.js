import './App.css';
import React from 'react';
import HomePage from './components/Homepage.js';
import ProductPage from './components/ProductPage.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/Login' element={<HomePage />} />
                <Route path='/Products' element={<ProductPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;