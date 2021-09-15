
import './App.css';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Landing from './Pages/Landing';
import SignupForm from './Components/SignupForm';
import LoginForm from './Components/LoginForm';


function App() {
  return (
    <div className="App">
      <Router>
         <Switch>

          <Route exact path='/' component={Landing} />
          <Route exact path='/home' component={Homepage} />
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/login" component={LoginForm} />

        </Switch>

      </Router>
     
   
    </div>
  );
}

export default App;
