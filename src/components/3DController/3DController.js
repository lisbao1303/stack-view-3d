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
  
  // ******************* COMPONENT LIFECYCLE ******************* //
  //LifeCycle Methods
  componentDidMount() {
  
  }
  
  componentWillUnmount() {
    
  }
  // ******************* COMPONENT LIFECYCLE ******************* //
  
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
    
    return (
      <div className="spaceEnjoy" 
      onMouseMove={(event)=> {
        this.onMouseMoveI.onMouseMove(event);
      }} 
      >
        <div className="controller" ref={this.controlerRef}>
          <text className="tooltip" ref={this.tooltipRef}>You can use this area for iteract with the scene - Enjoy it - &#128512;</text>
          <svg className='control-mode' ref={this.sgvRef}  width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
                
            <rect width="100%" height="100%" fill="red" />

            <circle cx="150" cy="100" r="80" fill="green" />

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
          </svg>
        </div>

      </div>
    )
    
  }
}

export default ThreeController;