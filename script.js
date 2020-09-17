const promise = new Promise((resolve, reject) => {
    let randTime = Math.floor(Math.random() * 11)
    setTimeout(()=>{
        resolve(randTime);
    }, randTime);
  });
  
  promise.then(value => console.log(`${value} seconds`));
  