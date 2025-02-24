import {Rating} from "./components/rating/Rating";
import {Accordion} from "./components/accordion/Acordion";
import { AppTitle } from "./components/AppTitle";

function App() {
  return (
    <div className="App">
        <AppTitle />
        <Rating />
        <Accordion />
    </div>
  );
}



export default App;
