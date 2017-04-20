/**
 * Feature Section Component - Renders the Features of any product
 */
var React = require('react');

var FeatureSection = React.createClass({
  
  render: function() {

    return (
        <div className="feature-section">
		   	<ul>
		   	{
	          	this.props.features.map(function(elm,index){
	          		return  <li key={index}>{elm}</li>
	          				
	          	})
      		}
      		</ul>
		</div>
    );

  }

});


module.exports = FeatureSection;