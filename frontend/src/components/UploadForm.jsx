import { useState } from "react"
import { uploadFile } from "../api"

export default function UploadForm(){

const [file,setFile] = useState(null)
const [email,setEmail] = useState("")
const [status,setStatus] = useState("")

const handleSubmit = async (e)=>{

e.preventDefault()

if(!file){
  setStatus("Please select a file")
  return
}

const formData = new FormData()

formData.append("file",file)
formData.append("email",email)

try{

setStatus("Analyzing data...")

await uploadFile(formData)

setStatus("✅ Summary sent to email")

}
catch(error){

setStatus("❌ Error generating summary")

}

}

return(

<div className="card">

<h2>Sales Insight Automator</h2>

<form onSubmit={handleSubmit}>

<input
type="file"
accept=".csv,.xlsx"
onChange={(e)=>setFile(e.target.files[0])}
/>

<input
type="email"
placeholder="Recipient Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<button type="submit">
Generate Summary
</button>

</form>

<p>{status}</p>

</div>

)

}