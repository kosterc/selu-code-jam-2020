import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotePage from './components/NotePage';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/notes">Notes</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/notes">
          <NotePage />
        </Route>
        <Route path="/">
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
