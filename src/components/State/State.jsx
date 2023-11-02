import { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("");

  const handleClick = () => {
    setCount((count) => count + 1);
  };
  const handleChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <>
      <h2>state</h2>
      <p>Count is {count} </p>
      <button onClick={handleClick}>+</button>
      <div>
        {user ? <label>{user}</label> : <label>USER</label>}
        <hr />
        <input type="text" value={user} onChange={handleChange} />
      </div>
    </>
  );
};

export default State;
