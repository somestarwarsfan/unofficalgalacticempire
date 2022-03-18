var sketchProc2 = function(processingInstance) {
    with (processingInstance){
        size(600, 400);
        frameRate(30);

        // story teller

        fill(0, 0, 0);
        textSize(20);
        textAlign(CENTER);

        //images of Leafers
        var seed= loadImage("./images/leafers-seed.png");
        var seedling= loadImage("./images/leafers-seedling.png");
        var sapling= loadImage("./images/leafers-sapling.png");
        var tree= loadImage("./images/leafers-tree.png");
        var ultimate = loadImage("./images/leafers-ultimate.png");

        var currentScene;
        var textCoodinateX = 300;

        var drawScene0 = function(){
            // title
            // sub-title
            // author/writer
            // publish company
            currentScene = 0;
            background(0, 130, 0 );
            textSize(23);
            text("The Story of the Leafers", textCoodinateX, 100);
            textSize(17);
            text("A story copied from Khan Acedemy", textCoodinateX, 130);
            textSize(15);
            text("By Khan Academy", textCoodinateX, 360); 
        };

        var drawScene1 =function(){
            currentScene = 1;
            background(200, 175, 175);
            image(seed, 50,200);
            textSize(20);
            text("Leafers started out as a seed",textCoodinateX,50);
        };

        var drawScene2 = function(){
            currentScene = 2;
            background(214, 182, 86);
            image(seedling, 100, 150);
            textSize(20);
            text("Then they became seedlings", textCoodinateX, 50);
        };

        var drawScene3 = function(){
            currentScene = 3;
            background(18, 130, 39);
            image(sapling, 150, 200);
            textSize(20);
            text("After that they became saplings", textCoodinateX, 50);
        };

        var drawScene4 = function(){
            currentScene = 4;
            background(32, 227, 68);
            image(tree, 180, 200);
            textSize(20);
            text("And then they grew into trees", textCoodinateX, 50);
        };

        var drawScene5 =function(){
            currentScene = 5;
            background(150, 150, 175);
            image(ultimate, 200,200);
            textSize(20);
            text("In the end, Leafers became Ultimate Leafers",textCoodinateX,50);
        };

        var drawScene6 =function(){
            currentScene = 6;
            background(20, 20, 155);
            textSize(20);
            text("The End",textCoodinateX,200);
        };

        // function
        drawScene0();

        mouseClicked=function(){
            
            if(currentScene === 0) {
                drawScene1();
            }            
            else if(currentScene === 1) {
                drawScene2();
            }
            else if(currentScene === 2) {
                drawScene3();
            }
            else if(currentScene === 3) {
                drawScene4();
            }
            else if(currentScene === 4) {
                drawScene5();
            }
            else if (currentScene === 5 ) {
                drawScene6();
            }
            else if (currentScene === 6) {
                drawScene0();
            }
        };
}};        

var canvas2 = document.getElementById("mycanvas2");
var processingInstance = new Processing(canvas2, sketchProc2);