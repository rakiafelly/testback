const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const categorySchema = new Schema({
    nom: {
        type: String,
        required: [true, 'Name field is required'],
    },
   
    livres:[
        {
            type:Schema.Types.ObjectId,
            ref:"livre"
        }
    ]
})
const Category= mongoose.model('category',categorySchema);
module.exports=Category;
