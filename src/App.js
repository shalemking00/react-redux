import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ProtectedRoute from './components/utils/ProtectedRoute';
import { Navigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';


function App() {

  const {token}=useSelector((state)=>state.auth)
  

  return (
    <>
    <BrowserRouter>
      <div className='container'>
        <Header/>
        <Routes>
        <Route  path="/login" element={!token ? <Login /> : <Navigate to="/" />}/>
        <Route exact path="/" element= {token ? <Home /> : <Navigate to="/register" />}/>
        <Route exact path="/cart/:id" element= {token ? <Cart /> : <Navigate to="/login" />}/>
        <Route path="/register" element= {!token ? <Register /> : <Navigate to="/login" />}/>

        {token && (
          <>
            <Route path="/cart" element={<Cart/>}/>
          </>
        )}
        </Routes>
      </div>
    </BrowserRouter>
    <ToastContainer/>
    
    </>
  );
}

export default App;
