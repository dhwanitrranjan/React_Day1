import './App.css';
import TypeOfFood from './Components/TypeOfFood.js';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
      <br/>
      <div className='list'>
        <li>Create a Parent component which returns 2 nested elements. 
          The component should return the ChildComponent as its second child.</li>
        <br/>
        <li>Nested Componnetwhich renders different types of Fruits. Create 3 different components</li>
        <ul>TypesOfFood</ul> 
        <ul>Fruits </ul>
        <ul>TypesOfFruit</ul>

        <TypeOfFood/>
      </div>
    </div>
  );
}

export default App;
