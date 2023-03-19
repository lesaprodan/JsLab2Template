// For all exercises, if an error occurs we want to `console.err('something wrong happened!')`
// 1: Print " 1 C D" by using callbacks with `addStringWithCallback()`
// 2: Print " 2 C D" by using promises with `addStringWithPromise()`
// 3: Print " 3 C D" by using async/await with `addStringWithPromise()`

function addStringCallback (previous, current, callback) {
    setTimeout(() => {
      if (Math.random() > 0.8) {
        callback(new Error('error!'));
      } else {
        callback(null, previous + ' ' + current);
      }
    }, Math.floor(Math.random() * 100));
}
  
function addStringPromise (previous, current) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.8) {
          reject(new Error('error!'));
        }
        resolve(previous + ' ' + current);
      }, Math.floor(Math.random() * 100));
    })
}

// put your code here

addStringPromise("2","C")
.then((data) =>{
  addStringPromise(data,"D")
  .then((last) =>{
    console.log(last);
  })
})
.catch((err) =>{
  console.log(err)
});                           ///2


addStringCallback("1","C",function(nu,res){
  addStringCallback(res,"D",(nul,res1)=>{
    console.log(res1);
  })                             //1
})

async function Prin() {
  try{
  let prob = '';
  prob = await addStringPromise('D',prob);
  prob = await addStringPromise('C',prob);
  prob = await addStringPromise('3',prob);
  console.log(prob);
  }
  catch(err){
    console.log(err);
  }
}
Prin();                 ///3
