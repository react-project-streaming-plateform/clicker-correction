import React from "react"

  function Counter({text, count, setCount, multiplicateur}) {




  function increment() {
    const tmpCount = count + 1 * multiplicateur
    setCount(tmpCount)
    localStorage.setItem("count", tmpCount)
  }

  const list =["el1", "el2"]

  return (
    <div>
      <p>{text} : {count}</p>
      <button style={{color: "blue"}} onClick={() => {increment(1)}}>Cliquez ici </button>

      {list.map(el => {
        return <p>{el}</p>
      })}
    </div>
  );
}

export default Counter