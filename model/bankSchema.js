const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const bankBranch = mongoose.Schema({
    // _id: ObjectId,
    ifsc: String,
    bank_id: Number,
    branch: String,
    address: String,
    city: String,
    district: String,
    state: String,
    bank_name: String
});

module.exports = mongoose.model('bankbranch', bankBranch);