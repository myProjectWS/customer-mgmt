import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import client from './components/client'
import { ApolloProvider } from "react-apollo";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
<ApolloProvider client={client}>
    <Router>
        <App/>
    </Router>
</ApolloProvider>, document.getElementById('root'));
registerServiceWorker();