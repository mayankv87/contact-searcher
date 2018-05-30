import axios from "axios";

const api = 'http://localhost:3000'

export default {
  // Gets all contacts
  getContacts: function() {
    return axios.get(`${api}/contacts`);
  },
  // Gets the Contact with the given id
  getContact: function(id) {
    return axios.get(`${api}/contacts/` + id);
  }
};