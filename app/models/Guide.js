var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//create guide Schema
var GuideSchema = new Schema({
    country: String,
    city: String,
    contact_number: String,
    type: String,
    email_address: String,
    isActivated: { type: Boolean, default: false },
    rating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
    created: { type: Date, default: Date.now },
    user: {
        id: String,
        name: String,
        age: Number,
        gender: String,
        profImage: String
    }
});
//end creating guide Schema
module.exports = mongoose.model('Guide', GuideSchema);
