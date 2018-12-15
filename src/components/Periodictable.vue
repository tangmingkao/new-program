/*
 * @Author: tonyTang 
 * @Date: 2018-12-07 10:57:25 
 * @Last Modified by: tonyTang
 * @Last Modified time: 2018-12-11 20:38:52
 */

/*
 * 图片成为3D图像组件
 */
<template>
    <div id="periodic-3D">
        <div id="container"></div>
        <!-- <div id="menu">
			<button id="table">TABLE</button>
			<button id="sphere">SPHERE</button>
			<button id="helix">HELIX</button>
			<button id="grid">GRID</button>
		</div> -->
    </div>
</template>

<script>
export default {
    name: 'Periodictable',
    data() {
        return {
            //每个图片的配置
            tempTable: [
                {x: 1,y: 1,iconSrc: '../static/image/home/zec0.png',name: 'zec',height: 1.2,width: 1.2},
                {x: 1,y: 2,iconSrc: '../static/image/home/qtum1.png',name: 'qtum',height: 1.2,width: 1.2},
                {x: 1,y: 3,iconSrc: '../static/image/home/btc2.png',name: 'btc',height: 1.6,width: 1.6},
                {x: 1,y: 4,iconSrc: '../static/image/home/usdt3.png',name: 'usdt',height: 1.4,width: 1.4},
                {x: 1,y: 5,iconSrc: '../static/image/home/eos4.png',name: 'eos',height: 1.4,width: 1.4},
                {x: 1,y: 6,iconSrc: '../static/image/home/vet5.png',name: 'vet',height: 1.4,width: 1.4},
                {x: 1,y: 7,iconSrc: '../static/image/home/etc6.png',name: 'etc',height: 1.4,width: 1.4},
                {x: 1,y: 8,iconSrc: '../static/image/home/xmr7.png',name: 'xmr',height: 1.2,width: 1.2},
                {x: 1,y: 9,iconSrc: '../static/image/home/eth8.png',name: 'eth',height: 1.6,width: 1.6},
                {x: 1,y: 10,iconSrc: '../static/image/home/xrp9.png',name: 'xrp',height: 1.4,width: 1.4},
                {x: 2,y: 5.5,iconSrc: '../static/image/home/bch10.png',name: 'bch',height: 1.4,width: 1.4},
                {x: 3,y: 5.5,iconSrc: '../static/image/home/hsr11.png',name: 'hsr',height: 1.6,width: 1.6},
                {x: 4,y: 5.5,iconSrc: '../static/image/home/dash12.png',name: 'dash',height: 1.2,width: 1.2},
                {x: 5,y: 5.5,iconSrc: '../static/image/home/dcr13.png',name: 'dcr',height: 1.4,width: 1.4},
                {x: 6,y: 1,iconSrc: '../static/image/home/ltc14.png',name: 'ltc',height: 1.4,width: 1.4},
                {x: 6,y: 2,iconSrc: '../static/image/home/neo15.png',name: 'neo',height: 1.4,width: 1.4},
                {x: 6,y: 3,iconSrc: '../static/image/home/bsv16.png',name: 'bsv',height: 1.4,width: 1.4},
                {x: 6,y: 4,iconSrc: '../static/image/home/dog17.png',name: 'dog',height: 1.2,width: 1.2},
                {x: 6,y: 5,iconSrc: '../static/image/home/zec0.png',name: 'zec',height: 1.2,width: 1.2},
                {x: 6,y: 6,iconSrc: '../static/image/home/qtum1.png',name: 'qtum',height: 1.2,width: 1.2},
                {x: 6,y: 7,iconSrc: '../static/image/home/btc2.png',name: 'btc',height: 1.6,width: 1.6},
                {x: 6,y: 8,iconSrc: '../static/image/home/usdt3.png',name: 'usdt',height: 1.4,width: 1.4},
                {x: 6,y: 9,iconSrc: '../static/image/home/eos4.png',name: 'eos',height: 1.4,width: 1.4},
                {x: 6,y: 10,iconSrc: '../static/image/home/vet5.png',name: 'vet',height: 1.4,width: 1.4},

                {x: 11,y: 3,iconSrc: '../static/image/home/etc6.png',name: 'etc',height: 1.4,width: 1.4},
                {x: 12.25,y: 3.35,iconSrc: '../static/image/home/xmr7.png',name: 'xmr',height: 1.2,width: 1.2},
                {x: 13.17,y: 4.25,iconSrc: '../static/image/home/eth8.png',name: 'eth',height: 1.6,width: 1.6},
                {x: 13.5,y: 5.5,iconSrc: '../static/image/home/xrp9.png',name: 'xrp',height: 1.4,width: 1.4},
                {x: 13.17,y: 6.75,iconSrc: '../static/image/home/hsr11.png',name: 'hsr',height: 1.6,width: 1.6},
                {x: 12.25,y: 7.67,iconSrc: '../static/image/home/dash12.png',name: 'dash',height: 1.2,width: 1.2},
                {x: 11,y: 8,iconSrc: '../static/image/home/dcr13.png',name: 'dcr',height: 1.4,width: 1.4},
                {x: 9.75,y: 7.67,iconSrc: '../static/image/home/ltc14.png',name: 'ltc',height: 1.4,width: 1.4},              
                {x: 8.84,y: 6.75,iconSrc: '../static/image/home/zec0.png',name: 'zec',height: 1.2,width: 1.2},
                {x: 8.5,y: 5.5,iconSrc: '../static/image/home/bch10.png',name: 'bch',height: 1.4,width: 1.4},
                {x: 8.84,y: 4.25,iconSrc: '../static/image/home/qtum1.png',name: 'qtum',height: 1.2,width: 1.2},
                {x: 9.75,y: 3.35,iconSrc: '../static/image/home/eth8.png',name: 'eth',height: 1.6,width: 1.6},
                
                {x: 17,y: 3,iconSrc: '../static/image/home/etc6.png',name: 'etc',height: 1.4,width: 1.4},
                {x: 18.25,y: 3.35,iconSrc: '../static/image/home/xmr7.png',name: 'xmr',height: 1.2,width: 1.2},
                {x: 19.17,y: 4.25,iconSrc: '../static/image/home/eth8.png',name: 'eth',height: 1.6,width: 1.6},
                {x: 19.5,y: 5.5,iconSrc: '../static/image/home/xrp9.png',name: 'xrp',height: 1.4,width: 1.4},
                {x: 19.17,y: 6.75,iconSrc: '../static/image/home/hsr11.png',name: 'hsr',height: 1.6,width: 1.6},
                {x: 18.25,y: 7.67,iconSrc: '../static/image/home/dash12.png',name: 'dash',height: 1.2,width: 1.2},
                {x: 17,y: 8,iconSrc: '../static/image/home/dcr13.png',name: 'dcr',height: 1.4,width: 1.4},
                {x: 15.75,y: 7.67,iconSrc: '../static/image/home/ltc14.png',name: 'ltc',height: 1.4,width: 1.4},              
                {x: 14.85,y: 6.75,iconSrc: '../static/image/home/zec0.png',name: 'zec',height: 1.2,width: 1.2},
                {x: 14.5,y: 5.5,iconSrc: '../static/image/home/bch10.png',name: 'bch',height: 1.4,width: 1.4},
                {x: 14.85,y: 4.25,iconSrc: '../static/image/home/qtum1.png',name: 'qtum',height: 1.2,width: 1.2},
                {x: 15.75,y: 3.35,iconSrc: '../static/image/home/eth8.png',name: 'eth',height: 1.6,width: 1.6}, 
            ],
        } 
    },
    components: {
     
    },
    created() {
        //求圆上各个点的坐标
        // let a = 17,b=5.5,r=2.5;
        // for(var times = 0; times < 12; times++){
        //     var hudu = (2*Math.PI / 360) * 30 * times;
        //     var X = a + Math.sin(hudu) * r;
        //     var Y = b - Math.cos(hudu) * r 
        //     console.log(X,Y);
        // }
    },
    mounted() {
        let tempTable = this.tempTable;
        var camera, scene, renderer;
        var controls;
        var tempNum = 0; //计数器
        var root,radius = 100,theta = 0;;
        var objects = [];
        var targets = { table: [], sphere: [], helix: [], grid: [] };
        init();
        animate();
        function init() {
            camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
            camera.position.z = 2500;
            scene = new THREE.Scene();

            //初始化处理
            for(var i=0; i < tempTable.length; i++){
                var element = document.createElement('div');
                element.className = 'element';
                element.style.backgroundImage  = "url("+ tempTable[i].iconSrc + ")";
                element.style.backgroundRepeat  = "no-repeat";
                element.style.backgroundSize = '100% 100%';
                element.style.height = tempTable[i].height*100 + 'px';
                element.style.width = tempTable[i].width*100 + 'px';

                // 添加币种名称
				// var symbol = document.createElement( 'div' );
                // symbol.className = 'symbol';
                // symbol.textContent = tempTable[i].name.toLocaleUpperCase();
                // element.appendChild( symbol );

                var object = new THREE.CSS3DObject( element );
                object.position.x = Math.random() * 4000 - 2000;
                object.position.y = Math.random() * 4000 - 2000;
                object.position.z = Math.random() * 4000 - 2000;
                scene.add( object );
                objects.push( object );
                
                //table
                var object = new THREE.Object3D();
                object.position.x = ( tempTable[i].x * 180 ) - 1800;
                object.position.y = - ( tempTable[i].y * 180 ) + 990;
                targets.table.push( object );
            }

            // sphere
            var vector = new THREE.Vector3();
            for ( var i = 0, l = objects.length; i < l; i ++ ) {
                var phi = Math.acos( - 1 + ( 2 * i ) / l );
                var theta = Math.sqrt( l * Math.PI ) * phi;
                var object = new THREE.Object3D();
                object.position.setFromSphericalCoords( 800, phi, theta );
                vector.copy( object.position ).multiplyScalar( 2 );
                object.lookAt( vector );
                targets.sphere.push( object );
            }
            
            // helix
            // var vector = new THREE.Vector3();
            // for ( var i = 0, l = objects.length; i < l; i ++ ) {
            //     var theta = i * 0.175 + Math.PI;
            //     var y = - ( i * 16 ) + 450;
            //     var object = new THREE.Object3D();
            //     object.position.setFromCylindricalCoords( 900, theta, y );
            //     vector.x = object.position.x * 2;
            //     vector.y = object.position.y;
            //     vector.z = object.position.z * 2;
            //     object.lookAt( vector );
            //     targets.helix.push( object );
            // }
            // grid
            for ( var i = 0; i < objects.length; i ++ ) {
                var object = new THREE.Object3D();
                object.position.x = ( ( i % 5 ) * 400 ) - 800;
                object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
                object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;
                targets.grid.push( object );
            }
            //
            renderer = new THREE.CSS3DRenderer();
            renderer.setSize( window.innerWidth, 600*window.innerWidth/1920+20);
            document.getElementById( 'container' ).appendChild( renderer.domElement );
            //
            controls = new THREE.TrackballControls( camera, renderer.domElement );
            controls.rotateSpeed = 0.5;
            controls.minDistance = 500;
            controls.maxDistance = 6000;
            controls.addEventListener( 'change', render );

            //隐藏按钮
            // var button = document.getElementById( 'table' );
            
            // button.addEventListener( 'click', function () {
            //     transform( targets.table, 2000 );
            // }, false );
            // var button = document.getElementById( 'sphere' );
            // button.addEventListener( 'click', function () {
            //     transform( targets.sphere, 2000 );
            // }, false );
            // var button = document.getElementById( 'helix' );
            // button.addEventListener( 'click', function () {
            //     transform( targets.helix, 2000 );
            // }, false );
            // var button = document.getElementById( 'grid' );
            // button.addEventListener( 'click', function () {
            //     transform( targets.grid, 2000 );
            // }, false );
            
            transform( targets.sphere, 3000 );
            window.addEventListener( 'resize', onWindowResize, false );
        }
        function transform( targets, duration ) {
            TWEEN.removeAll();
            for ( var i = 0; i < objects.length; i ++ ) {
                var object = objects[ i ];
                var target = targets[ i ];
                new TWEEN.Tween( object.position )
                    .to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
                    .easing( TWEEN.Easing.Exponential.InOut )
                    .start();
                new TWEEN.Tween( object.rotation )
                    .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
                    .easing( TWEEN.Easing.Exponential.InOut )
                    .start();
            }
            new TWEEN.Tween( this )
                .to( {}, duration * 2 )
                .onUpdate( render )
                .start();
        }
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, 600*window.innerWidth/1920+20 );
            render();
        }
        function animate() {
            requestAnimationFrame( animate );
            TWEEN.update();
            controls.update();
            render();
        }
        function render() {
            theta += 0.1;
            camera.position.x = 2000 * Math.sin( THREE.Math.degToRad( theta ) );
            camera.position.y = 2000* Math.sin( THREE.Math.degToRad( theta ) );
            camera.position.z = 2500 * Math.cos( THREE.Math.degToRad( theta ) );
            camera.lookAt( scene.position );

            renderer.render( scene, camera );
        }

        //循环每过30秒切换形状
        function changeShape() {
            tempNum +=1;
            let i = tempNum % 3 ;
            switch(i){
                case 0: 
                    transform( targets.sphere, 3000 );
                    break;
                case 1: 
                    transform( targets.table, 3000 );
                    break;
                // case 2: 
                //     transform( targets.helix, 3000 );
                //     break;
                case 2: 
                    transform( targets.grid, 3000 );
                    break;
                default: 
                    transform( targets.sphere, 3000 );
                    break;
            }
        }

        setInterval(() => {
            changeShape();
        },30000);

    },
    methods: {
        
    },
}
</script>

