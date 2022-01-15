import './styles/App.scss';
import React from 'react';
import Header from './components/Header/header';
import Front from './components/FrontInicial/front';
import ScrollUp from './components/ScrollUp/scroll';
import Loader from './components/Loader/loader';
import Devs from './components/Devs/devs';
import Clients from './components/TrustedBy/clients';
import Footer from './components/Footer/footer';
import IconScene from './components/3DWaveIconScene/3DWaveIconScene';
import ThreeController from './components/3DController/3DController';

function App() {
  let iconRef= null;

  return (
    <div className="App">
      <IconScene ref={(icon)=> {iconRef=icon;} }/>
      <Loader />
      <Header />
      <ScrollUp />
      <Front />
      <ThreeController ref={(controler)=>{
        controler.onMouseMoveI.registerObserver(iconRef.handler.onPointerMove.bind(iconRef.handler));
      }}/>
      <Devs />
      <div className="spaceEnjoy "></div>
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
