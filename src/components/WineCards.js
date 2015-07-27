'use strict';

var React = require('react/addons');
var Reflux = require('Reflux');
var WineCard = require('./WineCard');

//var Actions = require('actions/xxx')

require('styles/WineCards.sass');

var WineCards = React.createClass({
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
    var wines = [];
    this.props.wines.forEach(function(wine){
      wines.push(<WineCard wine={wine} />);
    });
    return (
        <div className="WineCards">
          {wines}
        </div>
      );
  }
});

module.exports = WineCards;
