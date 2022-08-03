"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert(
      "Spots",
      [
        {
          ownerId: 2,
          address: "123 State St",
          city: "Los Angeles",
          state: "California",
          country: "USA",
          lat: 50.7367,
          lng: -115.99632,
          name: "My House",
          description:
            "Pool heat is included at no additional charge from October through May.",
          price: 468.98,
          previewImage:
            "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          ownerId: 2,
          address: "123 Ash St",
          city: "Burbank",
          state: "California",
          country: "USA",
          lat: 35,
          lng: 120,
          name: "Space House",
          description:
            "When you walk through the gate from the driveway or street, you're immediately welcomed into a very spacious courtyard.",
          price: 1355,
          previewImage:
            "https://images.unsplash.com/photo-1608045742930-48cee6018255?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          ownerId: 2,
          address: "123123 Beet St",
          city: "Los Angeles",
          state: "California",
          country: "USA",
          lat: -45,
          lng: -110,
          name: "Cali Love",
          description:
            "You'll want to spend all your time poolside at Shelby Sands!",
          price: 350,
          previewImage:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=300&q=60",
        },
        {
          ownerId: 2,
          address: "8198 Uphill Rd",
          city: "Joshua Tree",
          state: "CA",
          country: "United States of America",
          lat: 34.10511,
          lng: -116.28575,
          name: "Invisible House Joshua Tree - Skyscraper with Pool",
          description:
            "Quite simply, Invisible House is the most spectacular house in Joshua Tree.",
          price: 3294.99,
          previewImage:
            "https://media.istockphoto.com/photos/interior-and-exterior-design-of-pool-villa-with-swimming-pool-picture-id918342482?k=20&m=918342482&s=170667a&w=0&h=59LgUC91MXY2mI6gLzUlZ2LQVFFa9PFhhPcfxLd8Sqk=",
        },
        {
          ownerId: 2,
          address: "123123 Colder St",
          city: "Burbank",
          state: "California",
          country: "USA",
          lat: -55,
          lng: -110,
          name: "South Palm",
          description:
            "For the adventurous types, also within walking distance are some popular hiking trail",
          price: 1355,
          previewImage:
            "https://images.unsplash.com/photo-1567428485548-c499e4931c10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Njh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          ownerId: 2,
          address: "123123 Deermoore St",
          city: "San Francisco",
          state: "California",
          country: "USA",
          lat: -35.123,
          lng: -110.123,
          name: "Our House",
          description:
            "This home is very close to the shuttle stops in Palm Springs.",
          price: 66,
          previewImage:
            "https://images.unsplash.com/photo-1627865485227-fc7c2f551afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGhvbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Spots", {}, {});
  },
};
