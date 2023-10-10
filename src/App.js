import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import PageNotFound from './component/PageNotFound';
import Login from './component/Login';
import { useEffect, useState } from 'react';
import Protected from './component/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './store/actions/login';

function App() {
  const {data:{isLoggedIn}} = useSelector(state=>state.login)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(login())
  },[])
  return (
    <BrowserRouter>
          <Header />
      <Routes>
            <Route
            path="/home"
            element={
              <Protected isSignedIn={isLoggedIn}>
                <Home />
              </Protected>
            }
          />
          <Route
            path="/"
            element={
              <Protected isSignedIn={isLoggedIn}>
                <Home />
              </Protected>
            }
          />
          {!isLoggedIn ? <Route path="/login" element={<Login />} />:null}
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
