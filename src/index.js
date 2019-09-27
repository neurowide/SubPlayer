import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import toastr from 'toastr';
import NProgress from 'nprogress';
import * as serviceWorker from './serviceWorker';
import { isMobile } from './utils';
import 'normalize.css';
import './fontello/css/fontello.css';
import 'toastr/build/toastr.css';
import 'nprogress/nprogress.css';
import 'react-virtualized/styles.css';
import 'artplayer-react/dist/artplayer-react.css';

toastr.options.timeOut = 3000;
toastr.options.hideDuration = 300;
NProgress.configure({ minimum: 0, showSpinner: false });
ReactDOM.render(isMobile() ? 'Please use a computer to access this app.' : <App />, document.getElementById('root'));
serviceWorker.unregister();
