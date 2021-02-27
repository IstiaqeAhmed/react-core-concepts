import logo from './logo.svg';
import './App.css';
import { buildQueries } from '@testing-library/dom';

function App() {
  var person = {
    name :"Istiaqe Ahmed Khan",
    job: "Web Developer"
  }
  var style={
    color: 'red',
    backgroundColor: 'blue'
  }
  const heroes= ['Anwar', 'Badshah', 'Elias','Salman']
  return (
    <div className="App">
      <header className="App-header">
        <p style={{color:'red'}}>Famous Hero and His Heroin</p>
      <Person name= {heroes[0]}Heroin="MunMun"></Person>
      <Person name="Alamgir" Heroin="Shabana"></Person>
      <Person name="kabila" Heroin="Nachrin"></Person>
      <Person name="Jasim" Heroin="Bobita"></Person>
          
      </header>
    </div>
  );
}
function Person(props){
  const personStyle={
    border:'5px solid green',
    borderRadius:'10px',
    boxShadow: '0px 0px 30px 30px blue ',
    width: '250px',
    margin: '10px'
  }
  // console.log(props)
  return (
  <div style={personStyle}>
    <h1  style={{color:'rebeccapurple'}}>Hero {props.name}</h1>
    <h3 style={{color:'pink'}}>Hero of {props.Heroin}</h3>
 </div>
  )  
   
}

export default App;
