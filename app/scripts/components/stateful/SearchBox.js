/**
 * SearchBox Component - Renders the search box
 */

var Search = require('../stateless/Search');

var SearchBox = React.createClass({
 
  render: function() {
    return (
      <div>
        <Search placeholder="Enter your search here" handleSearch={this.props.handleSearch} />    
      </div>
    )
  }

});
module.exports = SearchBox;