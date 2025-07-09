import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import SignIn from './Components/SignIn';

const App = () => {
  return (
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  );
};

export default App;
