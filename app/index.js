var React = require('react');
var ReactDOM = require('react-dom');

// function takes in some data and renders a view

var HelloWorld = React.createClass({
	render: function () {
		
		return (
			<div> Hello World {this.props.name} </div>
		)
	}
});

ReactDOM.render(
	<HelloWorld name="Michelle" />,
	document.getElementById('app')
);
