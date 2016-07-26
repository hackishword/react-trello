//web/static/js/application.js

import React                    from 'react';
import ReactDOM                 from 'react-dom';
import { browserHistory }       from 'react-router';
import configureStore           from './store';
import Root                     from './containers/root';

const store  = configureStore(browserHistory);

const target = document.getElementById('main_container');
const node = <Root routerHistory={browserHistory} store={store}/>;

var root = <h1>Trello</h1>
ReactDOM.render(node, target);
console.log("how we rock and roll");
