import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<div>{this.props.author.firstName}</div>
				<div>{this.props.createdAt}</div>
				<div>{this.props.body.substr(0,200)}</div>
			</div>
		);
	}
});
