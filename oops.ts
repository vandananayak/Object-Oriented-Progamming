export interface onlyShow
  {
    show():void;
  }
export interface showAndAdd extends onlyShow
  {
    addOne():void;
  }

export class Example implements onlyShow,showAndAdd{
  // Interface-multiple interface inherited
  constructor(public val:number){}
  addOne(){
    this.val=this.val+1;
  }
  show(){
    console.log(this.val)
  }
}
export class Example2 implements onlyShow{
  // polymorphism-show is overriden
  constructor(public val:number){}
  show(){
    console.log('val',this.val)
  }
}

export class E1 extends Example2{
  // inheritence
  constructor(val:number){
    super(val);
  }
  addTwo(){
    this.val=this.val+2;
  }
}