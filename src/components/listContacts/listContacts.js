import React, { Component } from 'react';
import { List, ListItem } from "../List";
import { Link } from 'react-router-dom';

class ContactList extends Component {

    getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 9)];
        }
        return color;
    }

    setRandomColor = () => {
        const dotStyle = {
            backgroundColor: this.getRandomColor(),
          };
          return dotStyle;
    }

    render() {
        return (
            <div className="contact-list">
                {this.props.contacts.length ? (
                    <List>
                        {this.props.contacts
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((contact, index) => (
                                <Link to={"/contacts/" + contact.id} key={contact.id}>
                                    <ListItem key={contact.id}>
                                        
                                            <span className="dot" style={this.setRandomColor()}>{contact.name.charAt(0)}</span>
                                               <span className="cnt-name">{contact.name}</span>
                                    </ListItem>
                                </Link>
                            ))}
                    </List>
                ) : (
                        <div className="no-contacts"><h6>No contacts</h6></div>
                    )}
            </div>
        );
    };
}

export default ContactList;