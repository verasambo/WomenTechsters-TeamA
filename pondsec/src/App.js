
import './App.css';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Landing from './Pages/Landing';

function App() {
  return (
    <div className="App">
      <Router>
         <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/home' component={Homepage} />
        </Switch>

      </Router>
     
   
    </div>
  );
}

export default App;
