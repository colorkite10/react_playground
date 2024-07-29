import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((current) => current + 1);

  const onChange = (event) => setKeyword(event.target.value);

  console.log("i run all the time");

  useEffect(() => {
    console.log("i run only once");
  }, []); //최초 한 번만 실행됨

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("i run when keyword changes");
    }
  }, [keyword]); //keyword가 변화할 때마다 실행됨

  useEffect(() => {
    console.log("i run when counter changes");
  }, [counter]); //counter가 변화할 때마다 실행됨

  useEffect(() => {
    console.log("i run when keyword or counter change");
  }, [keyword, counter]);

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={onChange}
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
