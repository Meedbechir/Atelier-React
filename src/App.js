import React from 'react';
import Sidebar from './components/Sidebar';
import Cards from './components/Cards';
import Header from './components/Header';
const App = () => {
  return (
    <div className="container-fluid bg-dark pt-3">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <Header />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default App;
