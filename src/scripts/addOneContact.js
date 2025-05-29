import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts(); // читаємо існуючі контакти
    const newContact = createFakeContact(); // створюємо 1 новий контакт

    const updatedContacts = [...contacts, newContact]; // додаємо його до масиву
    await writeContacts(updatedContacts); // записуємо назад

    console.log(' One contact successfully added.');
  } catch (error) {
    console.error(' Failed to add one contact:', error.message);
  }
};

addOneContact();
