import React from 'react';
import ContactsSearchApp from './ContactsSearchApp';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import { mount, shallow } from "enzyme";
import API from "./utils/contactApi";

jest.mock('./utils/contactApi');

const contacts = [
  {
    "id": 1,
    "name": "Toto",
    "phoneNumber": "+250966436661"
  },
  {
    "id": 2,
    "name": "john",
    "phoneNumber": "+250966436661"
  }];
API.getContacts = () => Promise.resolve({ data: contacts });


describe('Contact Search App Component', () => {
  test('it should render the  contact search app component', () => {
    const options = new ReactRouterEnzymeContext();
    const wrapper = shallow(<ContactsSearchApp />, options.get());

    const contactList = wrapper.find('.App');
    expect(contactList.exists()).toEqual(true);
  });

  test('it should get all contacts on component did mount', (done) => {
    const options = new ReactRouterEnzymeContext();
    const wrapper = shallow(<ContactsSearchApp />, options.get());
    API.getContacts().then(() => {
      expect(wrapper.state()).toHaveProperty('contacts', [
        {
          "id": 1,
          "name": "Toto",
          "phoneNumber": "+250966436661"
        },
        {
          "id": 2,
          "name": "john",
          "phoneNumber": "+250966436661"
        }]);
        done();
    });
  });

});

