import {WEBGL} from  'three/examples/jsm/WebGL.js';
import { SceneControler } from './SceneControler.js';
import * as THREE from 'three/build/three.module.js';


class ThreeJSRender{
    constructor(canvas,creator){
        this.r_canvas = canvas;
        this.r_creator = creator;
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
        
        [this.scene_wrapper, this.scene_controller] = await this.r_creator(this.r_canvas);
        this.scene_controller.setRender(this.renderer);
        this.scene_controller.setControlModel(SceneControler.FIRST_PERSON_CUSTOM_CONTROL,this.render.bind(this));
        this.scene_controller.player_control.limits = {
            x: [-300 , 300],
            y: [74,76],
            z: [200, 1200]
        };
        this.pointer = this.scene_controller.selector.pointer;
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
        this.scene_controller.selector.pointer.x = ( event.clientX / this.r_canvas.width ) * 2 - 1;
        this.scene_controller.selector.pointer.y = - ( event.clientY / this.r_canvas.height ) * 2 + 1;
        this.scene_controller.player_control.onMouseMove.bind( this.scene_controller.player_control, this.scene_controller.selector.pointer.x,this.scene_controller.selector.pointer.y )();
        //console.log( event.clientX,  event.clientY );
        //console.log( this.r_canvas.width, this.r_canvas.height );
        //console.log(this.scene_controller.selector.pointer);
    }

    onResize() {
        this.scene_wrapper.cameras[this.scene_wrapper.active_camera].aspect = window.innerWidth/ window.innerHeight;
        this.scene_wrapper.cameras[this.scene_wrapper.active_camera].updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight);
        this.scene_controller.player_control.handleResize();
        //controller.player_control.update();
    }
}
export {ThreeJSRender};