let numberOfFilms = +prompt("How many moovies did you see?", "");

let personalMovieDB = {
   count: numberOfFilms,
   moovies: {},
   actors: {},
   genres: [],
   privat: false
};

const a = prompt("One of last watched moovies", ""), 
      b = prompt("How did you apreciate this moovie?", ""),
      c = prompt("One of last watched moovies", ""), 
      d = prompt("How did you apreciate this moovie?", "");

personalMovieDB.moovies[a] = b;
personalMovieDB.moovies[c] = d;

console.log(personalMovieDB);