import React from 'react';
import ContactsSearchApp from './ContactsSearchApp';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import { mount, shallow } from "enzyme";
import API from "./utils/contactApi";

describe('Contact Search App Component', () => {
  xtest('it should render the  contact search app component', () => {
    const options = new ReactRouterEnzymeContext();
    const wrapper = shallow(<ContactsSearchApp />, options.get());

    const contactList = wrapper.find('.App');
    expect(contactList.exists()).toEqual(true);
  });

  xtest('it should get all contacts on component did mount', () => {
    const options = new ReactRouterEnzymeContext();
    const spy = jest.spyOn(API, 'getContacts');
    const wrapper = shallow(<ContactsSearchApp />, options.get());

    expect(spy).toHaveBeenCalled();
  });

});

