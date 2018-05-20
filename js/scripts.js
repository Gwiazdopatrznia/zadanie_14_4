var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		poster: './images/harrypotter.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		poster: './images/krollew.jpg'
	},
	{
		id: 3,
		title: 'Coco',
		desc: 'Bajka o więziach rodzinnych',
		poster: './images/coco.jpg'
	},
	{
		id: 4,
		title: 'Mocna kawa wcale nie jest taka zła',
		desc: 'Film o niełatwym powrocie do swoich korzeni',
		poster: './images/mocnakawa.jpg'
	}
];

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},

	render: function() {
		return (
			React.createElement('li', {},
				React.createElement(MovieTitle, {title: this.props.movie.title}),
				React.createElement(MovieDescription, {desc: this.props.movie.desc}),
				React.createElement(MoviePoster, {poster: this.props.movie.poster, title: this.props.movie.title})
			)	
		)
	},
});

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},

	render: function() {
		return (
			React.createElement('h2', {}, this.props.title)	
		)
	},
});

var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},

	render: function() {
		return (
			React.createElement('p', {}, this.props.desc)	
		)
	},
});

var MoviePoster = React.createClass({
	propTypes: {
		poster: React.PropTypes.string.isRequired,
		title: React.PropTypes.string.isRequired,
	},

	render: function() {
		return (
			React.createElement('img', {src: this.props.poster, alt: this.props.title})
		)
	},
});

var MoviesList = React.createClass({
	propTypes: {
		movies: React.PropTypes.array.isRequired,
	},

	render: function() {
		var movieElements = this.props.movies.map((movie) => {
			return React.createElement(Movie, {movie, key: movie.id});
		});
	
		return (
			React.createElement('div', {},
				React.createElement('h1', {}, 'Lista filmów'),
				React.createElement('ul', {}, movieElements)
			)	
		);
	}
});

var element = React.createElement(MoviesList, {movies: movies});
ReactDOM.render(element, document.getElementById('app'));
