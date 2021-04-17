const router = require('express').Router();
const { Meds } = require('../../models');

router.post('/add', async (req, res) => {
  try {
    req.body.user_id = req.session.user_id
    let medData = await Meds.create(req.body)
    res.status(200).json(medData)
  } catch (err) {
    res.status(400).json(err);
  }
})

router.post('/delete', async (req, res) => {
  let med_id =  req.body.med_id.split('-')[1]
  try {
    await Meds.destroy({
      where: {
        med_id: med_id
      }
    })
    
    res.status(200).json('ok')
  } catch (err) {
    res.status(400).json(err);
  }
})

// router.get('/userprofile', async (req, res) => {
//   res.end('this is the medication api page. post here to add a medication.')
// })

module.exports = router