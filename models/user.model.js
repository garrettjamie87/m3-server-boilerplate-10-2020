const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
      username: {
            type: String,
            unique: true
      },
      password: {
            type: String
      },
      profilePicture: {
            type: String, default: 'https://i.imgur.com/skdSPzl.png'
      },
      level: {
            type: String,
            enum: ["Elementary", "Intermediate", "Advanced"]
      },
      sex: {
            type: String,
            enum: ["I'm a male man", "I'm a lady woman"]
      },
      
      language: {
                  type: String,
                  enum: ["Spanish looking for English", "English looking for Spanish"]
            },
      
      topics: {
                  type: String,
                  enum: ["The Arts", "Sports", "Politics" ]

            },
            
      buddyId: [{
                  type: Schema.Types.ObjectId,
                  ref: 'User'
            }],

      
      conversations: [{
                  type: Schema.Types.ObjectId,
                  ref: 'Convo'
            }]



});





const User = mongoose.model('User', userSchema);

module.exports = User;