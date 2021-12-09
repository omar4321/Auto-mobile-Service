
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Notfound from './pages/Notfound/Notfound';
import Booking from './pages/Booking/Booking/Booking';
import Login from './pages/Login/Login/Login';
import Navber from './pages/Home/Navber/Navber';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/Login/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
    
   
       <AuthProvider> <Router>
         <Navber/>
         <div style={{marginTop:'56px'}}> 
           <Switch>
            <Route exact path="/">
            <Home></Home>
            </Route>
            <Route path="/home">
            <Home></Home>
            </Route>
            <Route path="/login">
             <Login></Login>
            </Route>
            <PrivateRoute path='/booking/:serviceId'>
              <Booking></Booking>
            </PrivateRoute>
          
            <Route path="*">
            <Notfound></Notfound>
            </Route>
          </Switch></div>
        </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
