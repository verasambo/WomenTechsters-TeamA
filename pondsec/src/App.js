
import './App.css';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Landing from './Pages/Landing';
import SignupForm from './Components/SignupForm';
import LoginForm from './Components/LoginForm';

import Features from './Components/Features';
import Microcontoller from './Components/Microcontroller';

import Pondpage from './Pages/Pondpage';



function App() {
  return (
    <div className="App">
      <Router>
         <Switch>

          <Route exact path='/' component={Landing} />
          <Route exact path='/home' component={Homepage} />
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/login" component={LoginForm} />

          <Route  exact path="/features"  component={Features}/>
          <Route exact path="/microcontroller" component={Microcontoller}/> 

          <Route exact path="/pond" component={Pondpage} />


        </Switch>

      </Router>
     
   
    </div>
  );
}

export default App;
