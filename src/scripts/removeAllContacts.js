import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log(' Contacts remove successfully');
    const contacts = await readContacts();
    const count = contacts.length;
    const message = `Контакти в масиві у файлі src/db/db.json видалені. Наразі їх кількість: ${count}`;
    return message;
  } catch (error) {
    console.error(' Failed to remove contacts:', error.message);
  }
};

removeAllContacts();
