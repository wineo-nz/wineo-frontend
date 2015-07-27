'use strict';

var React = require('react/addons');
var Reflux = require('Reflux');

//var Actions = require('actions/xxx')

require('styles/SearchBar.sass');

var SearchBar = React.createClass({
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
    return (
        <div className="SearchBar">
          <form>
            <input type="search" placeholder="Search"></input>
          </form>
        </div>
      );
  }
});

module.exports = SearchBar;
