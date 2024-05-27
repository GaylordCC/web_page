import './App.css';
import DemoComponent from './components/DemoComponent';
import ProfilePics from './images/profilepics.jpg';
import TitleComponent from './components/TitleComponent';
import ClickEvenHandler from './components/ClickEventHandler';
import UserLogin from './components/UserLogin';
import EmployeeList from './components/EmployeeList';
import RegularStyleSheet from './components/RegularStyleSheet';
import Inline from './components/Inline';

function App() {
  return (
    <div className="App">
      {/* <DemoComponent name='Gaylord Carrillo C' country='Colombia' />
      <DemoComponent name='Jurgen Klop' country='Alemania' />
      <DemoComponent name='Cristiano Ronaldo' country='Portugal'> 
        <p>I am react js developer</p>
        <p>I am 27 years old</p>
        <img src= {ProfilePics} alt="" />
      </DemoComponent>  */}
      {/* <TitleComponent /> */}
      {/* <ClickEvenHandler /> */}
      {/* <UserLogin /> */}
      {/* <EmployeeList /> */}
      {/* <RegularStyleSheet primary={false}/> */}
      <Inline />
    </div>
  );
}

export default App;
