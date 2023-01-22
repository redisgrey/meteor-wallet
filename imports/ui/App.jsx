import React from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import "../../client/main.css";
import Header from "./Header";

export const App = () => (
    <>
        <Header />

        <ContactForm />

        <ContactList />
    </>
);
