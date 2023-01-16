import React from 'react';
import './style.css';
import Donenlogom from './donenlogo';
import Tablom from './giris2';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div className="col-md-6 p-0">
        <Tablom />
      </div>

      <div className="col-md-6 p-0">
        <Donenlogom />
      </div>
    </div>
  );
}
