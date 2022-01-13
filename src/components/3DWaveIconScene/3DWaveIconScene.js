import React from 'react';
import {ThreeJSRender} from './js-3D/MainAmbiente.js';

class IconScene extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.handler = null;
        this.controller = null;
    }

    // ******************* COMPONENT LIFECYCLE ******************* //
    componentDidMount() {
        // Get canvas, pass to custom class
        const canvas = this.canvasRef.current;
        this.handler =new ThreeJSRender(canvas);
        this.handler.init();
        window.addEventListener('resize', this.handler.onResize.bind(this.handler));
    }

    componentDidUpdate(prevProps, prevState) {
        // Pass updated props to 
        //const newValue = this.props.whateverProperty;
        //this.viewGL.updateValue(newValue);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handler.onResize.bind(this.handler));
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
