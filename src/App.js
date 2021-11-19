import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';

class App extends React.Component {
  render() { 
    return (
      <>
      <Header />
      <Home />
      <Footer />
      </>
    );
  }
}
 
export default App;