/* eslint-disable react/prop-types */
import { useReducer } from "react";

const globalState = {
  title: "useReducer",
  body: "estudo do useReducer",
  counter: 0,
};

const rdcr = (state, action) => {
  //console.log(action) ==> type: muda

  switch (action.type) {
    case "muda":
      console.log("chamou muda");
      return { ...state, title: "Venceu!" };
    case "Volta":
      console.log("chamou volta!");
      return { ...state, title: "useReducer!" };
    case "inverter": {
      console.log("Inverteu o título!");
      const { title } = state;
      return { ...state, title: title.split("").reverse().join("") };
    }
  }

  return { ...state };
};

const Reducer = () => {
  const [state, dispatch] = useReducer(rdcr, globalState);
  const { counter, title } = state;
  return (
    <div>
      <h2>
        {title} {counter}
      </h2>
      <button onClick={() => dispatch({ type: "muda" })}>
        CLIQUE AQUI PARA VENCER
      </button>
      <button onClick={() => dispatch({ type: "Volta" })}>
        CLIQUE AQUI PARA VOLTAR
      </button>
      <button onClick={() => dispatch({ type: "inverter" })}>
        CLIQUE AQUI PARA Inverter
      </button>
    </div>
  );
};

export default Reducer;
