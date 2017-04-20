/**
 * Filters Component
 * @Props
 * @param {callback} handleFilters - Fires the Filter event
 */

var Filters = React.createClass({

  render: function() {
    return (
      <div className="filters clearfix">
        <button className="filter-btn" onClick={this.props.handleFilters.bind(null,'relevance')}>Relevance</button>
        <button className="filter-btn" onClick={this.props.handleFilters.bind(null,'popular')}>Popular</button>
        <button className="filter-btn" onClick={this.props.handleFilters.bind(null,'low')}>Low Price</button>
        <button className="filter-btn" onClick={this.props.handleFilters.bind(null,'high')}>High Price</button>
      </div>
    )
  }
 
});

module.exports = Filters;  