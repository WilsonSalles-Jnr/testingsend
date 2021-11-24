import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import { BrowserRouter } from "react-router-dom";
import { Switch, Route} from "react-router"

class App extends React.Component {
  render() { 
    return (
      <>
      <BrowserRouter>
      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Skills" component={Skills} />
      </Switch>
      {/* <Skills /> */}
      <Footer />
      </BrowserRouter>
      </>
    );
  }
}
 
export default App;