import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Rockets from '../Rockets';
import Missions from '../Missions';
import Profile from '../Profile';
import Header from '../Header';
import store from '../../redux/configureStore';

describe('Render Rockets page', () => {
  it('Renders the Rockets page', () => {
    const rockets = TestRenderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    ).toJSON();
    expect(rockets).toMatchSnapshot();
  });
});

describe('Render Missions page', () => {
  it('Renders the Missions', () => {
    const missions = TestRenderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    ).toJSON();
    expect(missions).toMatchSnapshot();
  });
});

describe('Render Profile page', () => {
  it('Renders the profile', () => {
    const profile = TestRenderer.create(
      <Provider store={store}>
        <Profile />
      </Provider>,
    ).toJSON();
    expect(profile).toMatchSnapshot();
  });
});

describe('Render Navbar', () => {
  it('Renders the navbar', () => {
    const header = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>,
    ).toJSON();
    expect(header).toMatchSnapshot();
  });
});
