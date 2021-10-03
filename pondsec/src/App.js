
import './App.css';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Landing from './Pages/Landing'
import SignupForm from './Components/SignupForm'
import LoginForm from './Components/LoginForm'
import AddPond from './Components/AddPond'
import Microcontoller from './Components/Microcontroller'
import Pondpage from './Pages/Pondpage'
import NewsPage from './Pages/NewsPage';



function App() {
  return (
    <div className="App">
      <Router>
         <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/home' component={Homepage} />
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route  exact path="/pond/add"  component={AddPond}/>
          <Route exact path="/microcontroller" component={Microcontoller}/> 
          <Route exact path="/pond" component={Pondpage} />
          <Route exact path="/news" component={NewsPage}/>
        </Switch>

      </Router>
     
   
    </div>
  );
}

export default App;
