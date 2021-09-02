import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Missions from './components/Missions';
import Profile from './components/Profile';
import Rockets from './components/Rockets';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Rockets />
            </Route>
            <Route path="/Missions">
              <Missions />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
