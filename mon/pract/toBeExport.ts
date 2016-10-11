export class  Product {
  public name:string;
  public price:number;

  constructor(name, price){
      this.name = name;
      this.price = price;
  }
}

export function doSomething(){
  console.log('did something');
}

function doSomethingSecret(){
  console.log("secret");
}

export const orange = '#FFFA500';
