import React from 'react';
import API from "../../utils/contactApi";
import "./ContactCard.css";
import ContactImage from '../../contact.png';
import PhoneImage from '../../phone.svg';
import { Link } from 'react-router-dom';

class ContactCard extends React.Component {

    constructor(props) {
        super(props);
        this.contactId = Number(props.match.params.id);
        this.state = {
            contact: {}
        }
    }


    componentDidMount() {
        API.getContact(this.contactId)
            .then(res => {
                this.setState({ contact: res.data });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="card text-center">
                <div className="card-header">
                    <Link to="/" className="previous round">&#8249;</Link>
                    <img alt="contact" className="contact-img" src={ContactImage}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{this.state.contact.name}</h5>
                    <p className="card-text"><img alt="phone" src={PhoneImage} /> {this.state.contact.phoneNumber}</p>
                </div>
            </div>
        );
    }
}

export default ContactCard;