import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Importe o Routes
import { ToastContainer } from 'react-toastify';
import Forget from './pages/Auth/Forget';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Home from './pages/Home';

function App() {
    const [logged] = useState(() => {
        const token = localStorage.getItem('token');
        return !!token; // Retorna true se token existir, false caso contrário
    });

    return (
        <>
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
        </>
    );
}

export default App;