
const printOrder= (order) => {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log(order);
      resolve();
    }, (Math.random()*100));
  });
}; 

const printAll=()=>{
  printOrder("1")
  .then(()=>printOrder("2"))
  .then(()=> printOrder("3"))
  .catch((error)=>console.error("An error occured: ", error));
};