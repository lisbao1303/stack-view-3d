import React from 'react';
import {ThreeJSRender} from '../../js-3D/MainAmbiente.js';
import { SceneFactory } from './SceneFactory.js';

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
        const creator = SceneFactory.IconScene;        
        this.handler =new ThreeJSRender(canvas,creator);
        setTimeout(() => {
            this.handler.init(ThreeJSRender.RENDER_MODE_BEHIND).then(
            window.addEventListener('resize', this.handler.onResize.bind(this.handler))
        )            
        }, 8000); 
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
