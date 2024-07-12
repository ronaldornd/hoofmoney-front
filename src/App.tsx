import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe o Routes

import Home from './pages/Home';
import Forget from './Auth/Forget';
import Login from './Auth/Login';
import Register from './Auth/Register';

function App() {
    return (
        <Router>
            <Routes> {}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forget" element={<Forget />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;