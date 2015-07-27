'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WineCards from 'components/WineCards.js';

describe('WineCards', () => {
    let WineCardsComponent;

    beforeEach(() => {
        WineCardsComponent = createComponent(WineCards);
    });

    it('should have its component name as default className', () => {
        expect(WineCardsComponent._store.props.className).toBe('WineCards');
    });
});
