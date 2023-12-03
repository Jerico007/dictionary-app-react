
import './index.css';
import Home from './Components/Home';
import History from './Components/History';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/history' element={<History/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
