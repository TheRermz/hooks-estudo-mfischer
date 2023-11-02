import { useEffect, useState } from "react";

export const Effect = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => count + 1);
  };

  //componentdidupdate - executa toda vez que o componente atualiza

  useEffect(() => {
    console.log("componentDidUpdate");
  });

  // componentDidMount - executa uma vez

  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  // componentDidMount - com dependência - executatoda vez qyue a dependencia mudar

  useEffect(() => {
    console.log(`contador mudou para ${count}`);
  }, [count]);

  return (
    <>
      <h2>useEffect</h2>
      <p>Count is {count} </p>
      <button onClick={handleClick}>+</button>
    </>
  );
};
