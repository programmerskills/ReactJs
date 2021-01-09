import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/adminlte.min.css';
import Signin from './components/Signin';
import {BrowserRouter as Router, Route  , Switch} from 'react-router-dom'
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';

import Dashboard from './components/Dashboard';
import Addcategory from './components/Addcategory';
import Viewcategory from './components/Viewcategory';
import Editcategory from './components/Editcategory';

function App() {
  return (
    <Router basename='/admin'>
      <div className="App">
        <Switch>
             <PublicRoute exact path="/" component={Signin} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path='/add-category' component={Addcategory} />
            <PrivateRoute exact path='/view-category' component={Viewcategory} />
            <PrivateRoute exact path='/edit-category/:id' component={Editcategory} />
           
        </Switch>
      </div>
    </Router>
  );
}
export default App;