<style>
@import "../assets/css/public";
#periodic-3D{
    height: 100%;
    width: 100%;
    /* background-color: #000000; */
    /* background-color: #76EEC6; 
    border-radius: 16rem 10rem 12rem 6rem; */
    overflow: hidden;
}
.element {
    /* box-shadow: 0px 0px 12px rgba(0,255,255,0.5);
    border: 1px solid rgba(127,255,255,0.25); */
    cursor: pointer;
}
.element:hover {
    box-shadow: 0px 0px 12px rgba(0,255,255,0.5);
    border: 1px solid rgba(127,255,255,0.25);
}
.element .symbol {
    position: absolute;
    bottom: 0;
    left: 0px;
    right: 0px;
    font-size: 24px;
    font-family:MicrosoftYaHei-Bold;
    font-weight: 400;
    color: #000000;
    /* text-shadow: 0 0 10px rgba(0,255,255,0.95); */
}

#menu {
    position: absolute;
    bottom: 20px;
    width: 100%;
    margin-left: 8%;
    text-align: left;
}
button {
    color: rgba(127,255,255,0.75);
    background: transparent;
    outline: 1px solid rgba(127,255,255,0.75);
    border: 0px;
    padding: 5px 10px;
    cursor: pointer;
}
button:hover {
    background-color: rgba(0,255,255,0.5);
}
button:active {
    color: #000000;
    background-color: rgba(0,255,255,0.75);
}
</style>
