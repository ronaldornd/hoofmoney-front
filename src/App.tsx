import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe o Routes
import Home from './pages/Home';
import Forget from './pages/Auth/Forget';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

function App() {
    const [logged, setLogged] = useState(() => {
        const token = localStorage.getItem('token');
        return !!token; // Retorna true se token existir, false caso contrário
    });

    return (
        <Router>
            <Routes>
                {/* Verifica se a variável logged é true, se for, redireciona para a rota home, se não, redireciona para a rota login */}
                {logged ?
                    <Route path="/" element={<Home />} />
                    :
                    <Route path="/" element={<Login />} />
                }
                <Route path="/home" element={<Home />} />
                <Route path="/forget" element={<Forget />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;