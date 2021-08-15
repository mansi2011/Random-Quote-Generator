let btnShow = document.querySelector('#show');
let outDiv = document.querySelector('#output');
let author = document.querySelector('#author');
var data;

btnShow.addEventListener('click',displayQuotes);



fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(data => {
        this.data = data;
    })


function displayQuotes(){
    let index = Math.floor(Math.random()*data.length);
    let quote = data[index].text;;
    let by = data[index].author; 
    if(!by){
        by = "Anonymous"
    }

    outDiv.innerText = quote;
    author.innerHTML = `<h4> - ${by} </h4>`;

}