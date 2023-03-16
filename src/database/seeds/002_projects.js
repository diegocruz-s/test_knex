/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
    // Deletes ALL existing entries
    await knex('projects').del()
      .then(() => {
        // Inserts seed entries
        return knex('projects').insert([
          { user_id: 1, title: 'Meu projeto' },
          { user_id: 2, title: 'Projeto' },
        ]);
      })
    
  };
  