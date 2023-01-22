import React from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import "../../client/main.css";
import Header from "./Header";
import Wallet from "./Wallet";

export const App = () => (
    <>
        <Header />

        <Wallet />

        <ContactForm />

        <ContactList />
    </>
);
