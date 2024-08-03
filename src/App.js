import './App.css';
import Sidebar from '../src/components/Sidebar/Sidebar';
import MainDash from './components/MainDash/MainDash';
import RighSide from './components/RigtSide/RightSide';
function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/> 
        <MainDash/> 
        <RighSide /> 
      </div>
    </div>
  );
}

export default App;

