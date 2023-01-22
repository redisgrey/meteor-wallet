import React, { useState } from "react";

import { Meteor } from "meteor/meteor";

import { ErrorAlerts } from "./components/ErrorAlerts";

import { SuccessAlerts } from "./components/SuccessAlerts";

function ContactForm() {
    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [imageUrl, setImageUrl] = useState("");

    const [error, setError] = useState("");

    const [success, setSuccess] = useState("");

    const saveContact = () => {
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

        Meteor.call(
            "contacts.insert",
            { name, email, imageUrl },
            (errorResponse) => {
                if (errorResponse) {
                    showError({ message: errorResponse.error });
                } else {
                    setName("");

                    setEmail("");

                    setImageUrl("");

                    showSuccess({ message: "Contact Saved." });
                }
            }
        );
    };

    return (
        <>
            <form className="mt-10 mx-auto w-[50%]">
                {error && <ErrorAlerts message={error} />}

                {success && <SuccessAlerts message={success} />}

                <div className="flex flex-col h-10 w-full items-center justify-center space-x-5 text-center mb-3 md:flex-row md:text-left">
                    <div className="block space-y-1 w-[200px]">
                        <label
                            htmlFor="name"
                            className="block text-md font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div className="w-[200px] block space-y-1 ">
                        <label
                            htmlFor="email"
                            className="block text-md font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div className="w-[200px] block space-y-1 ">
                        <label
                            htmlFor="imageUrl"
                            className="block text-md font-medium text-gray-700"
                        >
                            Image URL
                        </label>
                        <input
                            id="imageUrl"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            type="text"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>

                <div className="px-2 py-3 text-right">
                    <button
                        type="button"
                        onClick={saveContact}
                        className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                    >
                        Save Contact
                    </button>
                </div>
            </form>
        </>
    );
}

export default ContactForm;
