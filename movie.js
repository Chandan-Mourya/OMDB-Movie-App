async function MovieData(){
    var movie = document.getElementById("title").value;
    let url =`https://www.omdbapi.com/?t=${movie}&apikey=b46d33c6`
    let res = await fetch(url)
    let data = await res.json();
    console.log("data: ", data);
    
    var box = document.getElementById("fill")
    box.setAttribute("class","box")
    box.innerHTML = null;

    var title = document.createElement("h3")
    title.innerHTML = `Title : ${data.Title}`;

    let poster =document.createElement("img")
    poster.src = data.Poster;

    var year = document.createElement("div")
    year.innerText = `Release Date :- ${data.Released}`;

    var genre = document.createElement("div")
    genre.innerText = "Genres :-" + data.Genre;

    let boxoffice = document.createElement("div")
    boxoffice.innerText = `BoxOffice :- ${data.BoxOffice}`;

    var language = document.createElement("div")
    language.innerText = "Language :-"+ data.Language;

    var rat = document.createElement("div")
    if(data.imdbRating > 8.5){
        rat.innerText = `imdbRating :- ${data.imdbRating} ("RECOMMEDED BY IMDB")`;
    }else{
        rat.innerText = "ImdbRating :-"+ data.imdbRating;
    }
    

    var Director= document.createElement("div")
    Director.innerText = "Director :-"+ data.Director;

    var Actors= document.createElement("div")
    Actors.innerText = "Actors :-"+ data.Actors;

        var Plot= document.createElement("div")
        Plot.innerText = "Story Plot :-"+ data.Plot;


    // console.log(data.Language)
    let b1 = document.createElement("div")
    b1.setAttribute("class","b1")
    b1.append(title,poster)


    let b2 = document.createElement("div")
    b2.setAttribute("class","b2")
    b2.append(genre, year,language,rat,Director,Actors,boxoffice,Plot)
    
    
    box.append(b1,b2);


}
