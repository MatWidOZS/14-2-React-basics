// var element = React.createElement('div', {}, 'Hello world!');
// ReactDOM.render(element, document.getElementById('app'));

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'List of movies'),
		React.createElement('ul', {},
			React.createElement('li', {},
				React.createElement('h2', {}, 'Scarface'),
				React.createElement('p', {}, 'Movie about the Cuban emigrant, Tony Montana')
			),
			React.createElement('li', {},
				React.createElement('h2', {}, 'Inception'),
				React.createElement('p', {}, 'Movie about thief, who steals corporate secrets through the use of dream-sharing technology')
			)
		)
	);

ReactDOM.render(element, document.getElementById('app'));