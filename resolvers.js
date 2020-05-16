const mongoose = require('mongoose');
const Office = mongoose.model('Office');

const resolvers = {
    Query : {
        async allOffices(){
            return await Office.find();
        }
     }
}

module.exports = resolvers;