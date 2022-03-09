import React  from 'react';

class ThreeController extends React.Component {

  constructor(props) {  
    super(props);
    this.state = {active_controlers: false};
    this.controlerRef = React.createRef();
    this.tooltipRef = React.createRef();
    this.sgvRef = React.createRef();
    this.onMouseMoveI = {
      observers: [],
      onMouseMove: (event)=> {
        if (this.state.active_controlers) {
          this.onMouseMoveI.observers.forEach((observer)=>{
            observer(event);
          });
        }
      },
      registerObserver: (observer)=> {
        this.onMouseMoveI.observers.push(observer);
      }
    };
  }

  showControllers(){
    const controller_stylesheet = this.controlerRef.current.style;
    controller_stylesheet.visibility= 'visible';
    controller_stylesheet.setProperty('animation-play-state', 'running');
    const tooltip_stylesheet = this.tooltipRef.current.style;
    tooltip_stylesheet.visibility= 'visible';
    tooltip_stylesheet.setProperty('animation-play-state', 'running');
    const sgv_stylesheet = this.sgvRef.current.style;
    sgv_stylesheet.visibility= 'visible';
    sgv_stylesheet.setProperty('animation-play-state', 'running');
    this.setState({active_controlers: true});
  }


  render() {
    const isMobile = window.innerWidth <= 500;
    if (isMobile){
      return (
        <div className="spaceEnjoy" 
        onMouseMove={(event)=> {
          this.onMouseMoveI.onMouseMove(event);
        }} 
        >
          <div className="controller" ref={this.controlerRef}>
            
            <span className="tooltip" ref={this.tooltipRef}>Enjoy Area - &#128512;</span>
            <img className='control-mode' alt='controlsvg' ref={this.sgvRef}  width="200" height="100"
            xmlns="http://www.w3.org/2000/svg" src='/Assets/ControllerGuide.svg'/>
          
          </div>

        </div>
      )
    } else {
      return (
        <div className="spaceEnjoy" 
        onMouseMove={(event)=> {
          this.onMouseMoveI.onMouseMove(event);
        }} 
        >
          <div className="controller" ref={this.controlerRef}>
            
            <span className="tooltip" ref={this.tooltipRef}>You can use this area for iteract with the scene - Enjoy it - &#128512;</span>
            <img className='control-mode' alt='controlsvg' ref={this.sgvRef}  width="200" height="100"
            xmlns="http://www.w3.org/2000/svg" src='/Assets/ControllerGuide.svg'/>
          
          </div>

        </div>
      )
      
    }
    
  }
}

export default ThreeController;