import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe("<App/>", () => {
  it("should render 1 initial layout with <App/>", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});

