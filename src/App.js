import React, { Component } from 'react';
import News from './components/news/News';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <News />
        <Footer />
      </div>
    );
  }
}

export default App;
