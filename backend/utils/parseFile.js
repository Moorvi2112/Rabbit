const fs = require("fs")
const csv = require("csv-parser")
const XLSX = require("xlsx")

async function parseFile(filePath) {

  if(filePath.endsWith(".csv")){

    const results = []

    return new Promise((resolve)=>{
      fs.createReadStream(filePath)
      .pipe(csv())
      .on("data",(data)=>results.push(data))
      .on("end",()=>resolve(results))
    })

  }

  if(filePath.endsWith(".xlsx")){

    const workbook = XLSX.readFile(filePath)
    const sheet = workbook.Sheets[workbook.SheetNames[0]]

    return XLSX.utils.sheet_to_json(sheet)

  }

}

module.exports = parseFile