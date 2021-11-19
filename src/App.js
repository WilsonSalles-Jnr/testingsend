import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Skills from './Pages/Skills';

class App extends React.Component {
  render() { 
    return (
      <>
      <Header />
      {/* <Home /> */}
      <Skills />
      <Footer />
      </>
    );
  }
}
 
export default App;