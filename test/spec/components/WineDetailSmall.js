'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WineDetailSmall from 'components/WineDetailSmall.js';

describe('WineDetailSmall', () => {
    let WineDetailSmallComponent;

    beforeEach(() => {
        WineDetailSmallComponent = createComponent(WineDetailSmall);
    });

    it('should have its component name as default className', () => {
        expect(WineDetailSmallComponent._store.props.className).toBe('WineDetailSmall');
    });
});
