// var element = React.createElement('div', {}, 'Hello world!');
// ReactDOM.render(element, document.getElementById('app'));

var movies = [
	{
		title: 'Scarface',
		desc: 'Movie tells the story of Cuban emigrant, Tony Montana'
	},
	{
		title: 'Inception',
		desc: 'Movie about thief, who steals corporate secrets through the use of dream-sharing technology'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc)
	);
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'List of movies'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));