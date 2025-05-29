import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
  try {
    const constants = await readContacts();

    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );

    const updatedContacts = [...constants, ...newContacts];

    await writeContacts(updatedContacts);

    console.log(
      `Successfully added ${number} new contacts. Total: ${updatedContacts.length}`,
    );
  } catch (error) {
    console.error('Failed to generate contacts:', error.message);
  }
};

generateContacts(5);
