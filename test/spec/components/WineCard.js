'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WineCard from 'components/WineCard.js';

describe('WineCard', () => {
    let WineCardComponent;

    beforeEach(() => {
        WineCardComponent = createComponent(WineCard);
    });

    it('should have its component name as default className', () => {
        expect(WineCardComponent._store.props.className).toBe('WineCard');
    });
});
