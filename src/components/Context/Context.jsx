/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const globalState = {
  title: "useContext",
  body: "estudo do useContext",
  counter: 0,
};

const GlobalCtx = createContext();

const Div = () => {
  return (
    <>
      <H2 />
      <Paragraph />
    </>
  );
};

const H2 = () => {
  const theCtx = useContext(GlobalCtx);
  const { ctxState } = theCtx;
  return (
    <h2>
      {ctxState.title} {ctxState.counter}
    </h2>
  );
};

const Paragraph = () => {
  const theCtx = useContext(GlobalCtx);
  const {
    ctxState: { body },
    setCtxState,
  } = theCtx;
  return (
    <p onClick={() => setCtxState((s) => ({ ...s, counter: s.counter + 1 }))}>
      {body}
    </p>
  );
};

const Context = () => {
  const [ctxState, setCtxState] = useState(globalState);
  return (
    <GlobalCtx.Provider value={{ ctxState, setCtxState }}>
      <Div />
    </GlobalCtx.Provider>
  );
};

export default Context;
