// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/blogs`

async function index() {
  try {
    const res = await fetch(BASE_URL)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function show(blogId) {
  try {
    const res = await fetch(`${BASE_URL}/${blogId}`)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function create(blogFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blogFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
  show,
  create,
}