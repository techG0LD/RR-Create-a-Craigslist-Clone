// Import data

// Import components
import './App.css';
import SearchBar from './SearchBar';
import Directory from './Directory'
import Gallery from './Gallery'
import Sidebar from './Sidebar'


function App(){
  return (
    // how to use inline-styling jsx
    // <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}></div>
    <div>
      <h1>craigslist</h1>
      <div className="App">
      <SearchBar />
      <Directory/>
      <Gallery/>
      <Sidebar/>
      </div>
    </div>
  );
}

export default App;
