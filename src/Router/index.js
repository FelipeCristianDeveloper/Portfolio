import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Skills from '../Pages/Skills';

export default function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/projects' element={<Projects />}/>
                <Route path='/skills' element={<Skills />}/>
            </Routes>
        </BrowserRouter>
    )
}