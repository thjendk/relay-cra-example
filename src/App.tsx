import React from 'react';
import { preloadQuery, usePreloadedQuery } from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import graphql from 'babel-plugin-relay/macro';
import Header from './components/Header';

const appQuery = graphql`
  query AppQuery {
    user {
      ...Header_user
    }
  }
`;

const query = preloadQuery(RelayEnvironment, appQuery, {});

function App() {
  const data = usePreloadedQuery<any>(appQuery, query);

  return (
    <div className="App">
      <Header user={data.user} />
    </div>
  );
}

export default App;
