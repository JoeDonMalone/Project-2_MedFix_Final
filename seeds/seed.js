// const sequelize = require('../config/connection');
// const userData  = require("./user");
// const medsData  = require("./meds");


// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   await userData();
//   await medsData()

// };

// module.exports = seedDatabase

const sequelize = require('../config/connection');
const userData  = require("./user");
const medsData  = require("./meds");


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await userData();
  await medsData()

  process.exit(0);
};

seedDatabase;
module.exports = seedDatabase