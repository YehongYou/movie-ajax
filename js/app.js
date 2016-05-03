console.log('linked');

$('#searchBtn').on('click',function(){


    var settings = {
      url: 'http://www.omdbapi.com/?s=' + $('#input_name').val(),
      method: 'get'
    }

    $.ajax(settings)
     .done(function(response){
      //  console.log(response.Search[0].Title);
       var movies = response.Search;
       movies.forEach(function(movie){
         var $newMovie = $('<p>').addClass('movie').html('<span>'+movie.Title+'</span>');
         var $image = $('<img>').attr('src',movie.Poster);
         $newMovie.append($image);
         $('.movie_list').append($newMovie);
       });
     });

});

$('.movie_list').on('click','span',function(event){
  console.log($(event.target).text());
  var settings = {
    url: 'http://www.omdbapi.com/?t=' + $(event.target).text(),
    method: 'get'
  }

  // function addDetails(movie){
  //      var $newDetails = $('<div>').addClass('movieDetals').html('<h5>Year: '+movie.Year+'</h5><p>Plot: '+movie.Plot+'</p>');
  //      $(event.target).closest('.movie').after($newDetails);
  //      // this $(event.target) can work  ????????????????
  // }
  // $.ajax(settings)
  //  .done(addDetails);

  $.ajax(settings)
   .done(function(movie){

      var $newDetails = $('<div>').addClass('movieDetals').html('<h5>Year: '+movie.Year+'</h5><p>Plot: '+movie.Plot+'</p>');
      $(event.target).closest('.movie').after($newDetails);
    //  this $(event.target) cannot work  ?????????????????????
   });

});
