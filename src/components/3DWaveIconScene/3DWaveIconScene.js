import React from 'react';
import {ThreeJSRender} from './js-3D/MainAmbiente.js'; 


class IconScene extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.handler = null;
    }

    // ******************* COMPONENT LIFECYCLE ******************* //
    componentDidMount() {
        // Get canvas, pass to custom class
        const canvas = this.canvasRef.current;
        this.handler =new ThreeJSRender(canvas);
        this.handler.init();
        // Init any event listeners
        //now listeners are managed by the this componenet (change for window for use roow window events)
        this.handler.renderer.domElement.addEventListener('mousemove', this.handler.onPointerMove.bind(this.handler));
        this.handler.renderer.domElement.addEventListener('resize', this.handler.onResize.bind(this.handler));
    }

    componentDidUpdate(prevProps, prevState) {
        // Pass updated props to 
        //const newValue = this.props.whateverProperty;
        //this.viewGL.updateValue(newValue);
    }

    componentWillUnmount() {
        // Remove any event listeners
        this.handler.renderer.domElement.removeEventListener('mousemove', this.handler.onPointerMove.bind(this.handler));
        this.handler.renderer.domElement.removeEventListener('resize', this.handler.onResize.bind(this.handler));
    }

    render() {
        return (
            <div className="canvasContainer">
                <canvas ref={this.canvasRef} width={window.innerWidth} height={window.innerHeight}/>
            </div>
        );
    }
} 
export default IconScene;
