import * as THREE from './three/build/three.module.js';
import {WEBGL} from  './three/examples/jsm/WebGL.js';
import { SceneFactory } from './SceneFactory.js';
import { SceneControler } from './SceneControler.js';



class ThreeJSRender{
    constructor(canvas){
        this.r_canvas = canvas;
        this.scene_wrapper = null;
        this.scene_controller = null;
        this.renderer= null;
        this.pointer = null;
        if ( WEBGL.isWebGLAvailable()) {
            console.log( 'WebGL is available' );
        } else {
            window.alert( 'Your Browser does not support WebGl try update or install other.' );
            const warning = WEBGL.getWebGLErrorMessage();
            document.getElementById( 'container' ).appendChild( warning );
            throw new Error("WebGL is not available");
        };
    }

    async init(){
        //just set the render pass scene    
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.r_canvas,
            antialias: true}
        );  
        this.renderer.setSize( this.r_canvas.width, this.r_canvas.height );
        
        //used for runtime rendered shadows
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.shadowMapSoft = true;
        
        //used for static rendered shadows
        //renderer.physicallyCorrectLights = true;
        
        [this.scene_wrapper, this.scene_controller] = await SceneFactory.IconScene(this.r_canvas);
        this.scene_controller.setRender(this.renderer);
        this.scene_controller.setControlModel(SceneControler.FIRST_PERSON_LIMITED_CONTROL,this.render.bind(this));
        this.scene_controller.player_control.limits = {
            x: [-300 , 300],
            y: [74,76],
            z: [200, 1200]
        };
        this.pointer = this.scene_controller.selector.pointer;
        
        this.renderer.domElement.addEventListener( 'mousemove', this.onPointerMove.bind(this));
        this.renderer.domElement.addEventListener( 'resize', this.onResize.bind(this) );
        
        this.animate(); //Start Animations
        
    }
    
    render() {
        this.scene_wrapper.render(this.renderer);
    }
    
    animate(time) {
        requestAnimationFrame(this.animate.bind(this));
        this.scene_controller.default_animate(time);
        this.render();
    }

    onPointerMove( event ) {
        const ix = event.pageX - this.renderer.domElement.offsetLeft;
        const iy = event.pageY - this.renderer.domElement.offsetTop;
        console.log(ix,iy);
        this.scene_controller.selector.pointer.x = ( ix / this.r_canvas.width ) * 2 - 1;
        this.scene_controller.selector.pointer.y = - ( iy / this.r_canvas.height ) * 2 + 1;
    }

    onResize() {
        this.scene_wrapper.cameras[this.scene_wrapper.active_camera].aspect = this.r_canvas.width / this.r_canvas.height;
        this.scene_wrapper.cameras[this.scene_wrapper.active_camera].updateProjectionMatrix();
        this.renderer.setSize( this.r_canvas.width, this.r_canvas.height);
        this.scene_controller.player_control.handleResize();
        //controller.player_control.update();
    }
}
export {ThreeJSRender};