import logo from './footbal-logo.png';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header logo={logo}></Header>
      <Home></Home>
    </div>
  );
}

export default App;
