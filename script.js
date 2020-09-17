// Small ---
// stopwatch create a simple stopwatch app that starts the timer and show the stopped time.
const timer = new Promise((resolve, reject) => {
    let randTime = Math.floor(Math.random() * 11) * 1000;
    setTimeout(()=>{
        resolve(randTime);
    }, randTime);
  });
  
  timer.then(value => {
      console.log(`${value/1000} seconds`);
      const bodyEl = document.querySelector('body')
      bodyEl.innerHTML += `<h1>${value/1000} seconds</h1>`
    });
  
