const Contact = require('../models/contact.model');



exports.contact_index = function (req, res) {
    Contact.find({}, function (err, contacts) {
        if (err) return err;
        res.send(contacts);
    })
};


exports.contact_create = function (req, res) {
    let contact = new Contact(
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_number: req.body.phone_number,
            email: req.body.email
        }
    );

    contact.save(function (err) {
        if (err) {
            return err;
        }
        res.send('Contact Created successfully')
    })
};

exports.contact_details = function (req, res) {
    Contact.findById(req.params.id, function (err, contact) {
        if (err) return err;
        res.send(contact);
    })
};

exports.contact_update = function (req, res) {
    Contact.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err) {
        if (err) return err;
        res.send('Contact udpated.');
    });
};

exports.contact_delete = function (req, res) {
    Contact.findByIdAndRemove(req.params.id, function (err) {
        if (err) return err;
        res.send('Deleted successfully!');
    })
};