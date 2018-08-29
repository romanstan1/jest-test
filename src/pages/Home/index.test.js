import React from 'react';
import Home from './index.js';
import {shallow} from 'enzyme'

test('render main home component wrapper', () => {
    const wrapper = shallow(
        <Home/>
    );
    expect(wrapper).toMatchSnapshot();
});
