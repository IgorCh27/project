import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        This is app
        <Rating />
        <Accordion />
    </div>
  );
}

function Star() {
  return(
    <>
    <div>star</div>
    </>
  )
}

function Rating() {
  return(
    <div>
     <Star />
     <Star />
     <Star />
     <Star />
     <Star />
    </div>
  )
}

function Accordion() {
  return(
    <>
    <h3>Title-Menu</h3>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
    </>
  )
}

export default App;
