 
import './App.css';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import UpdateUser from './UpdateUser';
import Users from './Users';
import CreateUser from './CreateUser';
function App() {
  return (
    <div>
<Router>
<Routes>

<Route path='/' element={<Users/>}/>
<Route path='/create' element={<CreateUser/>}/>
<Route path='/update/:id' element={<UpdateUser/>}/>

</Routes>




</Router>
    </div>
  );
}

export default App;
