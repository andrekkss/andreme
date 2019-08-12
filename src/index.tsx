import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';

import HomeProvider from './features/home/HomeProvider';
import * as serviceWorker from './core/serviceWorker';
import Service from './core/service/axios';

new Service().init('https://api.github.com/')

ReactDOM.render(<HomeProvider />, document.getElementById('root'));

serviceWorker.unregister();