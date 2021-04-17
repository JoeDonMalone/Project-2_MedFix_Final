// const { Meds } = require("../models")

// const medsData = [
//     {
//         name: "drug1",
//         dosage: "200mg",
//         regimen: "take twice daily with food",
//         length: "14",
//         side_effects: "Drowsiness",
//         refill: "false",
//         remind_days: '146',
//         remind_time: '8:50',
//         user_id: "1"
//     }
// ]

// const seedMeds = () => Meds.bulkCreate(medsData)

// module.exports = seedMeds;

const { Meds } = require("../models")

const medsData = [
    {
    name: "drug1",
    dosage: "200mg",
    regimen: "take twice daily with food",
    length: "14",
    side_effects: "Drowsiness",
    refill: "false",
    user_id: "1"
    },
    {
    name: "drug2",
    dosage: "200mg",
    regimen: "take twice daily with food",
    length: "15",
    side_effects: "Drowsiness",
    refill: "false",
    user_id: "1"
    },
    {
    name: "drug3",
    dosage: "200mg",
    regimen: "take twice daily with food",
    length: "16",
    side_effects: "Drowsiness",
    refill: "false",
    user_id: "1"
    }
]

const seedMeds = () => Meds.bulkCreate(medsData)

module.exports = seedMeds;






