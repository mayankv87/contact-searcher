import ContactList from "./ListContacts";
import React from "react";
import ReactDOM from 'react-dom';
import { mount, shallow } from "enzyme";
import ReactRouterEnzymeContext from 'react-router-enzyme-context';

const Contacts = [
    {
        "id": 1,
        "name": "Toto",
        "phoneNumber": "+250966436661"
    },
    {
        "id": 2,
        "name": "Vittorio De Sica",
        "phoneNumber": "+250966344466"
    }];

describe('List Contacts Component', () => {

    test('it should render the list contacts component', () => {
        const options = new ReactRouterEnzymeContext();
        const wrapper = mount(<ContactList contacts={Contacts}/>, options.get());

        const contactList = wrapper.find('.contact-list');
        expect(contactList.exists()).toEqual(true);
    });

    test('it should show the list of contacts as per the data passed', () => {
        const options = new ReactRouterEnzymeContext();
        const wrapper = mount(<ContactList contacts={Contacts}/>, options.get());

        const records = wrapper.find('li');
        expect(records.length).toEqual(2);
    });

    test('it should not show any contacts when data length is 0', () => {
        const options = new ReactRouterEnzymeContext();
        const wrapper = mount(<ContactList contacts={{}}/>, options.get());

        const records = wrapper.find('li');
        expect(records.length).toEqual(0);
        const noContact = wrapper.find('.no-contacts');
        expect(noContact.exists()).toEqual(true);
    });
}); 