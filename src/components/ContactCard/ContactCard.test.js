import ContactCard from "./ContactCard";
import React from "react";
import ReactDOM from 'react-dom';
import { mount, shallow } from "enzyme";
import ReactRouterEnzymeContext from 'react-router-enzyme-context';



// jest.mock('API', () => {
//     const Contact =
//     {
//         "id": 1,
//         "name": "Toto",
//         "phoneNumber": "+250966436661"
//     };
    
//     return {
//         getContacts: jest.fn(() => Promise.resolve(Contact)),
//     };
//   });

import API from "../../utils/contactApi";

describe('Contact card Component', () => {

    xtest('it should render the contact card component', () => {
        const Contact =
        {
            "id": 1,
            "name": "Toto",
            "phoneNumber": "+250966436661"
        };
        const paramObj = { match: { params: { id: 1 } } };
        const options = new ReactRouterEnzymeContext();
        const wrapper = mount(<ContactCard contacts={Contact} {...paramObj} />, options.get());

        const contactCard = wrapper.find('.card');
        expect(contactCard.exists()).toEqual(true);
    });

    xtest('fetching contact by id on component did mount', (done) => {
        const contact =
        {
            "id": 1,
            "name": "Toto",
            "phoneNumber": "+250966436661"
        };
        const paramObj = { match: { params: { id: 1 } } };
        const options = new ReactRouterEnzymeContext();

        const promise = Promise.resolve(contact);
        //const spy = jest.spyOn(API, 'getContact').mockImplementation(() => promise);
        API.getContact = jest.fn()
        .mockReturnValueOnce(promise);
        const app = mount(<ContactCard {...paramObj} contact={contact}/>, options.get());
        app.setState({contact: contact});
        console.log(app.state());
        // API.getContact().then((res) => {
        //     expect(app.state()).toHaveProperty('contact', contact);
        
        // })
       
    });
}); 