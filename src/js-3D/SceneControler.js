import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {FirstPersonControls} from 'three/examples/jsm/controls/FirstPersonControls.js';
import {FirstPersonLimitedControls} from './FirstPersonLimitedControls.js';
import * as THREE from 'three/build/three.module.js';

class SceneControler {
    static ORBIT_CONTROL = 0;
    static FIRST_PERSON_CONTROL = 1;
    static FIRST_PERSON_CUSTOM_CONTROL = 1;

    constructor(scene) {
        this.prev_time = 0;
        this.scene = scene;
        this.player_control = null;
        this.mixer=null;
        this.selector = {
            raycaster: new THREE.Raycaster(undefined,undefined,0,750),
            pointer: new THREE.Vector2(),
        };
        
    }

    setRender(renderer){
        this.renderer = renderer;
    };
    
    setControlModel(mode, render_callback) {
        if(mode == SceneControler.ORBIT_CONTROL){
            this.player_control = new OrbitControls(this.scene.cameras[this.scene.active_camera], this.renderer.domElement);
            //this.player_control.addEventListener( 'change', render_callback ); // use if there is no animation loop
            this.player_control.minDistance = 2;
            this.player_control.maxDistance = 10000;
            //this.player_control.update();
        }
        if(mode == SceneControler.FIRST_PERSON_CONTROL){
            this.player_control = new FirstPersonControls( this.scene.cameras[this.scene.active_camera], this.renderer.domElement );
			this.player_control.movementSpeed = 100;
			this.player_control.lookSpeed = 0.1;
        }
        if(mode == SceneControler.FIRST_PERSON_CUSTOM_CONTROL){
            this.player_control = new FirstPersonLimitedControls( this.scene.cameras[this.scene.active_camera], window.document );
			this.player_control.movementSpeed = 100;
			this.player_control.lookSpeed = 0.1;
        }
    };

    default_animate(time){
        //console.log(this.animations[0]);
        this.scene.animations.default.forEach(animation => {
            animation(this.scene);
        });
        if (this.mixer !== null) {
            const dt = (time - this.prev_time)/1000;
            if (!isNaN(dt)){
                this.mixer.update(dt);
                this.player_control.update(dt);
            }
            this.prev_time=time;
        }
        
        this.selectObjects();
    };
    
    selectObjects(){

        this.selector.raycaster.setFromCamera(this.selector.pointer, this.scene.cameras[this.scene.active_camera]);
        const intersects_light = this.selector.raycaster.intersectObjects(this.scene.imported_scenes['light-icon'].children, false );
        
        if ( intersects_light.length > 0 ) {
            if (!this.scene.animations.controled['wave'].isRunning()) {
                this.scene.animations.controled['wave'].reset();
                this.scene.animations.controled['wave'].play();
            }
        };
    }



} export {SceneControler};