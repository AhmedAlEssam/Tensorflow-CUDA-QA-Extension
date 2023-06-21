

const express = require("express");
const { performance } = require('perf_hooks');
// import * as tf from '@tensorflow/tfjs-node-gpu'
var tf = require('@tensorflow/tfjs-node-gpu');
// var tf = require('@tensorflow/tfjs-node');
var qna = require('@tensorflow-models/qna');
const app = express();
app.use(express.json())
app.use(express.static('public'));
const cors = require("cors");
app.use(cors());
const port = 3000;
var qnamodel;
var state = false;
const startTime = performance.now();

app.post("/", async (req, res) => {
  const question = req.body.question;
  const passage = req.body.passage;
  console.log('question is:' + question)
  let result = await search(question, passage);
  console.log('answers:')
  console.log(result)
  if (!result)
    res.json('not loaded yet');
  else
    res.json(result[0]);
});


const search = async (question, passage) => {
  try {
    if (state == true) {
      const startime = performance.now();
      var answer = await qnamodel.findAnswers(question, passage)
      const endime = performance.now();
      const executionime = endime - startime;
      console.log(`The time elapsed to find answer: ${executionime} milliseconds`);
      return answer
    }
    else {
      return 0
    }
  } catch (e) {
    console.log(e)
    // setTimeout(() => {
    //   search()
    // }, 1000);
  }
}
const loader = async () => {

  try {
    var msg = 'not loaded yet';
    qnamodel = await qna.load({ modelUrl: 'http://localhost:3000/models/qna/qna-model.json' })
    msg = 'Model loaded successfully';
    state = true;
    console.log(msg)
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    console.log(`The time elapsed during loading the Qna-Model: ${executionTime} milliseconds`);
  } catch (e) {
    console.log(e)
    // loader()
  }
}

const launch = async () => {
  app.listen(port, () => { console.log(`Server is running on port ${port}`) })
}
launch();

loader()
