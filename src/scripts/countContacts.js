import { readContacts } from '../utils/readContacts.js';
export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const count = contacts.length;

    console.log(' Count successfully');
    return `Кількість контактів в масиві у файлі src/db/db.json - ${count}`;
  } catch (error) {
    console.error(' Failed to count contacts:', error.message);
  }
};

console.log(await countContacts());
