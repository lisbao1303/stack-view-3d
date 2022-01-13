import React  from 'react';

class ThreeController extends React.Component {

  constructor(props) {  
    super(props);
    this.onMouseMoveI = {
      observers: [],
      onMouseMove: (event)=> {
        this.onMouseMoveI.observers.forEach((observer)=>{
          observer(event);
        });
      },
      registerObserver: (observer)=> {
        this.onMouseMoveI.observers.push(observer);
      }
    };
    
  }
  
  
  componentDidMount() {
  
  }

  componentWillUnmount() {

  }


  render() {

    return (
      <div className="spaceEnjoy" 
      onMouseMove={(event)=> {
        this.onMouseMoveI.onMouseMove(event);
      }} 
      >
        <div className="controller">

        </div>
      </div>
    )
    
  }
}

export default ThreeController;