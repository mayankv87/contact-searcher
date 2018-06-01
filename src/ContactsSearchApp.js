import React, { Component } from 'react';
import ContactList from './components/ContactList/ContactList';
import API from "./utils/contactApi";
import SearchContacts from "./components/SearchContacts/SearchContact";
import ContactCard from "./components/ContactCard/ContactCard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './ContactSearchApp.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      contacts: []
    };
    this.filterContacts = this.filterContacts.bind(this);
  }

  componentDidMount() {
    this.getContacts();
  }

  getContacts = () => {
    API.getContacts()
      .then(res => {
        this.setState({ contacts: res.data });
        this.contacts = res.data;
      })
      .catch(err => console.log(err));
  }

  filterContacts = (searchTxt) => {
    var displayedContacts = this.contacts.filter ((el) => {
      var searchValue = el.name.toLowerCase();
      return searchValue.indexOf(searchTxt.toLowerCase()) !== -1;
    });

    this.setState({
      contacts: displayedContacts
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
        <div>
          <Route
            exact path="/"
            render={(routeProps) => (
              <div>
                <SearchContacts searchContact={this.filterContacts}/>
                <ContactList contacts={this.state.contacts}/>
              </div>
            )} />
          <Route
            path="/contacts/:id" component={ContactCard}/>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
