'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Winetile from 'components/Winetile.js';

describe('Winetile', () => {
    let WinetileComponent;

    beforeEach(() => {
        WinetileComponent = createComponent(Winetile);
    });

    it('should have its component name as default className', () => {
        expect(WinetileComponent._store.props.className).toBe('Winetile');
    });
});
