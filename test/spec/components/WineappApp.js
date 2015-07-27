'use strict';

describe('WineappApp', () => {
  let React = require('react/addons');
  let WineappApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    WineappApp = require('components/WineappApp.js');
    component = React.createElement(WineappApp);
  });

  it('should create a new instance of WineappApp', () => {
    expect(component).toBeDefined();
  });
});
