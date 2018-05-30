import React, { Component } from 'react';
import { List, ListItem } from "../List";

class ContactList extends Component {

    render() {
        return (
            <div className="contact-list">
                {this.props.contacts.length ? (
                    <List>
                        {this.props.contacts
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((contact, index) => (
                                <ListItem key={contact.id}>
                                    <span className="dot">{contact.name.charAt(0)}</span>
                                    <strong>
                                        {contact.name}
                                    </strong>
                                </ListItem>
                            ))}
                    </List>
                ) : (
                        <div className="no-contacts"><h4>No contacts</h4></div>
                    )}
            </div>
        );
    };
}

export default ContactList;