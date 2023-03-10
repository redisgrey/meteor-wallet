import React, { useState, memo } from "react";

import ContactsCollection from "../api/ContactsCollection";

import { useSubscribe, useFind } from "meteor/react-meteor-data";

import { ErrorAlerts } from "./components/ErrorAlerts";

import { SuccessAlerts } from "./components/SuccessAlerts";

function ContactList() {
    const [error, setError] = useState("");

    const [success, setSuccess] = useState("");

    const isLoading = useSubscribe("contacts");

    const contacts = useFind(() => {
        return ContactsCollection.find(
            { archived: { $ne: true } },
            { sort: { createdAt: -1 } }
        );
    });

    if (isLoading()) {
        return (
            <div className="flex flex-col mt-5 w-[50%] mx-auto">
                <h3 className="text-xl mb-2 text-gray-600">Loading...</h3>
            </div>
        );
    }

    const showError = ({ message }) => {
        setError(message);
        setTimeout(() => {
            setError("");
        }, 5000);
    };

    const showSuccess = ({ message }) => {
        setSuccess(message);
        setTimeout(() => {
            setSuccess("");
        }, 5000);
    };

    const archiveContact = (event, _id) => {
        event.preventDefault();
        Meteor.call("contact.archive", { contactId: _id }, (errorResponse) => {
            if (errorResponse) {
                showError({ message: errorResponse.error });
            } else {
                showSuccess({ message: "Contact Successfully Archived." });
            }
        });
    };

    const ContactItem = memo(({ contact }) => {
        return (
            <div className="flex flex-col space-x-3 w-full mb-1 border-t-[1px] border-b-[1px] border-gray-200 py-3">
                <li className="flex justify-between text-left text-sm">
                    <div className="flex">
                        <span>
                            <img
                                className="rounded-full w-10 h-10 mx-2"
                                src={contact.imageUrl}
                                alt=""
                            />
                        </span>
                        <div className="flex flex-col">
                            <span className="text-black-400 font-bold">
                                {contact.name}
                            </span>
                            <span className="text-gray-700">
                                {contact.email}
                            </span>
                        </div>
                    </div>

                    <div>
                        <a
                            href="#"
                            onClick={(event) =>
                                archiveContact(event, contact._id)
                            }
                            className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                        >
                            Archive
                        </a>
                    </div>
                </li>
            </div>
        );
    });

    return (
        <>
            <div className="flex flex-col mt-5 w-[50%] mx-auto">
                {error && <ErrorAlerts message={error} />}

                {success && <SuccessAlerts message={success} />}

                <h3 className="text-xl mb-2 text-gray-600">Contacts List</h3>

                <ul>
                    {contacts.map((contact) => {
                        return (
                            <ContactItem key={contact._id} contact={contact} />
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default ContactList;
