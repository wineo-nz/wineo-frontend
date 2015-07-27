'use strict';

var WineApp = require('./WineApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
//jQuery = require('jquery');

var content = document.getElementById('content');

var Routes = (
  <Route handler={WineApp}>
    <Route name="/" handler={WineApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});

