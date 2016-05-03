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
         var $newMovie = $('<p>').addClass('movie').text(movie.Title);
         var $image = $('<img>').attr('src',movie.Poster);
         $newMovie.append($image);
         $('.movie_list').append($newMovie);
       });
     });

});

$('.movie_list').on('click','p',function(event){
  console.log($(event.target));
  // var settings = {
  //   url: 'http://www.omdbapi.com/?t=' + $('#input_name').val(),
  //   method: 'get'
  // }
})
