import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Payroll from './pages/Payroll';
import Redirect from './components/utils/Redirect';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/payroll-system' element={<Payroll />} />
        <Route path='/' element={<Redirect to='/payroll-system' />}/>
      </Routes>
    </div>
  );
}

export default App;
