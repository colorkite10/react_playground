import { useEffect, useState } from "react";

function Hello() {
  const effectFn = () => {
    console.log("created");
    return destroyedFn;
  };

  const destroyedFn = () => {
    console.log("destroyed");
  };

  useEffect(effectFn, []);
  return <h1>hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
