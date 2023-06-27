import React from 'react';
import {createRoot} from 'react-dom/client'
// import ReactDOM from 'react-dom';

import App from './App';
// import { BrowserRouter as Router } from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'));

// const rootElement = document.getElementById("root");

// You'll need to wrap <App /> for routing to work
// createRoot(
//     <Router>
//         <App />
//     </Router>, rootElement);

createRoot(document.getElementById('root')).render(<App />);



//so App will render the components and show them on screen