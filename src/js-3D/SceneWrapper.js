import * as THREE from 'three/build/three.module.js';

class SceneWrapper{

    constructor(based_scene){
        this.cameras = [];
        this.active_camera = null;
        this.lights = [];
        this.meshs = [];
        this.imported_scenes = {};
        this.animations = {
            'default': [],
            'controled': {}
        };
        this.user_limits = null;
        if (based_scene===undefined){
            this.scene = new THREE.Scene();
        } else {
            this.scene = based_scene;
        }
    };
    
    render(renderer) {
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.render( this.scene, this.cameras[this.active_camera]);
    };
    
    update(){
        this.lights.forEach(light => {
            this.scene.add(light);
        });
        this.meshs.forEach(mesh => {
            this.scene.add(mesh);
        });
        for(const prop in this.imported_scenes){
            this.scene.add(this.imported_scenes[prop]);
        };
    };



} export {SceneWrapper};