import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
// import './index.scss';

import App from './components/app/app';

// import App from './App';

// const elem = <h2>Hello world!</h2>;

// const elem = React.createElement('h2', {className: 'greetings'}, 'Hi, World!');

// console.log(elem); //mogno posmotrt' 4to vozvrawaet metod createElement
// const elem = { // method createElement classa React vozvrawaet podobnuu structuru
//   type: 'h2',
//   props: {
//     className: 'greeting',
//     children: 'Hi, World!'
//   }
// };

// const text = 'Greetings!';

// const elem2 = (
//   <div>
//     <h2 className='hi'>Hello World!</h2>
//     <h2 className="greeting">My {text}</h2>
//     <h2 className="sum">Sum 2 + 2 = {2+2}</h2>
//     {/* <h2 className="date">Date: {new Date()}</h2> // nel'zja vstavljat' komandy, kotoraya vozvrawaet object */}
//     {/* <h2>{{}}</h2> // nel'zja vstavljat' komandy, kotoraya vozvrawaet object */}
//     <h2>{[123, 'fffff']}</h2>
//     <label htmlFor="text">Input Label</label>
//     <input type="text" />
//     <button className='btn'>Button</button>

//     {/* {atributi kak i klassi zapisivautsa v formate camelCase */} 
//     <button tabItem="0">Click</button> 
//   </div>
// );
// console.log(elem2);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  elem2
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

