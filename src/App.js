import React from 'react';
import Sidebar from './components/Sidebar';
import Cards from './components/Cards';
import Header from './components/Header';

const App = () => {
  return (
    <div className="container-fluid bg-gray p-0">
      <div className="row">
        <div className="col-md-3 m-0 p-0">
          <Sidebar />
        </div>
        <div className="col-md-9 p-0">
          <div className="row">
            <div className="col">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
