'use strict';

var React = require('react/addons');
var Reflux = require('Reflux');

//var Actions = require('actions/xxx')

require('styles/WineDetailSmall.sass');

var WineDetailSmall = React.createClass({
  mixins: [Reflux.ListenerMixin],
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentDidMount: function() {},
  shouldComponentUpdate: function() {},
  componentDidUpdate: function() {},
  componentWillUnmount: function() {},

  render: function () {
    var prices = [];
    this.props.wine.prices.forEach(function(price){
      prices.push(<li>{price.store} &ndash; {price.price}</li>);
    });

    return (
        <div className="WineDetailSmall row">
          <div className="four columns">
            <img src= {this.props.wine.imageThumb} />
            <p>rating {this.props.wine.review.rating} ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ </p>
          </div>
          <div className="eight columns">
            <h2>{this.props.wine.name} <small>{this.props.wine.year}</small></h2>
            <p>{this.props.wine.review.text}</p>
            <ul>
              {prices}
            </ul>
          </div>
        </div>
      );
  }
});

module.exports = WineDetailSmall;
