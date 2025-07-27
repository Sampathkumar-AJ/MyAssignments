// Callback function

function checkAvailability(movieName,playmovie){

   console.log(`Checking the movie name:`);
   console.log("Movie" +movieName+ "is available")
   playMovie()
}

function playMovie(){

   console.log(`Now playing the movie`);

}



checkAvailability(" Spider Man ", playMovie)