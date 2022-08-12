import './App.css';
import {urlAuth} from './api/auth';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href={urlAuth}
          target="_blank"
          rel="noopener noreferrer"
        >
          Auth
        </a>
      </header>
    </div>
  );
}

export default App;
