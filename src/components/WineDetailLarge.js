'use strict';

var React = require('react/addons');
var Reflux = require('Reflux');

//var Actions = require('actions/xxx')

require('styles/WineDetailLarge.sass');

var WINE = {wineId: 1, name: 'Hawkhurst Estate Malbec', year: 2009, image: require('../images/winebottlesample.jpg'), review: {rating: 5, text: 'Some pretty tastey shit most defs recommend.'}};

var WineDetailLarge = React.createClass({
  mixins: [Reflux.ListenerMixin],
  getInitialState: function() {
    return {
      wineId: 1,
      name: '',
      year: null,
      image: '',
      review: {
        rating: null,
        text: ''
      }
    };
  },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentDidMount: function() {
    // make ajax request for wine
    // ajax: this.props.wine.wineId
    if(this.isMounted()) {
      this.setState(WINE);
    }
  },
  /*
  shouldComponentUpdate: function() {},
  componentDidUpdate: function() {},
  componentWillUnmount: function() {},
  */

  render: function () {
    return (
        <div className="WineDetailLarge row">
          <div><img src={this.state.image} /></div>
          <div>
            <h2>{this.state.name} <small>{this.state.year}</small></h2>
            <p>{this.state.review.text}</p>
          </div>
        </div>
      );
  }
});

module.exports = WineDetailLarge;
