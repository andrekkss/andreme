import React from 'react';
import { Provider } from 'mobx-react';
import Service from '../core/service/axios';

const App: React.FC = () => {
  const service = new Service(); 

  return (
    <Provider service={service}>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
} 

export default App;