import {Component} from 'react';
import logo from './logo.svg';
import './App.css';


const Header = () => { // React Component. Arrow syntaxsis
  return <h2 className='App-testH2'>Hi, Bro!</h2> //React Element
}

// const Field = () => { // React Component. Arrow syntaxsis
//   const holder = 'Enter here';
//   const styleField = {
//     width: '300px'
//   };
//   return <input placeholder={holder} type="text" style={styleField} /> //React Element
// }

class Field extends Component { // React Component. Class syntaxsis
  render() {
    const holder = 'Enter here';
    const styleField = {
      width: '300px'
    };

    return <input placeholder={holder} type="text" style={styleField} />;
  }
 
}

function Btn() { // React Component. Function Declaration syntaxsis
  const text = 'Log in';
  const logged = false;

  // const res = () => {
  //   return 'Log in';
  // }

  // const p = <p>Log in</p>

  // if (logged) {
  //   return <button>Enter</button>;
  // } else {
  //   return <button>{text}</button>;
  // }

  return <button>{logged ? 'Enter' : text}</button> //React Element
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

      
      <Header />
      <Field />
      <Btn />

    </div>
  );
}

export default App;
