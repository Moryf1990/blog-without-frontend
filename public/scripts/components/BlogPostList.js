import React from 'react';
import PostCollection from '../collections/PostCollection';

export default React.createClass({
	getInitialState: function() {
		let thing = new PostCollection();
		return {
			items: thing
		};
	},
	componentDidMount: function() {
		this.state.items.on('update', () => {
			this.setState({
				items: this.state.items
			});
		});
	},
	render: function() {
		let blogPostList = this.state.items.map((val) => {
			<div>{val.get('title')}</div>;
			<div>{val.get('author')}</div>;
			<div>{val.get('createdAt')}</div>;
			<div>{val.get('body')}</div>;
		});
	}
});