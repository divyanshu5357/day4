
import './App.css';
import { Fragment } from 'react';
import Heading_one from './Components/Heading_one';
import Heading_three from './Components/Heading_three';
import Heading_two from './Components/Heading_two';
import Button from './Components/Button';

function App() {
  return (
   
  //   <div>
  //  <h1>Im heading one... from first components</h1>
  //  <h2>Im heading two... from second components</h2>
  //  <h3>Im heading three... from third components</h3>
  //  <button>Click Me</button>
  //  </div>
  <Fragment>
  <Heading_one/>
  <Heading_two/>
  <Heading_three/>
  <Button/>
</Fragment>
  );
}

export default App;
