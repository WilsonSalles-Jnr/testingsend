import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import { BrowserRouter } from "react-router-dom";
import { Switch, Route} from "react-router"
import Project from './Pages/Project';
import Contato from './Pages/Contato';

class App extends React.Component {
  render() { 
    return (
      <>
      <BrowserRouter>
      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/skills" component={Skills} />
      <Route path="/projetos" component={Project} />
      <Route path="/contato" component={Contato} />
      </Switch>
      {/* <Skills /> */}
      <Footer />
      </BrowserRouter>
      </>
    );
  }
}
 
export default App;