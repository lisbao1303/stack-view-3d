import './styles/App.scss';
import React from 'react';
import Header from './components/Header/header';
import Front from './components/FrontInicial/front';
import ScrollUp from './components/ScrollUp/scroll';
import Loader from './components/Loader/loader';
import Devs from './components/Devs/devs';
import Clients from './components/TrustedBy/clients';
import Footer from './components/Footer/footer';
function App() {
  return (
    <div className="App">

      <Loader />
      <Header />
      <ScrollUp />
      <Front />
      <div className="spaceEnjoy"></div>
      <Devs />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
