'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import SearchBar from 'components/SearchBar.js';

describe('SearchBar', () => {
    let SearchBarComponent;

    beforeEach(() => {
        SearchBarComponent = createComponent(SearchBar);
    });

    it('should have its component name as default className', () => {
        expect(SearchBarComponent._store.props.className).toBe('SearchBar');
    });
});
