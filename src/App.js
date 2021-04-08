import Home from './components/home/Home';
import CommmitViewer from './components/commitViewer/CommitViewer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/commits" component={CommmitViewer} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
