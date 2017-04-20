/**
 * ComparisonCard Component
 * @Props
 * @param {number} len - Number of items to compare
 * @param {callback} handleCompare - Fires the comparison event
 * @param {callback} resetCompare - Fires the Reset event
 */

var ComparisonCard = React.createClass({

  render: function() {

    return (
      <div className="comparison-card">
        <span className="compare-text mr10">{this.props.len} Items to compare</span>
        <button className="compare-btn custom-button compare-now mr10" onClick={this.props.handleCompare}>Compare Now</button>
        <button className="compare-btn custom-button mr10" onClick={this.props.resetCompare}>Reset</button>
      </div>
    )
  }
 
 });
module.exports = ComparisonCard;