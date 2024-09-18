import './App.css';
import Dashboard from './components/Dashboard';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux'

import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./components/login/Login'));


const App = () => {
  return (
    <Router> 
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes> 
    </Router>
  );
}
 

export default App;
