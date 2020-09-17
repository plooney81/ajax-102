// Small ---
// stopwatch create a simple stopwatch app that starts the timer and show the stopped time.
// function timerFunct(){
//     return new Promise((resolve, reject) => {
//     let randTime = Math.floor(Math.random() * 11) * 1000;
//     setTimeout(()=>{
//         resolve(randTime);
//     }, randTime);
//   })
    // .then(value => {
    //   console.log(`${value/1000} seconds`);
    // //   const bodyEl = document.querySelector('body')
    // //   bodyEl.innerHTML += `<h1>${value/1000} seconds</h1>`
    // });
// }


  
// Medium --- 1
// Create two animals (a tortoise and a hare) that race each other.
// Start each animals with a separate promise
// End each promise on a random time between 1-10 seconds
// Display the winner (or determine if it's a tie)
// Display the total time it took for each animal

// const hare = timerFunct();
// const tortoise = timerFunct();

// console.log('Starting Race!');
// Promise.all([hare, tortoise])
//     .then(results => {
//         const [hareResult, tortoiseResult] = results;
//         if(hareResult > tortoiseResult){
//             console.log('Hare wins');
//         }else if (hareResult < tortoiseResult){
//             console.log('tortoise wins');
//         }else{
//             console.log('DRAW');
//         }
//     })


// Medium 3
// For a single book in the API (e.g., https://anapioficeandfire.com/api/books/1), 
// there is a key named povCharacters that contains an array of character URLs.

// Create a Promise chain that displays the name and released date for a book. 
// Incorporate Promise.all() to show all the name of all of the povCharacters for that book.

function fetchUrl(url){
    return fetch(url)
        .then(response => response.json())
};

fetch('https://anapioficeandfire.com/api/books/1')
    .then((response)=> {
        return response.json()
    })
    .then(bookData => {
        console.log(bookData)
        const bodyEl = document.querySelector('body');

        // add title
        const title = `<h1>${bookData.name}</h1>`;
        bodyEl.innerHTML += title;

        // add authors
        
        let authorLi = '';
        bookData.authors.forEach(author => {
            authorLi += `<li>${author}</li>`;
        });
        let authorUl = `<ul>${authorLi}</ul>`;
        bodyEl.innerHTML += authorUl;

        // pov characters call
        bodyEl.innerHTML += `<h2>Characters</h2>`
        const charPromises = bookData.povCharacters.map((url) => {
            return fetchUrl(url)
        })
        Promise.all(charPromises)
            .then(characters => {
                console.log(characters);

                let charLi = '';
                characters.forEach(char => {
                    charLi += `<li>${char.name}</li>`;
                })
                let charUl = `<ul>${charLi}</ul>`;
                bodyEl.innerHTML += charUl;

            })
    })