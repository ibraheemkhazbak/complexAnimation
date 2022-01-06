class Entity {
    constructor(pos, dir) {
        this.pos = pos;
        this.dir = dir;
        this.speed=1;
    }
    async show() {
        var strokeW=2;

        stroke(255);
        strokeWeight(strokeW);
        point(this.pos.x, this.pos.y);
        
    }

   
    update(){
        this.pos.x+=this.dir.x*this.speed;
        this.pos.y+=this.dir.y*this.speed;
    }

}