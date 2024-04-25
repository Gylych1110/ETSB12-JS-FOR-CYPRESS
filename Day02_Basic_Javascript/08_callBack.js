const printOrder=(order)=>{
  setTimeout(() => {
   console.log(order);
  }, (Math.random()*100));
};

const printAll=()=>{
  printOrder("1");
  printOrder("2");
  printOrder("3");
};

printAll();

const printOrder2=(order,callback)=>{
  setTimeout(() => {
    console.log(order);
    if(callback){
      callback();
    }
  }, Math.random()*100);
};

const printAll2 = () => {
  printOrder2("1",()=>{
    printOrder2("2", ()=>{
      printOrder2("3",()=>{

      });
    });
  });
} ;

printAll2();

