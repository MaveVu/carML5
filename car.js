class Car {
  
  constructor() {
    this.x = 150;
    this.y = 250;
    this.xdir = 0;
    this.ydir = 0;
  }

  update() {   
    this.x += this.xdir;
    this.y += this.ydir;
  }
  
  setDir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }
  
  collide(obst) {
    if (((obst.x < this.x && obst.x + 100 > this.x) || (obst.x > this.x && obst.x - 50 < this.x && obst.x + 50 > this.x)) && (obst.y >= this.y && obst.y <= this.y + 50)){
      return true;
    }
    return false;
  }
  
  hitWall(){
    if (this.x <= 0 || this.x + 50 >= 680){
      return true;
    }
    return false;
  }
  
  show() {
    fill(0);
    image(carImg, this.x, this.y, 50, 50);
  }
}