import React from 'react';
import ToDos from './ToDos.js';
import {shallow} from 'enzyme'

test('render ToDos component', () => {
    const wrapper = shallow(
        <ToDos/>
    );
    expect(wrapper).toMatchSnapshot();
});
