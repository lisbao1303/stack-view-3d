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

class App extends React.Component {
  constructor (props) {
    super(props);
    this.iconRef= React.createRef();
    this.backController =React.createRef();
    this.scrollRef = React.createRef();
    
  }

  componentDidMount() {
    this.backController.current.onMouseMoveI.registerObserver(this.iconRef.current.handler.onPointerMove.bind(this.iconRef.current.handler));
    this.scrollRef.current.tooltipControlsObserverI.registerObserver(this.backController.current.showControllers.bind(this.backController.current));
  }

  //TODO: Important remover os observers eles consomem memoria 
  //se no futuro usarmos algum componente que nao seja o ThreeController

  render() {
    return (
      <div className="App">
        <div className='bodyFixed'></div>
        <IconScene ref={this.iconRef} />
        {/* <Loader /> */}
        <Header />
        <ScrollUp ref={this.scrollRef}/>
        <Front />
        <ThreeController ref={this.backController} />

        <div style={{
          width: '100%',
          height: '100px'
        }}/>
        
        <Devs />

        <div style={{
          width: '100%',
          height: '100px'
        }}/>

        <Clients />
        <Footer />
      </div>
    );
  }
} export default App;
