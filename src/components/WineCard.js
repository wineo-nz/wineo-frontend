'use strict';

var React = require('react/addons');
var Reflux = require('Reflux');
var WineDetailSmall = require('./WineDetailSmall');
var WineDetailLarge = require('./WineDetailLarge');

//var Actions = require('actions/xxx')

require('styles/WineCard.sass');

var WineCard = React.createClass({
  mixins: [Reflux.ListenerMixin],
  getInitialState: function() {
    return {
      expanded: false
    };
  },
  /*
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentDidMount: function() {},
  shouldComponentUpdate: function() {},
  componentDidUpdate: function() {},
  componentWillUnmount: function() {},
  */
  toggleExpanded: function(){
    this.setState({expanded: !this.state.expanded});
  },
  render: function () {
    var detail;
    if(!this.state.expanded){
      detail = <WineDetailSmall wine={this.props.wine} />;
    } else {
      detail = <WineDetailLarge wine={this.props.wine} />;
    }

    return (
        <div className="WineCard" onClick={this.toggleExpanded}>
          {detail}
        </div>
      );
  }
});

module.exports = WineCard;
