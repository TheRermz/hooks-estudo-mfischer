/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

export const globalState = {
  title: "useReducer e useContext",
  body: "estudo do useReducer",
  counter: 0,
};

//actions.js
export const actions = {
  CHANGE_TITLE: "CHANGE_TITLE",
};

// reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      console.log("Mudar título");
      return { ...state, title: "action.payload " };
    }
  }

  return { ...state };
};

// AppContext
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

//H1/
export const H1 = () => {
  const context = useContext(Context);
  return (
    <h1 onClick={() => context.dispatch({ type: actions.CHANGE_TITLE })}>
      {context.state.title}
    </h1>
  );
};

const ContextEReducer = () => {
  return (
    <AppContext>
      <div>
        <H1 />
      </div>
    </AppContext>
  );
};

export default ContextEReducer;
