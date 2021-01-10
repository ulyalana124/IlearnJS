'use strict';

let numberOfFilms;

function start() {
   numberOfFilms = +prompt("How many moovies did you see?", "");

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt("How many moovies did you see?", "");
   }
}

start();

let personalMovieDB = {
   count: numberOfFilms,
   moovies: {},
   actors: {},
   genres: [],
   privat: false
};

function rememberMyFilms() {
   for (let i=0; i < numberOfFilms; i++){
      const a = prompt("One of last watched moovies", ""), 
            b = prompt("How did you apreciate this moovie?", "");
      if (a != null && a != '' && a.length < 50 && b != null && b != ''){
         personalMovieDB.moovies[a] = b;
         console.log("done");
      } else {
         console.log('error');
         i--;
      }
      
   }
}

rememberMyFilms();

function detectPersonalLevel(){
   if (personalMovieDB.count < 10){
      alert("Quite a few movies have been viewed");
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
      alert("You are a classic spectator");
   }else if (personalMovieDB.count >= 30){
      alert('You are a movie fan');
   }else{
      alert('Error');
   }
}

detectPersonalLevel();

function showMyDB() {
   if (personalMovieDB.privat === false){
      console.log(personalMovieDB);
   }
}

showMyDB();

function writeYourGenres() {
   for (let i = 0; i < 3; i++ ) {
      personalMovieDB.genres[i] = prompt(`Your favorite ganre N${i + 1}`, '');
   }
}

writeYourGenres();