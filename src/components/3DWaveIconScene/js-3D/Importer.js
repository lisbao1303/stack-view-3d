import {GLTFLoader} from '../../../three/examples/jsm/loaders/GLTFLoader.js';
const GLTF = new GLTFLoader();

class  ModelImporter  {
    //Used to import 3D models
    //tooltips:
    // - by now just using GLTF JSON files, they are more readable than glTF binary files
    // - textures need to be embesded in the glTF file 
    constructor(path) {
        if(typeof path !== 'string'){throw new Error("Path must be a string");}
        this.path = path;
        this.scene = undefined;
        this.animations = undefined;
        this.mesh_list = [];
        console.log("importJS Complete");
    };

    loadModel(){
        /** this is an await based function patten **/
        
        let _this = this;
        return new Promise((resolvePromiss)=>{
            GLTF.load( _this.path, function ( gltf ) {        
                let mesh = gltf.scene.children;
                mesh.forEach(element => {
                    if (typeof(element) != undefined){
                        _this.mesh_list.push(element);
                        element.castShadow = true;
                        element.receiveShadow = true;  
                    }
                });
                resolvePromiss();
                _this.scene=gltf.scene;
                _this.animations=gltf.animations;
            }, undefined, function ( error ) {
                
                console.error( error );
            });
        });
    }


} export {ModelImporter};
