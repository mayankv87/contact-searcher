import React from "react";
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

class SearchContacts extends React.Component {

    constructor(props) {
        super(props);
    }

    clearTxt = (e) => {
        const searchBar = findDOMNode(this.refs.searchBar);
        searchBar.value = '';
        this.props.searchContact(searchBar.value);
    }

    changeCallback = (e) => {
        this.props.searchContact(e.target.value);
        this.searchValue = e.target.value;
    }

    render() {
        return (
           
            <header className="App-header">
                <input type="text" ref="searchBar" className="search" placeholder="Contacts Search" onChange={this.changeCallback} />
                <span className={this.searchValue ? 'clearTxt' :  'd-none'} onClick={this.clearTxt}>X</span>
            </header>
        );
    }
}

export default SearchContacts;