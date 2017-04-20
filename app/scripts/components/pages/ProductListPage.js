/**
 * ProductListPage - Renders the ProductList Page
 */

var SearchBox = require('../stateful/SearchBox');
var Filters = require('../stateless/Filters');
var ProductsCard = require('../stateful/ProductsCard');
var ComparisonCard = require('../stateless/ComparisonCard');
var ajaxCall = require('../../utils/ajaxCall');

var callbacks = {
  popular:function(a,b){return b.rating - a.rating},
  low:function(a,b){return a.price - b.price},
  high:function(a,b){return b.price - a.price}
}

var ProductListPage = React.createClass({

  getInitialState: function() {

    return {
      products : [],
      filteredData: [],
      compareData:[]
    };
  },
  componentWillMount:function(){
    
    var ajaxData = {
      api:'/api/getproductsdata',
      successCB:this.successCB,
      failureCB:this.failureCB
    }
    ajaxCall.get(ajaxData);

  },
  render: function() {
   
    return (
      <div className="wrapper main-page">
       <SearchBox handleSearch={this.handleSearch}/>
       <Filters handleFilters={this.handleFilters}/>
       {
        this.state.compareData.length 
        ? <ComparisonCard len={this.state.compareData.length} handleCompare={this.handleCompare} resetCompare={this.resetCompare}/> 
        :
        null
       }
       <ProductsCard data={this.state.filteredData} addToCompare={this.addToCompare} compareData={this.state.compareData}/>
      </div>
    )
  },
  handleSearch:function(value){
    
    var searchText = value && value.toLowerCase().trim();
    var filteredData = this.state.products.filter(function(elm,index){
      
      var title = elm.itemTitle && elm.itemTitle.toLowerCase();
      if(title.indexOf(searchText) > -1){
        return elm;
      }

    });
    this.setState({filteredData:filteredData})
  },
  handleFilters:function(value){
  
    var filteredData=[];

    if(value === 'relevance'){
      filteredData = this.state.products;
    }
    else{
      var cb = callbacks[value];
      filteredData = JSON.parse(JSON.stringify(this.state.products));
      filteredData.sort(cb);
    }

    this.setState({
      filteredData: filteredData
    })  
    
  },
  addToCompare:function(elm,isChecked){
    
    var compareData = this.state.compareData;
    if(isChecked){
      compareData.push(elm);  
    }
    else{
      var id = elm.itemId;
      compareData = compareData.filter(function(elm,value){
        if(elm.itemId != id){
          return true;
        }
      });
    }
    
    this.setState({
      compareData: compareData
    })
  },
  handleCompare:function(){
    
    var filteredData = this.state.compareData;
    this.setState({
      filteredData: filteredData
    });

  },
  resetCompare:function(){

    var filteredData = this.state.products;
     this.setState({
      compareData: [],
      filteredData: filteredData
    });

  },
  successCB:function(res){
   
    this.setState({
      products:res.products,
      filteredData:res.products
    });

  },
  failureCB:function(res){
   
    alert('Please refresh the browser');
    console.log('res from error',res);

  }

});

module.exports = ProductListPage;