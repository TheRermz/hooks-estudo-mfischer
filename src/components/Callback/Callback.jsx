import { useCallback, useMemo, useState } from "react";
import Props from "prop-types";

const Button = ({ onClick }) => {
  console.log("filho renderizou");
  return <button onClick={() => onClick(10)}>+</button>;
};

Button.propTypes = {
  onClick: Props.func,
};

const Callback = () => {
  const [count, setCount] = useState(0);
  console.log("pai renderizou");
  const handleClick = useCallback((num) => {
    setCount((count) => count + num);
  }, []);

  const btn = useMemo(() => {
    return <Button onClick={handleClick} />;
  }, [handleClick]);

  return (
    <>
      <h2>useCallback com memo</h2>
      <p>Count is {count} </p>
      {btn}
    </>
  );
};

export default Callback;
