// Small ---
// stopwatch create a simple stopwatch app that starts the timer and show the stopped time.
function timerFunct(){
    return new Promise((resolve, reject) => {
    let randTime = Math.floor(Math.random() * 11) * 1000;
    setTimeout(()=>{
        resolve(randTime);
    }, randTime);
  })
    // .then(value => {
    //   console.log(`${value/1000} seconds`);
    // //   const bodyEl = document.querySelector('body')
    // //   bodyEl.innerHTML += `<h1>${value/1000} seconds</h1>`
    // });
}


  
// Medium ---
// Create two animals (a tortoise and a hare) that race each other.
// Start each animals with a separate promise
// End each promise on a random time between 1-10 seconds
// Display the winner (or determine if it's a tie)
// Display the total time it took for each animal

const hare = timerFunct();
const tortoise = timerFunct();

console.log('Starting Race!');
Promise.all([hare, tortoise])
    .then(results => {
        const [hareResult, tortoiseResult] = results;
        if(hareResult > tortoiseResult){
            console.log('Hare wins');
        }else if (hareResult < tortoiseResult){
            console.log('tortoise wins');
        }else{
            console.log('DRAW');
        }
    })