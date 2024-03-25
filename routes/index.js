
var express = require('express');
var router = express.Router();
var textToSpeech = require('../helpers/tts');

var openai_var = require('openai')

const openai = new openai_var

var flag = true;

/* GET home page. */
router.post('/talk', async function(req, res, next) {
  user_text = req.body.text
  system_msg = { role: "system", content: "You are a helpful assistant named Arwin who answers in 50 words" }
  user_msg = {role:"user",content:user_text}

  console.log(user_msg)
  
  
    const completion = await openai.chat.completions.create({
      messages: [system_msg,user_msg],
      model: "gpt-3.5-turbo",
    });


  out = completion.choices[0].message.content

  console.log(out)
  textToSpeech(out, req.body.voice)
  .then(result => {
    res.json(result);    
  })
  .catch(err => {
    res.json({});
  });


});

module.exports = router;
