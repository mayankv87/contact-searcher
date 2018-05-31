import SearchContact from "./SearchContact";
import React from "react";
import ReactDOM from 'react-dom';
import { mount, shallow } from "enzyme";

describe('Search Contact Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SearchContact />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    test('it should render the input box in a header', () => {
        const wrapper = mount(<SearchContact/>);

        const header = wrapper.find('header');
        expect(header.exists()).toEqual(true);
    });

    test('it should trigger the callback on change', () => {
        const mockCallback = jest.fn();
        const wrapper = shallow(<SearchContact searchContact={mockCallback}/>);
        const input = wrapper.find('input');
        input.simulate('change', { target : { value: 'test'}})
        expect(mockCallback.mock.calls.length).toEqual(1);
    });
});