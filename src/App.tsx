import "./styles.css";
// React use state imports
import { useState } from "react";
// Import redux funcs
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import { decrement, increment, incrementByAmount } from "./redux/counter";

export default function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  // To make the input range i use states cause we dont want that specific
  // state global
  const [value, setValue] = useState(0);
  const handleChange = (e: { target: { value: string } }) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className="App">
      <h1>The count is {count}</h1>
      <h2>Click the buttons to increment or decrement count</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        {/* This input use normal state and passes his value to 
            increment by amount  */}
        <input
          type="range"
          min="0"
          max="20"
          step="1"
          value={value}
          onChange={(e) => handleChange(e)}
        />
        <label>{value}</label>
        {/* Here we use the global reducer to send the amount catched 
            by the the input range */}
        <button onClick={() => dispatch(incrementByAmount(value))}>
          Increment By Amount
        </button>
      </div>
    </div>
  );
}
// BTW made by Alcaen :p
