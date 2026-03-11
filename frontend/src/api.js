import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:5000"
})

export const uploadFile = (formData) => {
  return API.post("/api/analyze", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}