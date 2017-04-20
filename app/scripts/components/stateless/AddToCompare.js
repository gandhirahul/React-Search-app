/**
 * AddToCompare Section Component - Manages comparison of various products
 */

var React = require('react');

var AddToCompare = React.createClass({
  getInitialState: function() {

    return {
      isChecked:false
    };
  },
  componentWillReceiveProps: function(newProps){
  		if(!newProps.compareData.length){
  			this.resetState();
  		}
  },
  render: function() {

    return (
        <div className="add-to-compare">
    		 	<div className="checkbox">
    		      <label>
    		      	<input type="checkbox" value="" checked={this.state.isChecked} onChange={this.handleCheckBox} />
    		      	Add to Compare
  		      	</label>
  		    </div>
		</div>
    );

  },
  handleCheckBox:function(event){
  	
    this.setState({isChecked: event.target.checked},
  		function(){
			 this.props.addToCompare(this.props.value,this.state.isChecked);	
  		}
      
	);
  	
  },
  resetState:function(){
  	this.setState({isChecked:false});
  }

});


module.exports = AddToCompare;