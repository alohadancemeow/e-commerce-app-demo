import React from 'react';
import './App.css';
import './fontawesome'
import { BrowserRouter } from 'react-router-dom'

import Routers from './routes/Routers';
import Layout from './Layout';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routers />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
