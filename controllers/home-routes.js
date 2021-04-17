const router = require('express').Router();
const { Meds, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        res.render('landing')
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/logout', async (req, res) => {
    try {
        res.render('landing')
    } catch (err) {
        res.status(500).json(err);
    }
})

// router.get('/landing', async(req, res) => {

// })

router.get('/userprofile', withAuth, async (req, res) => {
    try {
        // // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, { 
            where: {
                 user_id: req.params.id
                },
          attributes: { exclude: ['password'] }
        })
        const user = userData.get({ plain: true });

        // Get all Meds and JOIN with user data
        const medsData = await Meds.findAll({ 
            where: { 
                user_id: user.user_id
            }
        });
        const meds = medsData.map((meds) => meds.get({ plain: true }));

        res.render('userprofile', {user:user, meds:meds,  logged_in: true})
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;