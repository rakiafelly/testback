const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const livreSchema = new Schema({
    titre: {
        type: String,
        required: [true, 'Title field is required'],
    },
    description: {
        type: String,
         required: [true, 'Description is required'],
    },
    auteur: {
        type: String,
        required: [true, 'Author field is required'],
    },
    contenu: {
        type: String,
        required: [false, 'Contain field is not required'],
    },
 
})
const Livre= mongoose.model('livre',livreSchema);
module.exports=Livre;
