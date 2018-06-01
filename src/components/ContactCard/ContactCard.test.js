import ContactCard from "./ContactCard";
import React from "react";
import ReactDOM from 'react-dom';
import { mount, shallow } from "enzyme";
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import API from '../../utils/contactApi';
jest.mock('../../utils/contactApi');

const contact =
        {
            "id": 1,
            "name": "Toto",
            "phoneNumber": "+250966436661"
        };
API.getContact = () => Promise.resolve({ data: contact } );

describe('Contact card Component', () => {

    test('it should render the contact card component', () => {
        const Contact =
        {
            "id": 1,
            "name": "Toto",
            "phoneNumber": "+250966436661"
        };
        const paramObj = { match: { params: { id: 1 } } };
        const options = new ReactRouterEnzymeContext();
        const wrapper = shallow(<ContactCard contacts={Contact} {...paramObj} />, options.get());

        const contactCard = wrapper.find('.card');
        expect(contactCard.exists()).toEqual(true);
    });

    test('fetching contact by id on component did mount', (done) => {
        const options = new ReactRouterEnzymeContext();
        const paramObj = { match: { params: { id: 1 } } };
        const wrapper = shallow(<ContactCard contacts={contact} {...paramObj} />, options.get());
        API.getContact().then((res) => {
            expect(wrapper.state()).toHaveProperty('contact', {            
            "id": 1,
            "name": "Toto",
            "phoneNumber": "+250966436661"});
            done();
        })
       
       
    });
}); 