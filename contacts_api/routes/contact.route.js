const express = require('express');
const router = express.Router();

const contact_controller = require('../controllers/contact.controller');

router.get('/', contact_controller.contact_index)
router.post('/create', contact_controller.contact_create);
router.get('/:id', contact_controller.contact_details);
router.put('/:id/update', contact_controller.contact_update);
router.delete('/:id/delete', contact_controller.contact_delete);

module.exports = router;