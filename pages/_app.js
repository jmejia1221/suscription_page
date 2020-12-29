// This `pages/_app.js` file is useful to use styles.scss globally.
// and add global wrappers like redux

// Libs
import React from 'react';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';

// Redux Components
import store from '../redux/store';

// CSS
import '../styles.scss';

const App = ({ Component, pageProps }) => {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
};

const makeStore = () => store;

export default withRedux(makeStore)(App)