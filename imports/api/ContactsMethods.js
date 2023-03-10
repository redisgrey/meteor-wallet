import { Meteor } from "meteor/meteor";

import { check } from "meteor/check";

import ContactsCollection from "./ContactsCollection";

Meteor.methods({
    "contacts.insert"({ name, email, imageUrl }) {
        check(name, String);
        check(email, String);
        check(imageUrl, String);
        if (!name) {
            throw new Meteor.Error("Name is Required.");
        }

        return ContactsCollection.insert({
            name,
            email,
            imageUrl,
            createdAt: new Date(),
        });
    },

    "contact.remove"({ contactId }) {
        check(contactId, String);
        return ContactsCollection.remove(contactId);
    },

    "contact.archive"({ contactId }) {
        check(contactId, String);
        return ContactsCollection.update(
            { _id: contactId },
            { $set: { archived: true } }
        );
    },
});
