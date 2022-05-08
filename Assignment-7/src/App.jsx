
import { useDispatch } from 'react-redux';
import './App.css'
import {userStatus} from './Redux/Auth/action'
import {Routes, Route} from 'react-router-dom';
import {Home} from './components/Home'
import {Login} from './components/Login'
import {ProtectedRoute} from './components/PrivateComponent';
import {Todo} from './components/Todo'

function App() {
  
  const dispatch = useDispatch();

  const authToken = localStorage.getItem("authenticationToken");
  dispatch(userStatus(authToken));

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path='/todo/:id' element={<ProtectedRoute><Todo/></ProtectedRoute>} />
        <Route path='login' element={<ProtectedRoute><Login/></ProtectedRoute>}/>
      </Routes>    
    </div>
  )
}

export default App
