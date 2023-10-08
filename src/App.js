import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import PageNotFound from './component/PageNotFound';
import Login from './component/Login';
import { useState } from 'react';
import Protected from './component/ProtectedRoute';

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(true)
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
