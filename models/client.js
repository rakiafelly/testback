const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const clientSchema = new Schema({
    nom: {
        type: String,
        required: [true, 'name field is required'],
    },
    type: {
        type: String,
        required: [true, 'Type field is required'],
    },
   
})
const Client= mongoose.model('client',clientSchema);
module.exports=Client;
