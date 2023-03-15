/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'Diego Cruz' },
        { username: 'Mayk Brito' },
      ]);
    })
  
};
