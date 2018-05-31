import API from "./contactApi";
import React from "react";

jest.mock('axios', () => {
    const exampleArticles = [
      { title: 'test article', url: 'test url' }
    ];
    
    return {
      get: jest.fn(() => Promise.resolve(exampleArticles)),
    };
  });

const axios = require('axios');

describe('Contact API', () => {

    test('it should call the API getContacts method', () => {
        const api = 'http://localhost:3000'

        API.getContacts();
        expect(axios.get).toHaveBeenCalled(); 
        expect(axios.get).toHaveBeenCalledWith(`${api}/contacts`);
    });

    test('it should call the API getContact method', () => {
        const api = 'http://localhost:3000'

        API.getContact(1);
        expect(axios.get).toHaveBeenCalled(); 
        expect(axios.get).toHaveBeenCalledWith(`${api}/contacts/1`);
    });

});