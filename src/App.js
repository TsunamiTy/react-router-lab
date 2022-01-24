import "./App.css";
// Import route and our components
import { Route, Switch } from "react-router-dom";
import Stocks from "./pages/Stocks";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Nav from "./components/Nav";
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/stocks">
          <Stocks />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route
          path="/price/:symbol"
          render={(routerProps) => <Price {...routerProps} />}
        />
        {/* 
    
                Render Props provide three objects
        1) History - provides information on browser history and methods to mutate browser history
        2) Location - provides information on query params - aka anything after the ?
        3) Match - provides information on url params
        */}
      </Switch>
    </div>
  );
}

export default App;
