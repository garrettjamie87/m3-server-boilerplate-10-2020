const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('./../models/user.model');
const Convo = require('./../models/convo.model');
const session = require('express-session');
const { isLoggedIn } = require('../helpers/middlewares');

// POST => the user inputs info about themselves and sends to the DB
router.post('/homepage', isLoggedIn,  (req, res, next) => {
      const {
            sex,
            topics,
            level,
            language
            
      } = req.body;


      const {
            _id
      } = req.session.currentUser;
      User.findByIdAndUpdate(_id, {

                  sex,
                  topics,
                  level,
                  language

      }, {
                  new: true
            })
            .then((createdUser) => {
                  res
                        .status(201) //created
                        .json(createdUser);
            })
            .catch((err) => {
                  res
                        .status(500) // Internal Server Error
                        .json(err)
            })
})


// GET => to get 'all the buddies that are recommended'	
router.get('/matchpage', isLoggedIn, (req, res, next) => {

      User
            .find()
            .then((allTheMatches) => {
                  res.status(200).json(allTheMatches);
            })
            .catch(err => {
                  res.status(500) //Internal Sever error
                        .json(err);
            })
});


// GET => to get specific buddy from DB
router.get('/matchpage/:id', isLoggedIn,(req, res, next) => {
      const {
            id
      } = req.params;
      console.log(req.session.currentUser)

      if (!mongoose.Types.ObjectId.isValid(id)) {
            res
                  .status(400) //  Bad Request
                  .json({
                        message: 'Specified id is not valid'
                  })
            return;
      }

      User
            .findById(id)
            .then((foundUser) => {
                  res.status(200).json(foundUser); // OK
            })
            .catch((err) => {
                  res.status(500).json(err); // Internal Server Error
            })
});


//POST => to Save specific buddy
router.put('/buddy/:id/:userID',  (req, res, next) => {
     
      const {
            id, userID
      } = req.params;
      
      // console.log('HELLLOOOOO', req.session.currentUser)
      
      User.findByIdAndUpdate(

                 userID, {

                        $push: {
                              buddyId: id
                        }
                  }, {
                        new: true
                  }


            )     
            .then((updatedUser) => {
                  res
                        .status(201) //created
                        .json(updatedUser);
            })
            .catch((err) => {
                  res
                        .status(500) // Internal Server Error
                        .json(err)
            })
});



// GET => to get all buddies saved in profile
router.get('/mybuddypage/:id',isLoggedIn, (req, res, next) => {
      const {
            id
      } = req.params;
      console.log(req.session.currentUser)

      if (!mongoose.Types.ObjectId.isValid(id)) {
            res
                  .status(400) //  Bad Request
                  .json({
                        message: 'Specified id is not valid'
                  })
            return;
      }

      User
            .findById(id)
            .populate('buddyId')
            .then((foundUser) => {
                  res.status(200).json(foundUser); // OK
            })
            .catch((err) => {
                  res.status(500).json(err); // Internal Server Error
            })
});



//Delete => to delete specific buddy from profile but not permanently from DB
router.delete('/buddy/:buddyid/user/:userid', isLoggedIn, (req, res, next) => {

      const {
            buddyid, userid
      } = req.params;
console.log(buddyid, userid, 'jhsajhsjhsajhsajhsa')
      User.findByIdAndUpdate(

                  userid,  {
                        $pull: {
                              buddyId: buddyid
                        }
                  }, {
                        new: true
                  }


            )
            .then((id) => {
                  res
                        .status(201) //created
                        .json(id);
            })
            .catch((err) => {
                  res
                        .status(500) // Internal Server Error
                        .json(err)
            })
});


// GET => to view my profile
router.get('/user/:id', isLoggedIn, (req, res) => {

      const {
            id
      } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
            res
                  .status(400) //  Bad Request
                  .json({
                        message: 'Specified id is not valid'
                  })
            return;
      }

      User.findById(id)
            .then((foundUser) => {
                  res.status(200).json(foundUser); // OK
            })
            .catch(err => {
                  res.status(500).json(err); // Internal Server Error
            })
});



// PUT => to edit user profile
router.put('/user/edit', isLoggedIn, (req, res, next) => {
      const {
            _id
      } = req.params;
      const {
            sex,
            topics,
            level,
            language
      } = req.body;

      // if (!mongoose.Types.ObjectId.isValid(id)) {
      //       res.status(400).json({
      //             message: 'Specified id is not valid'
      //       });
      //       return;
      // }

      User.findByIdAndUpdate(req.session.currentUser._id, {
                  sex,
                  topics,
                  level,
                  language
            })
            .then(() => {
                  res.status(200).send();
            })
            .catch(err => {
                  res.status(500).json(err);
            })
});


// DELETE => to delete user profile 
router.delete('/user/delete/:mee', (req, res, next) => {
      const {
           mee 
      } = req.params;

      // if (!mongoose.Types.ObjectId.isValid(id)) {
      //       res.status(400).json({
      //             message: 'Specified id is not valid'
      //       });
      //       return;
      // }

      User.findByIdAndRemove(mee)
            .then(() => {
                  res
                        .status(202) //  Accepted
                        .send(`Document ${mee} was removed successfully.`);
            })
      
});

//GET => get the messages that exist in DB
router.get('/messages/:id', isLoggedIn, (req, res, next) => {
      const{id} = req.params;
     
      Convo
            .findById(id)
            .populate("messages")
            .then((oneMessage) => {
                  res.status(200).json(oneMessage);
            })
            .catch(err => {
                  res.status(500) //Internal Sever error
                        .json(err);
            })
});





router.post('/createconvo/:userOne/:userTwo', (req, res, next) => {
const{userOne, userTwo} = req.params;
let conversation = {}
      Convo.create({userOne: userOne, userTwo: userTwo})
            .then((createdConvo) => {
                  conversation = createdConvo
                  User.findByIdAndUpdate(userOne, {$push:{conversations:createdConvo._id}},{new:true})
                  .then ((updatedUser)=>{
                        User.findByIdAndUpdate(userTwo,{$push:{conversations:createdConvo._id}}, {new:true})
                        .then((updatedUsertwo)=>{
                              console.log(conversation, 'hahahahah')
                              res.status (201)
                              .json(conversation)

                        })
                        .catch(err => {
                              resx.status(500) //Internal Sever error
                                    .json(err);
                        }) 
                  })
                  .catch(err => {
                        res.status(500) //Internal Sever error
                              .json(err);
                  })
            })
            .catch(err => {
                  res.status(500) //Internal Sever error
                        .json(err);
            })
});


//POST => post messages to the DB
router.post('/messages/:receiverId/:convo/:senderId', (req, res, next) => {
      const { receiverId, convo, senderId } = req.params;

      const {message} = req.body;
      console.log(req.body, "Helllooooo evrrryyonnnneeee")

      const newMessage = {
            sender: senderId,
            receiver: receiverId,
            message: message,
          }

      Convo.findByIdAndUpdate(
                  convo, 
                  { $push: { messages: newMessage} },
                  { new: true }
            )
            .then((updatedConvo) => {
                  console.log(updatedConvo, '')
                  res
                        .status(201) //created
                        .json(updatedConvo);
            })
            .catch((err) => {
                  res
                        .status(500) // Internal Server Error
                        .json(err)
            })
})

module.exports = router;