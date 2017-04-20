/**
 * RatingSection Component
 * @Props
 * @param {number} rating - Rating of the product
 */

var React = require('react');

var RatingSection = React.createClass({
  getDefaultProps: function() {
    return {
      rating: 1
    };
  },
  render: function() {

    var Rating = this.computeRating();

    return (
      <div className="rating-box mb5">
        <div className="rating">
          {Rating} ({this.props.rating} ratings) 
          </div>  
      </div>
    );

  },
  /**
   * Computes the Rating HTML 
   */
  computeRating:function(){
    
    var rating = [];
    var value = this.props.rating;
    var classVar = '';

    for(var i =1; i<=5; i++){
      if( (value - 1) >= 0 ){
        classVar = 'active';
      }
      else if( (value + .5) == 1){
        classVar = 'half-active';
      }
      else{
       classVar = ''; 
      }
      value--;
      rating.push(<span className={classVar} key={i}>☆</span>);
    }
    return rating;
  }

});


module.exports = RatingSection;

