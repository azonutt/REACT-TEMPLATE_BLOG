const router = require('express').Router();

const {
    register,
    login,
    home,
    changePassword, calendar
} = require('../controllers/userControllers')
// u will need to authenticate your '/main'
const { ensureAuthenticated } = require('../../ensure')

// router.route('/login').post()
router.route('/register').post(register)
router.route('/login').post(login)
router.route('/change').post(changePassword, login)
router.route('/').get(ensureAuthenticated, home)
// router.route('/delete').post(deleteUser)
router.route('/calendar').post(calendar)

module.exports = router;