/**
 * ProductsCard Component - Renders the product card
 */

var RatingSection = require('../stateless/RatingSection');
var FeatureSection = require('../stateless/FeatureSection');
var AddToCompare = require('../stateless/AddToCompare');

var ProductsCard = React.createClass({

  render: function() {
    var props = this.props;
    
    return (
      <div className="products clearfix">
        {
          props.data.map(function(elm,index){
            return <div className="product-wrapper" key={index}>
                      <div className="product-card">
                        <div className="product">
                          <div className="">{elm.itemTitle}</div>
                          <div className="img-wrapper"><img src={elm.itemImage} /></div>

                          <RatingSection rating={elm.rating} />
                          <hr className="custom-hr" />
                          
                          <div className="">Rs. {elm.price}</div>
                          <div className="">EMI from Rs. {elm.emiPrice}</div>
                          
                          <hr className="custom-hr" />
                          <FeatureSection features={elm.features} />
                          <hr className="custom-hr" />

                          <AddToCompare addToCompare={props.addToCompare} value={elm} compareData={props.compareData}/>

                        </div>
                      </div>
                  </div>

          })
        }
      </div>
    )
  }

});
module.exports = ProductsCard;