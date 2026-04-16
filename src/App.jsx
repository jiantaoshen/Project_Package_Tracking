import './App.css';
import FetchApi from './Features/fetchdata';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tracking your packages</h1>
        <FetchApi UrlAPI="https://my.api.mockaroo.com/orders.json?key=e49e6840" />
      </header>
    </div>
  );
}

export default App;
