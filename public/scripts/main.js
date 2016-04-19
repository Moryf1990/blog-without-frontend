import $ from 'jquery';
import Backbone from 'backbone';
import {globalErrorHandler, sync} from './sync';
import Nav from './nav.js';
import {Router, Route, hashHistory, Link} from 'react-router';
import BlogPostList from './components/BlogPostList.js';
import Preview from './components/Preview.js';
import Home from './components/Home.js';

$.ajaxSetup({
	error: globalErrorHandler,
	headers: { 
        Accept : 'application/json, text/javascript'
    }
});
Backbone.sync = sync;

import React from 'react';
import ReactDOM from 'react-dom';
import BlogPostList from './components/BlogPostList';
import Preview from './components/Preview';

const router = (
	<Router history={hashHistory}>
		<Route path="/" component={Home}/>
		<Route path="/BlogPostList" component={BlogPostList}/>
		<Route path="/Preview" component={Preview}/>
	</Router>
);

ReactDOM.render(router, document.getElementById('nav'));

ReactDOM.render(<BlogPostList />, document.querySelector('main'));