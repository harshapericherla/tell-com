const mongoose = require('mongoose');
const schema = mongoose.Schema;

const officeSchema = new schema({
    title:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    image_url:{
        type: String,
        required:true
    }
},{collection:"Office"})

mongoose.model('Office',officeSchema);