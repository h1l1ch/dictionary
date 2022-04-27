import { Fragment } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import ResultPage from './components/ResultPage';
import { ThemeProvider } from 'styled-components';

const theme = {
  mobile: '768px',
}

function App() {
  
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home-page" />} />
          <Route path="/home-page" element={<HomePage/>} />
          <Route path="/result-page" element={<ResultPage/>} />
        </Routes>
      </ThemeProvider>
    </Fragment>
  );
};



export default App;
