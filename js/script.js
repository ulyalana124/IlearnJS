'use strict';

let personalMovieDB = {
   count: 0,
   moovies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function() {
      personalMovieDB.count = +prompt("How many moovies did you see?", "");
   
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt("How many moovies did you see?", "");
      }
   },

   rememberMyFilms: function() {
      for (let i=0; i < personalMovieDB.count; i++){
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
   },

   detectPersonalLevel: function(){
      if (personalMovieDB.count < 10){
         alert("Quite a few movies have been viewed");
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
         alert("You are a classic spectator");
      }else if (personalMovieDB.count >= 30){
         alert('You are a movie fan');
      }else{
         alert('Error');
      }
   },

   showMyDB: function() {
      if (personalMovieDB.privat === false){
         console.log(personalMovieDB);
      }
   },

   toggleWisibleMyDB: function(){
      if (personalMovieDB.privat === true){
         personalMovieDB.privat = false;
      } else {personalMovieDB.privat = true;}
   },

   writeYourGenres: function() {
      for (let i = 0; i < 3; i++ ) {
         personalMovieDB.genres[i] = prompt(`Your favorite ganre N${i + 1}`, '');

         while (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null) {
            console.log(`You enter uncorrect data or don't enter them`);
            personalMovieDB.genres[i] = prompt(`Your favorite ganre N${i + 1}`, '');
         }
      }
      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Favorite genre #${i + 1} is ${item}`);
      });
   }
};
personalMovieDB.toggleWisibleMyDB();
personalMovieDB.showMyDB();

personalMovieDB.toggleWisibleMyDB();
personalMovieDB.showMyDB();