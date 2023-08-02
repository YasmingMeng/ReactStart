import Header from "./layout/header/index";
import './index.css';
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
}


export default App;
 