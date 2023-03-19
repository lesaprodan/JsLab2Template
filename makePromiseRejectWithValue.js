/**
 * 
 * Should return promise with error
 * 
 * @returns {Promise<,"Boo!">}
 */
function makePromiseRejectWithBoo(){
    // put your code here
try {
throw new Error ( 'Boo!');
} catch (error) {
return Promise.reject (error .message);
 }
  }
makePromiseRejectWithBoo()
.catch(error =>{
console.error(error==="Boo!");
});
