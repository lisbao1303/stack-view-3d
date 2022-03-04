import {WEBGL} from  'three/examples/jsm/WebGL.js';
import { SceneControler } from './SceneControler.js';
import * as THREE from 'three/build/three.module.js';


class ThreeJSRender{
    static RENDER_MODE_BEHIND =0;
    static RENDER_MODE_FIRST =1;

    constructor(canvas,creator){
        //input
        this.r_canvas = canvas;
        this.r_creator = creator;
        
        //scene handlers
        this.scene_wrapper = null;
        this.scene_controller = null;
        
        //important three js objects
        this.renderer= null;
        this.pointer = null;

        this._onPointerMove = null;
        this._onResize = null;

        if ( WEBGL.isWebGLAvailable()) {
            console.log( 'WebGL is available' );
        } else {
            window.alert( 'Your Browser does not support WebGl try update or install other.' );
            const warning = WEBGL.getWebGLErrorMessage();
            document.getElementById( 'container' ).appendChild( warning );
            throw new Error("WebGL is not available");
        };
    }

    async init(render_mode){
        //just set the render pass scene
        
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.r_canvas,
            stencil: true,
            antialias: true,
            
            powerPreference: "high-performance",
            logarithmicDepthBuffer: true,
            desynchronized: true}
        );  
        this.renderer.setSize( this.r_canvas.width, this.r_canvas.height );

        //to save resources we are not using shadows 

        //used for runtime rendered shadows
        //this.renderer.shadowMap.enabled = false;
        //this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        //this.renderer.shadowMapSoft = true;

        //used for static rendered shadows
        //renderer.physicallyCorrectLights = true;
        
        if (render_mode===ThreeJSRender.RENDER_MODE_BEHIND){    
            
            //utilizar o canvas facilita na refentencia no react
            //porem as cooedenadas do canvas não são utilizadas em modo behind
            [this.scene_wrapper, this.scene_controller] = await this.r_creator(this.r_canvas);
            this.scene_controller.setRender(this.renderer);
            this.scene_controller.setControlModel(SceneControler.FIRST_PERSON_EXPORTED_CONTROL,this.render.bind(this));

            this._onPointerMove = this.onPointerMoveBehind;
            this._onResize = this.onResizeBehind;
            this.pointer = this.scene_controller.selector.pointer;
            this.animate(); //Start Animations

        }
        if (render_mode===ThreeJSRender.RENDER_MODE_FIRST){
            [this.scene_wrapper, this.scene_controller] = await this.r_creator(this.r_canvas);
            this.scene_controller.setRender(this.renderer);
            this.scene_controller.setControlModel(SceneControler.FIRST_PERSON_CUSTOM_CONTROL,this.render.bind(this));

            this._onPointerMove = this.onPointerMoveFirst;
            this._onResize = this.onResizeFirst;
            this.pointer = this.scene_controller.selector.pointer;
            this.animate(); //Start 
            
        }
        
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
        this._onPointerMove( event );
    }
    
    onPointerMoveBehind( event ) {
        //cuidado, as cordendas do mouse estao em relacao a janela
        //e nao ao canvas, este por sua vez trabalha como um portal
        //definição do modo behind
        const x_percent =  (event.clientX / window.innerWidth)* 2 - 1;
        const y_percent =  -(event.clientY / window.innerHeight)* 2 + 1;
        this.scene_controller.selector.pointer.x = x_percent;
        this.scene_controller.selector.pointer.y = y_percent;
        const c_x = event.clientX- window.innerWidth /2;
        const c_y = event.clientY-window.innerHeight /2;
        this.scene_controller.player_control.onMouseMove.bind( this.scene_controller.player_control, c_x, c_y )();
        //console.log( event.clientX,  event.clientY );
        //console.log( this.r_canvas.width, this.r_canvas.height );
        //console.log(this.scene_controller.selector.pointer);
    }

    onPointerMoveFirst( event ) {
        //TODO:
    }

    onResize() {
        this._onResize();
    }

    onResizeBehind() {
        this.scene_wrapper.cameras[this.scene_wrapper.active_camera].aspect = window.innerWidth/ window.innerHeight;
        this.scene_wrapper.cameras[this.scene_wrapper.active_camera].updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight);
        this.scene_controller.player_control.handleResize();
        //controller.player_control.update();
    }

    onResizeFirst() {
        //TODO:
    }

}
export {ThreeJSRender};