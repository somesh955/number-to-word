import React from 'react';
import { mount } from 'enzyme';
import NumberToWorld from './NumberToWord';

const findByTestAttr = (component, attr) => component.find(`[data-test='${attr}']`)
let component;

describe("<NumberToWorld/>", () => {

    beforeEach(()=>{
        component = mount(<NumberToWorld />);
    });

    it("should render 1 initial layout with <App/>", () => {
        expect(findByTestAttr(component, 'test-wrapper').length).toBe(3);
        expect(component.exists()).toBe(true);
    });

    it("should have form inside", () => {
        expect(findByTestAttr(component, 'test-form').length).toBe(1);
        expect(component.exists()).toBe(true);
    });

    it("should has input", () => {
        const wrapper = findByTestAttr(component, 'test-input-number');
        expect(wrapper.exists()).toBe(true);
    });

    it("should has button", () => {
        const wrapper = findByTestAttr(component, 'test-convert-button');
        expect(wrapper.exists()).toBe(true);
    });
});

