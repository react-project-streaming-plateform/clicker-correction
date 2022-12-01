import React from "react";

function Bonus({ cost, text, setMultiplicateur, multi, count, setCount }) {

  // localStorage.setItem('count', count);
  // localStorage.getItem('count');


  function buy() {
    if (count < cost) return;

    setMultiplicateur(multi);
    setCount(count - cost);
  }


  return (
    <button onClick={buy}>
      {text} - cost {cost}
    </button>
  );
}

export default Bonus;
