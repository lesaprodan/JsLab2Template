/**
 * 
 * Should return a promise that resolves with the value after delayInMs
 *
 * @param {any} value 
 * @param {number} delay 
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function job(delay) {
    /return new Promise( (resolve, reject)=> {
if (itShouldResolve) {
resolve ();
} else {
reject ();
}
});
}

makePromiseWithConstructor(true)
.then (( ) => console.log( 'Promise resolved' ))
.catch(( ) => console.log ('Promise rejected' ));

makePromiseWithConstructor(false)
.then (( ) => console.log ('Promise resolved'))
. catch(() =>console. log ('Promise rejected' ));
