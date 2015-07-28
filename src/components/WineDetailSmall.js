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
          <img className="winethumb" src={this.props.wine.imageThumb} />
          <div className="content">
            <strong>{this.props.wine.name} <small>{this.props.wine.year}</small></strong>
            <p>rating {this.props.wine.review.rating} ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ </p>
            <p>{this.props.wine.review.text}</p>
            <div>bottom bar</div>
          </div>
        </div>
      );
  }
});

module.exports = WineDetailSmall;
