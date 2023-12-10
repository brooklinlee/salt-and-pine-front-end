import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/vlogs`

async function create(vlogFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers:  {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(vlogFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function index() {
  try {
    const res = await fetch(`${BASE_URL}`)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function show(vlogId) {
  try {
    const res = await fetch(`${BASE_URL}/${vlogId}`)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  create,
  index,
  show,
}