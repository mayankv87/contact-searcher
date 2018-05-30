import React from "react";

const SearchContacts = (props) => {

    const changeCallback = (e) => {
        props.searchContact(e.target.value);
    }

    return (
        <header className="App-header">
            <input type="text" className="search" placeholder="Contacts Search" onChange={changeCallback} />
        </header>
    );
}

export default SearchContacts;