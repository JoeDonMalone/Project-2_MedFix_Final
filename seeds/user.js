const { User } = require("../models");

const userData = [

    {        
        username: "JoeDonMalone",
        email: "joe.d.malone@gmail.com",
        password: "password",
        first_name: "Joe",
        last_name: "Malone",
        phone: "830-220-0942",
        address: "472 Bold Sundown, TX"
    }
]

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  })
module.exports = seedUser;


