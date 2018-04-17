// var element = React.createElement('div', {}, 'Hello world!');
// ReactDOM.render(element, document.getElementById('app'));

var movies = [
	{
		id: 1,
		title: 'Scarface',
		desc: 'In Miami in 1980, a determined Cuban immigrant Tony Montana takes over a drug cartel and succumbs to greed.'
	},
	{
		id: 2,
		title: 'Inception',
		desc: 'A thief, who steals corporate secrets through the use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.'
	},
	{
		id: 3,
		title: 'Whiplash',
		desc: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential'
	},
	{
		id: 4,
		title: 'Star Wars: Episode V - The Empire Strikes Back',
		desc: 'After the rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.'
	},
	{
		id: 5,
		title: 'Three Billboards Outside Ebbing, Missouri',
		desc: 'A mother personally challenges the local authorities to solve her daughter\'s murder when they fail to catch the culprit.'
	},
	{
		id: 6,
		title: 'Prisoners',
		desc: 'When Keller Dover\'s daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts.'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
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