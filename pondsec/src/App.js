
import './App.css';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'

import Landing from './Pages/Landing';

function App() {
  return (
    <div className="App">
      <Router>
         <Switch>
          <Route path='/' component={Landing} />

        </Switch>

      </Router>
     
   
    </div>
  );
}

export default App;
