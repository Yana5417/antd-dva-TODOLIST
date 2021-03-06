import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage/index';
import Products from './routes/ProductsPage/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Products} />
        <Route path="/index" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
