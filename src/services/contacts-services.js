import Contact from '../db/contact.js';

export const getContacts = () => Contact.find();

export const getContactById = (id) => Contact.findById(id);
