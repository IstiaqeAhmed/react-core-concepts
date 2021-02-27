import React, {useState} from 'react';
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
  const heroes= ['Anwar', 'Badshah', 'Elias','Salman', 'Shuvo']
  const products= [
    {name: 'Photoshop',  price:'$90.99'},
     {name: 'Illustrator', price: '$60.99'},
     {name: 'PDF Reader', price: '$5.99'},
     {name: 'Premiere El', price: '$234.99'},
]
//  const productNames = products.map(product => product.name)
//  console.log(productNames);
//  const heroNames = heroes.map(hero => hero);
//  console.log(heroNames);
  return (
    <div className="App">
      <header className="App-header">
        <p style={{color:'red'}}>Gadget X Official Store</p>
        <Counter></Counter>
        <ul>
          {
            heroes.map(hero => <li>{hero}</li>)
          }
          {
            products.map(product=><li>{product.name}</li>)
          }
          {/* <li>{heroes[0]}</li>
          <li>{heroes[1]}</li>
          <li>{heroes[2]}</li>
          <li>{heroes[3]}</li> */}
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      <Product product={products[2]}></Product>
      {/* <Product name="Alamgir" Heroin="Shabana"></Product> */}
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrease = () => console.log('clicked');
//  const handleIncrease = () =>  setCount(count + 1);
  // {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {() => setCount(count - 1)}>Decrease </button>
      <button onClick={ () =>  setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Product(props){
  const productStyle={
    border:'1px solid grey',
    borderRadius:'5px',
    backgroundColor:'lightgrey',
    width: '200px',
    height:'200px',
    margin: '10px',
    float: 'left'
  }
  // console.log(props)
  //destructuring
  const {name, price} =props.product;
  //console.log(name, price)
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
      {/* before destructuring */}
      {/* <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy now</button> */}
    </div>
  )  
   
}

export default App;
