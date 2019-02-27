import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PageImg from './components/PageImg';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={PageImg} />
    </div>
  </BrowserRouter>
);
export default App;
