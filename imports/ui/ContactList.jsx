import React from "react";

import ContactsCollection from "../api/ContactsCollection";
import { useTracker } from "meteor/react-meteor-data";

function ContactList() {
    const contacts = useTracker(() => {
        return ContactsCollection.find({}).fetch(); //Tracker
    });

    if (contacts.length < 1) {
        return <div>Loading</div>;
    }

    return (
        <>
            <h3>Contact List</h3>

            {contacts.map((contact) => {
                return (
                    <li key={contact.email}>
                        {contact.name} - {contact.email}
                    </li>
                );
            })}
        </>
    );
}

export default ContactList;
