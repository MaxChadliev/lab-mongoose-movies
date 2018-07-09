const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const dbName = 'celeb-app';

// mongoose.connect(`monogodb://localhost/$(dbName}`);


mongoose.connect(`mongodb://localhost/${dbName}`, {useMongoClient: true});


const celebrities = [
  {
  name : "Arnold Schwarzenegger",
  occupation: "Terminator",
  catchPhrase: "I'll be back",
  
  },

  {
    name: "Charlie Sheen",
    occupation: "Warlock",
    catchPhrase: "Winning, duh",

  },

  {
    name: "Flavor Flav",
    occupation: "Rapper",
    catchPhrase: "Yeah boyee!",
    
  },

  {
    name: "Kanye West",
    occupation: "God",
    catchPhrase: "Scoopity Poop",
    
  }
]

Celebrity.create(celebrities)
  .then((result)=>{
    console.log(`created ${result.length} celebrities`);
    mongoose.disconnect();
  })

  .catch((err)=>{
    console.log(err)
  })