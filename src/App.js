
import './App.css';
import EightComp from './EightComp/EightComp';
import FifthComp from './FifthComp/FifthComp';
import FirstComp from './FirstComp/FirstComp';
import FourthComp from './FourthComp/FourthComp';
import Navbar from './Navbar/Navbar';
import SecondComp from './SecondComp/SecondComp';
import SeventhComp from './SeventhComp/SeventhComp';
import SixthComp from './SixthComp/SixthComp';
import ThirdComp from './ThirdComp/ThirdComp';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <FirstComp/>
    <SecondComp/>
    <ThirdComp/>
    <FourthComp/>
    <FifthComp/>
    <SixthComp/>
    <SeventhComp/>
    <EightComp/>
    </div>
  );
}

export default App;
