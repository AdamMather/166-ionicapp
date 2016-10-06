angular.module('starter.services', [])

.factory('FilmFactory', function () {

				var db = [
										{"Title":"Mad Max","Year":"2015","Rated":"N/A","Released":"01 Sep 2015","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"Frank Rooke, Neil Huxley","Writer":"Riley Adams (script doctor: additional script review), Odd Ahlgren","Actors":"Travis Willingham, Orion Acaba, Laura Bailey, Adrienne Barbeau","Plot":"Max Rockatansky, a former highway patrol officer known as Mad Max across the post apocalyptic wasteland of Australia, has his V8 Interceptor stolen from him. Max fights and tracks across the wasteland to take back his car.","Language":"English","Country":"USA, Sweden","Awards":"1 nomination.","Poster":"N/A","Metascore":"N/A","imdbRating":"8.7","imdbVotes":"364","imdbID":"tt3391032","Type":"game","Response":"True"},
										{"Title":"Inside Out","Year":"2015","Rated":"PG","Released":"19 Jun 2015","Runtime":"95 min","Genre":"Animation, Adventure, Comedy","Director":"Pete Docter, Ronnie Del Carmen","Writer":"Pete Docter (original story by), Ronnie Del Carmen (original story by), Pete Docter (screenplay), Meg LeFauve (screenplay), Josh Cooley (screenplay), Michael Arndt (additional story material by), Bill Hader (additional dialogue by), Amy Poehler (additional dialogue by), Simon Rich (additional story material by)","Actors":"Amy Poehler, Phyllis Smith, Richard Kind, Bill Hader","Plot":"After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.","Language":"English","Country":"USA","Awards":"Won 1 Oscar. Another 91 wins & 95 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg","Metascore":"94","imdbRating":"8.3","imdbVotes":"360,055","imdbID":"tt2096673","Type":"movie","Response":"True"},
										{"Title":"Star Wars: The Force Awakens","Year":"2015","Rated":"PG-13","Released":"18 Dec 2015","Runtime":"138 min","Genre":"Action, Adventure, Fantasy","Director":"J.J. Abrams","Writer":"Lawrence Kasdan, J.J. Abrams, Michael Arndt, George Lucas (based on characters created by)","Actors":"Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver","Plot":"Three decades after the defeat of the Galactic Empire, a new threat arises. The First Order attempts to rule the galaxy and only a ragtag group of heroes can stop them, along with the help of the Resistance.","Language":"English","Country":"USA","Awards":"Nominated for 5 Oscars. Another 48 wins & 104 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg","Metascore":"81","imdbRating":"8.2","imdbVotes":"575,439","imdbID":"tt2488496","Type":"movie","Response":"True"}
								];

				var factory = {};

				factory.getFilms = function() {
					return db;
				};

				return factory;

			})
      
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
