let score = 0;

let acce = 0.5;

class Obs {
  
  constructor() {
    this.x = 0;
    this.y = 0;
    this.ysp = 2;
  }

  update() {   
    this.y += this.ysp;
    if (this.y >= 380){
      score += 1;
      this.ysp += acce;
      this.y = 0;
      this.x = getRandom(100, 480);
      
    }
  }

  show() {
    fill(0);
    rect(this.x, this.y, 100, 20);
  }
}