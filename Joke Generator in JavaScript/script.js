const API="https://v2.jokeapi.dev/joke/Programming?type=single"
document.getElementById('btn').addEventListener('click',()=>{
 fetch(API)
 .then(data=>data.json())
    .then(para=>{
        document.getElementById('joke').innerHTML=para.joke
    })



})