class Entities {
    constructor(amount) {
        this.children = [];
        this.lines=[];
        for (var i = 0; i < amount; i++) {
            this.createPoint();
        }
    }
    createPoint(){
       let dir=this.randomDir();
       let x=random(0, width);
        let y=random(0, height);
        this.children.push(
            new Entity(
                new Vector2D(
                    x,
                    y
                    ),
                     dir));
                     this.calcLinesForPoint(0,this.children[this.children.length-1]);
                    }
  async  show() {
        var i = 0, len = this.children.length;
        var d;
        var maxDist=150;
     
        while (i < len) {
            this.children[i].show();
     
            i++
    
        }
        i=0,len=this.lines.length;
        while (i < len) {
            d = dist(this.lines[i].x.x, this.lines[i].x.y, this.lines[i].y.x, this.lines[i].y.y);
            strokeWeight(strokeW);
            if (d < maxDist) {
                stroke(255, 255, 255,100-(100*(d/maxDist)))
                line(this.lines[i].x.x, this.lines[i].x.y, this.lines[i].y.x, this.lines[i].y.y);
            }
            i++;
    }
  
    }
    calcLinesForPoint(j,point){
        var d,len = this.children.length;;
        
        while (j < len) {
            d = dist(point.pos.x, point.pos.y, this.children[j].pos.x, this.children[j].pos.y);
            if (d < maxDist+100) {
                this.lines.push(new Vector2D(point.pos,this.children[j].pos));
            }
             j++
         }

    }
    calcLines(){
        var i = 0,j=i, len = this.children.length;
       
        this.lines=[];
        while (i < len) {
              j=i
     this.calcLinesForPoint(j,this.children[i]);
            i++
        }
    }
   async update() {
        var i = 0, j = 0, len = this.children.length;
       
       for (let i = 0; i < this.children.length; i++) {

        this.children[i].pos.x=this.children[i].pos.x+this.children[i].dir.x*this.children[i].speed;
        this.children[i].pos.y=this.children[i].pos.y+this.children[i].dir.y*this.children[i].speed;
          for (let j = 0; j < this.children.length; j++) {
            if((this.children[i].pos.x>width)||(this.children[i].pos.x<0)||(this.children[i].pos.y<0)||(this.children[i].pos.y>height)){
                this.children.splice(i,1);
                this.createPoint();
                }
          }
    }
      
    }
    randomDir() {
        var angle = random(0, 10);
        var direction=new Vector2D(cos(angle), sin(angle));
        return direction;
    }
}