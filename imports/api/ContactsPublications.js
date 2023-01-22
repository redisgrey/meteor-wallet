import ContactsCollection from "./ContactsCollection";

import { Meteor } from "meteor/meteor";

Meteor.publish("allContacts", function publishAllContacts() {
    return ContactsCollection.find({});
});

Meteor.publish("contacts", function publishContacts() {
    return ContactsCollection.find({ archived: { $ne: true } });
});
