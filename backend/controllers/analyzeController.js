const parseFile = require("../utils/parseFile")
const generateSummary = require("../services/aiService")
const sendEmail = require("../services/emailService")

async function analyzeController(req,res){

try{

const file = req.file
const email = req.body.email

const data = await parseFile(file.path)

const summary = await generateSummary(data)

await sendEmail(email,summary)

res.json({
message:"Summary sent successfully"
})

}

catch(error){

console.log(error)

res.status(500).json({
error:"Processing failed"
})

}

}

module.exports = analyzeController