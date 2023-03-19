/**
 * 
 * Should return a promise that resolves with the value after delayInMs
 *
 * @param {any} value 
 * @param {number} delay 
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function job(delay) {
  return new Promise ((resolve,reject) =>{
        setTimeout(() => {
            resolve(`done ${delay}`)
          }, delay);
    });
}
Promise.all([job(1000),job(2000),job(500),job(1500)])
.then ((results =>{
console.log(results);
}));
