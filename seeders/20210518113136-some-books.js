'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "books",
      [
        {
          author: "Bathilda Bagshot",
          title: "A History of Magic",
          description: "A History of Magic was a book written by Bathilda Bagshot, one of the most eminent magical historians to date. It covered the history of the wizarding world up to the end of the 19th century. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: "Newt Scamander",
          title: "Fantastic Beasts and Where to Find Them",
          description: "a book written by Newt Scamander detailing the field of Magizoology, the study of magical creatures.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: "Edwardus Lima",
          title: "The Monster Book of Monsters ",
          description: "The book is quite informative, but one usually finds it difficult to access the information within due to the book's unfortunate tendency to try and bite off the reader's fingers. The only way to subdue the book is to stroke its spine, upon which the book opens placidly.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: "Arsenius Jigger",
          title: "Magical Drafts and Potions",
          description: "a book written by Arsenius Jigger containing information on how to brew a number of potions.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: "Cassandra Vablatsky",
          title: "Unfogging the Future",
          description: "a book on divination, written by the celebrated Seer Cassandra Vablatsky and published by Rumiharts Books.[1] From at least 1993 onward, this book is a required textbook for students taking Divination Classes at Hogwarts School of Witchcraft and Wizardry.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: "Wilhelm Wigworthy",
          title: "Home Life and Social Habits of British Muggles",
          description: "the book contains a wide range of information on British Muggles, including an explanation of electricity.",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("books", null, {});
  }
};
