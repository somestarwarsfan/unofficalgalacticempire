var sketchProc = function(processingInstance) {
    with (processingInstance){
        size(400, 400);
        frameRate(30);

// step1. [restriction] add restriction of height -> boundary
// step2. [reset] when the height of flowers reach the boundary, the height of flowers go back to the beginning

        /*************
        *OBJECT TYPES
        **************/
        /******************
        *Flower Object Type
        *******************/
        var Flower = function(x,y,height) {
            this.x = x;
            this.y = y;
            this.height = height;
        };
        Flower.prototype.growBy = function(x) {

            // if ~ else
            // if ~ else if ~ else
            // if


            // example #1
            // this.height += 2 * x; // 381

            // if(this.height >= 380) {  // 350 to 380
            //     this.height = 0 // reset -> initialize
            // }	
            
            
            // example #2
            // if(this.height >= 340)
            // {
            //     this.height = 0;
            // }
            // else // otherwise
            // {
            //     this.height += 2 * x;
            // }


            // example #3
            if(this.height >= 340)
            {
                this.height = 0;
            }
            else if(this.height >= 200 && this.height < 340)
            {
                this.height += x * 0.5;
            }
            else
            {
                this.height += 2 * x;
            }
        };
    
        /*****************
        *Tulip Object Type
        ******************/
        var Tulip = function(x, y, height) {
            Flower.call(this, x, y, height); // construtor, inherit
        };

        Tulip.prototype = Object.create(Flower.prototype);
        Tulip.prototype.draw = function() {
            noStroke();
            fill(16, 122, 12);
            rect(this.x, this.y, 10, -this.height);
            fill(255, 217, 0);
            // petals
            ellipse(this.x+5, this.y-this.height, 44, 44);
            triangle(this.x-16, this.y-this.height, 
                    this.x+20, this.y-this.height,
                    this.x-20, this.y-this.height-31);
            triangle(this.x-14, this.y-this.height, 
                    this.x+24, this.y-this.height,
                    this.x+3, this.y-this.height-39);
            triangle(this.x+-4, this.y-this.height, 
                    this.x+26, this.y-this.height,
                    this.x+29, this.y-this.height-36);
        };

        /*********************
        *Sunflower Object Type
        **********************/
        var Sunflower = function(x, y, height) {
            Flower.call(this,x,y,height);
        };

        var sunflowerHeight = 0;

        Sunflower.prototype = Object.create(Flower.prototype);
        Sunflower.prototype.draw = function() {
            fill(16, 122, 12);
            
            rect(this.x, this.y, 10, -this.height);
            
            // petals
            stroke(0, 0, 0);
            fill(255, 221, 0);
            ellipse(this.x-10, this.y-this.height, 20, 18);
            ellipse(this.x+5, this.y-this.height-15, 20, 18);
            ellipse(this.x+5, this.y-this.height+15, 20, 18);
            ellipse(this.x+20, this.y-this.height, 20, 18);
            
            fill(20, 20, 20);
            ellipse(this.x+5, this.y-this.height, 20, 20);
        };
        // if(y === 400) { 
        //     y === 0
        //  }

////////////////////////////////////////////////////////////////////////
        /**************
        *MAIN PROGRAM: Driver class
        ***************/

        /** create object instances **/
        var tulip = new Tulip(38, 390, 150);
        var sunflower = new Sunflower(186, 390, 100);	
        var tulip2 = new Tulip(250, 386, 40);
        var sunflower2 = new Sunflower(100, 390, 200);

        var drawScene = function() {
            background(207, 250, 255);
            tulip.draw();
            sunflower.draw();
            tulip2.draw();
            sunflower2.draw();
        };

        mouseClicked = function() {
            tulip.growBy(1);
            sunflower.growBy(20);
            tulip2.growBy(25);
            sunflower2.growBy(25);

            drawScene();
        };     
        //  if(y === 400) { 
        //      y === 0
        // }

        // else 
        //  y === {

        // }

        drawScene();			
}};

var canvas = document.getElementById("mycanvas");
var processingInstance = new Processing(canvas, sketchProc);