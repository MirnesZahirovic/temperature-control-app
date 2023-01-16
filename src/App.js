import classes from "./App.module.css";
import Controler from "./components/Controler";

function App() {
  return (
    <div className={classes.appContainer}>
      <Controler />
    </div>
  );
}

export default App;
