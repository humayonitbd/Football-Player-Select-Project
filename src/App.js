import logo from './footbal-logo.png';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Question from './components/Question/Question';

function App() {
  return (
    <div className="App">
      <Header logo={logo}></Header>
      <Home></Home>
      <Question></Question>
    </div>
  );
}

export default App;
