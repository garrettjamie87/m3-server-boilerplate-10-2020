const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const convoSchema= new Schema ({
    
      userOne: [{type: Schema.Types.ObjectId, ref: 'User'}],

      userTwo: [{type: Schema.Types.ObjectId, ref: 'User'}],
     
      messages: [
        {
          sender: {type: Schema.Types.ObjectId, ref: 'User'},
          receiver:{type: Schema.Types.ObjectId, ref: 'User'},
          message: 'String',
          timestamp: 'Date'
        }
      ]
    })
    
    

    


const Convo = mongoose.model('Convo', convoSchema);

module.exports = Convo;