import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();

    console.log(' Read contacts successfully');
    return contacts;
  } catch (error) {
    console.error(' Failed to read contacts:', error.message);
  }
};

console.log(await getAllContacts());
