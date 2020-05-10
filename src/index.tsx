import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RelayEnvironment from './RelayEnvironment';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

ReactDOM.render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={<p>Loading...</p>}>
      <App />
    </Suspense>
  </RelayEnvironmentProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
