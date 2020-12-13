import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ProfileIdea from './pages/ProfileIdea';

import { GlobalStyle } from './styles/Global';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ProfileIdea} exact={true}/>
      </Switch>
      <GlobalStyle whiteColor/>
    </Router>
  );
}

export default App;
