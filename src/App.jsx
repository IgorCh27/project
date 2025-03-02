import {Rating} from "./components/rating/Rating";
import {Accordion} from "./components/accordion/Acordion";
import { AppTitle } from "./components/AppTitle";

function App() {
  return (
    <div className="App">
        <AppTitle title = {<h2>This is app component</h2>} />
        Arcticle 1
        <Rating value = {4} />
        <Accordion titleApp = {<h3>Title-Menu</h3>}/>
        <AppTitle title = {<h2>Friends container</h2>} />
        Arcticle 2
        <Rating value = {3} />
        <Accordion titleApp = {<h3>Page stories</h3>}/>
    </div>
  );
}



export default App;
