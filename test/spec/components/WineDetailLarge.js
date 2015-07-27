'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WineDetailLarge from 'components/WineDetailLarge.js';

describe('WineDetailLarge', () => {
    let WineDetailLargeComponent;

    beforeEach(() => {
        WineDetailLargeComponent = createComponent(WineDetailLarge);
    });

    it('should have its component name as default className', () => {
        expect(WineDetailLargeComponent._store.props.className).toBe('WineDetailLarge');
    });
});
