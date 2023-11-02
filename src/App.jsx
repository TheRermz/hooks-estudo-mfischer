import "./App.css";
import Callback from "./components/Callback/Callback";
import Context from "./components/Context/Context";
import ContextEReducer from "./components/Context/ContextEReducer";
import Reducer from "./components/Context/Reducer";
import Memo from "./components/Memo/Memo";
import State from "./components/State/State";
import { Effect } from "./components/useEffect/Effect";

function App() {
  return (
    <>
      <div>
        <h1>hooks</h1>
        <State />
        <Effect />
        <Callback />
        <Context />
        <Reducer />
        <ContextEReducer />
        <Memo />
      </div>
    </>
  );
}

export default App;
