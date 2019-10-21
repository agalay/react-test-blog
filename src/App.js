import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header, NotFound } from "./components";
import { ArticleList, FullArticle } from "./modules";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <div className="content">
            <Switch>
              <Route path="/" exact component={() => <ArticleList />} />
              <Route path="/article/:id" exact component={FullArticle} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
