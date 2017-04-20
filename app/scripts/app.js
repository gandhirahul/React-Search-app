/**
 * Starts the app - Renders the App Component.
 */
/** app@jsx React.DOM */

var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    ProductListPage = require('./components/pages/ProductListPage'),
    Header = require('./components/stateless/Header'),
    mountNode = document.getElementById("app");

var App = React.createClass({
  render: function() {
    
    return (
    <div className="search-app">
      <Header />        
      <ProductListPage />
    </div>
    );

  }
});

ReactDOM.render(<App />, mountNode);