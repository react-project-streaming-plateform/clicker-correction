import  {useState} from "react"
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter"
import Bonus from "./Bonus"

function App() {

  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")))
  const [multiplicateur, setMultiplicateur] = useState(1)

  return (
    <div className="App">
      <Counter text="La valeur"  count={count} setCount={setCount} multiplicateur={multiplicateur} />
      <Bonus text="bonus easy" cost={20} setMultiplicateur={setMultiplicateur} count={count} setCount={setCount} multi={2}/>
      <Bonus text="bonus hard" cost={100} setMultiplicateur={setMultiplicateur} count={count} setCount={setCount} multi={10}/>
    </div>
  );
}

export default App;
