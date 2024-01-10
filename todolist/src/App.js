// import logo from './logo.svg';

import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>

      </header> */}
      <Header></Header>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
