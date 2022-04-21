// React
import { Fragment } from 'react';
// React Router
import { Route, Routes, Navigate } from "react-router-dom";
// Components
import HomePage from "./HomePage";
import ResultPage from './ResultPage';
// CSS styles
import './App.css';

function App() {
  
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home-page" />} />
        <Route path="/home-page" element={<HomePage/>} />
        <Route path="/result-page" element={<ResultPage/>} />
      </Routes>
    </Fragment>
  );
};



export default App;
