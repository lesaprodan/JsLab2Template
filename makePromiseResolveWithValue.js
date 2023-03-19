/**
 * 
 * Should return promise with given value
 * 
 * @param {string} string - The input string
 * @returns {Promise<value>}
 */
function makePromiseResolveWith(value){
    // put your code here
return new Promise((resolve, reject) => {
         resolve (value);
    
    });
}
    makePromiseResolveWith(1).then(result => console.log (result === 1));
    makePromiseResolveWith (3) .then(result => console.log(result === 3));
    makePromiseResolveWith (22).then(result => console. log(result === 22));
    makePromiseResolveWith(15).then(result => console.log (result === 15));
    makePromiseResolveWith(100).then(result => console.log (result === 100));
