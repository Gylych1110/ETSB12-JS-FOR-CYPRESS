function one(resolvePromise=true){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(resolvePromise){
        resolve("Promise: PASS")
      } else {
        reject("Promise: REJECT")
      }
    }, 3000)
  });
};

function two() {
  console.log("TWO");  
}

async function test(){
try {
  console.log("Test PASS");
  const data = await one(true);
  console.log(data);
  two();
} catch (e) {
  console.log("error: ", e);
}
};

test();
