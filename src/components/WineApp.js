'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var SearchBar = require('./SearchBar');
var WineCards = require('./WineCards');

// CSS
//require('normalize.css');
//require('foundation-sites/css/foundation.css');
require('../styles/normalize.css');
require('../styles/skeleton.css');
require('../styles/main.css');

//var imageURL = require('../images/yeoman.png');
//

var WINES = [
  {wineId: 1, name: 'Ara Single Estate Pinot Noir', year: 2012, prices: [{store: 'store-a', price: 17.99}, {store: 'store-b', price: 16.95}], review: {text: 'Fucking tastey as shit', rating: 4.5}, imageThumb: require('../images/4222_ara-single-estate-pinot-noir-2012.png')},
  {wineId: 1, name: 'Ara Single Estate Pinot Noir', year: 2012, prices: [{store: 'store-a', price: 17.99}, {store: 'store-b', price: 16.95}], review: {text: 'Fucking tastey as shit', rating: 4.5}, imageThumb: require('../images/4222_ara-single-estate-pinot-noir-2012.png')},
  {wineId: 1, name: 'Ara Single Estate Pinot Noir', year: 2012, prices: [{store: 'store-a', price: 17.99}, {store: 'store-b', price: 16.95}], review: {text: 'Fucking tastey as shit', rating: 4.5}, imageThumb: require('../images/4222_ara-single-estate-pinot-noir-2012.png')},
  {wineId: 1, name: 'Ara Single Estate Pinot Noir', year: 2012, prices: [{store: 'store-a', price: 17.99}, {store: 'store-b', price: 16.95}], review: {text: 'Fucking tastey as shit', rating: 4.5}, imageThumb: require('../images/4222_ara-single-estate-pinot-noir-2012.png')}
];

var WineApp = React.createClass({
  render: function() {
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          <div className="container">
            <SearchBar />
            <WineCards wines={WINES} />
          </div>
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = WineApp;
