import {showAndAdd,onlyShow,Example,E1} from './oops';

const ob:showAndAdd=new Example(4);
ob.show();
ob.addOne();
ob.show();
const ob2=new E1(10);
ob2.show();
ob2.addTwo();
ob2.show();
const ob3:onlyShow=new E1(3);
ob3.show()