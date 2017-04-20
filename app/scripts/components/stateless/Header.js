/**
 * Header Component - Renders the headers for the app
 */

var React = require('react');

var Header = React.createClass({
  
  render: function() {

    return (
        <header>
    		  <div className="wrapper">
    		      <a className="headerbar-brand" href="#">Search App</a>
    		  </div>
    		</header>
    );

  }

});


module.exports = Header;