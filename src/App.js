import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';

// styles
// import './App.css';

// page components
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/' exact>
              {!user && <Redirect to='/login' />}
              {user && <Home />}
            </Route>
            <Route path='/login'>
              {!user && <Login />}
              {user && <Redirect to='/' />}
            </Route>
            <Route path='/signup'>
              {!user && <Signup />}
              {user && <Redirect to='/' />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
