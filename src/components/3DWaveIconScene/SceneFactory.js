import * as THREE from 'three/build/three.module.js';
import { SceneWrapper } from "../../js-3D/SceneWrapper.js";
import { ModelImporter } from "../../js-3D/Importer.js";
import { SceneControler } from '../../js-3D/SceneControler.js';

class SceneFactory {
    static async IconScene(r_canvas) {
        let iScene = new SceneWrapper();
        iScene.scene.background = new THREE.Color(0x000000);
        iScene.scene.fog = new THREE.FogExp2(0x00000, 0.0015);

        iScene.user_limits = {
            x: [-300, 300],
            y: [74, 76],
            z: [200, 1200]
        }


        const camera = new THREE.PerspectiveCamera(50, r_canvas.width / r_canvas.height, 0.1, 1500);
        camera.position.x = 0;
        camera.position.y = 75;
        camera.position.z = 600;
        camera.lookAt(0, 0, 0);

        iScene.cameras.push(camera);
        iScene.active_camera = 0;

        let icon_model = new ModelImporter(process.env.PUBLIC_URL + '/3DAssets/SV-icon-3D-light-low.glb');

        let g_model = new ModelImporter(process.env.PUBLIC_URL + '/3DAssets/main-scene-flat-wave.glb');

        // var startTime = performance.now()
        // await Promise.all([g_model.loadModel(), icon_model.loadModel()])

            
        // var endTime = performance.now()
        
        // console.log(`Call to paralelo took ${endTime - startTime} milliseconds`)

        var startTime = performance.now()
        await g_model.loadModel()
        await icon_model.loadModel()
        var endTime = performance.now()
        
        console.log(`Call to separado took ${endTime - startTime} milliseconds`)

        g_model.scene.position.set(-10, 0, 700);
        iScene.imported_scenes['ground'] = g_model.scene;

        let iController = new SceneControler(iScene);
        iController.mixer = new THREE.AnimationMixer(g_model.scene);
        const clips = g_model.animations;
        const wave = THREE.AnimationClip.findByName(clips, 'KeyAction');
        const anim = iController.mixer.clipAction(wave);
        anim.setLoop(THREE.LoopOnce);
        iScene.animations.controled['wave'] = anim;


        icon_model.scene.rotation.x = 90 * Math.PI / 180;
        icon_model.scene.scale.set(5, 5, 5);
        icon_model.scene.position.set(0, 75, 0);
        icon_model.scene.pos = 0;
        iScene.imported_scenes['light-icon'] = icon_model.scene;

        const light_resolution = 512 * Math.pow(2, 0);

        let light1 = new THREE.PointLight(0xFF7A21, 2, 10000, 2);
        light1.position.set(0, 75, 75);
        light1.pos = 0;
        //light1.castShadow = true;
        light1.shadow.mapSize.width = light_resolution;
        light1.shadow.mapSize.height = light_resolution;
        light1.shadow.bias = -0.0001;
        iScene.lights.push(light1);

        let light2 = new THREE.PointLight(0xFF7A21, 2, 10000, 2);
        light2.position.set(0, 75, -75);
        light2.pos = 0;
        //light2.castShadow = true;
        light2.shadow.mapSize.width = light_resolution;
        light2.shadow.mapSize.height = light_resolution;
        light2.shadow.bias = -0.0001;
        iScene.lights.push(light2);


        //let light_ambiente = new THREE.AmbientLight(0xFFFFFF ,0.5);
        //iScene.lights.push(light_ambiente);       

        let icon_animation = function (context) {
            //context needs to be a SceneWrapper
            const icon_model = context.imported_scenes['light-icon'];
            icon_model.rotation.z += 0.01;
            const target_height = 75;
            icon_model.position.y = target_height + Math.sin(2 * Math.PI * icon_model.pos / 200) * 10;
            icon_model.pos += 1;
            if (icon_model.pos > 1000) {
                icon_model.pos = 0;
            }
        };
        iScene.animations.default.push(icon_animation);

        let light_animation = function (context) {
            //context needs to be a SceneWrapper
            const light = context.lights[0];
            const target_height = 75;
            light.position.y = target_height + Math.sin(2 * Math.PI * light.pos / 200) * 10;
            icon_model.pos += 1;
            if (icon_model.pos > 1000) {
                icon_model.pos = 0;
            }
        };
        iScene.animations.default.push(light_animation);


        iScene.update()
        
        return [iScene, iController];
    };


} export { SceneFactory };