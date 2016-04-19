import React from 'react';
import {Link} from 'react-router';

const Nav = React.createClass({
  render: function() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/BlogPostList">BlogPostList</Link>
        <Link to="/Preview">Preview</Link>
      </nav>
    );
  }
});

export default Nav;