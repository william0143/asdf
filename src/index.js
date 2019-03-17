import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 
'react-router-dom';
import {ProductProvider} from './context';
import registerServiceWorker from './registerServiceWorker';
import { env } from './config';

ReactDOM.render(
<ProductProvider>
    <Router>
        <App env={env} />
    </Router>
</ProductProvider>
    
, document.getElementById('root'));

registerServiceWorker();
