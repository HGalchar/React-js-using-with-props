
import './App.css';

import {BrowserRouter, Switch,Route} from "react-router-dom";
import Homepage from './components/Homepage.jsx';
import Aboutpage  from './components/Aboutpage.jsx';
import Contactpage from './components/Contactpage';
import Newspage from './components/Newspage';

function App() {
  return (
   <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/about" component={Aboutpage}/>
        <Route exact path="/contact" component={Contactpage}/>
        <Route exact path="/news" component={Newspage}/>
      </Switch>
    </BrowserRouter>
   </>
  );
}

export default App;
