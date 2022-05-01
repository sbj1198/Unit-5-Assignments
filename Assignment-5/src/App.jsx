
import './App.css'
import {TodosList} from './components/TodosList';
import {Routes, Route} from 'react-router-dom';
import { TodoDetails } from './components/TodoDetails';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<TodosList/>}/>
        <Route path='/todo/:id' element={<TodoDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
