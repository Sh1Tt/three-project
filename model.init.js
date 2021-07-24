
function init()
{
    let scene = new THREE.Scene()
    scene.background = new THREE.Color( 0xdddddd )

    let camera = new THREE.PerspectiveCamera( 40, window.innerWidth/window.innerHeight, 1, 5000 );

    let lightsource = new THREE.AmbientLight( 0x404040, 100 );
    scene.add( lightsource );

    let renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    let loader = new THREE.GLTFLoader();
    loader.load( '../public/media/model/phoenix/scene.gltf', ( gltf ) =>
    {
        scene.add( gltf.scene );
        renderer.render( scene, camera );           
    });
}
init();