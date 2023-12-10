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

async function update(vlogFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${vlogFormData._id}`, {
      method: 'PUT',
      headers: {
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

async function deleteVlog(vlogId) {
  try {
    const res = await fetch(`${BASE_URL}/${vlogId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function createComment(vlogId, commentFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${vlogId}/comments`, {
      method: `POST`,
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

// update comment
async function updateComment(vlogId, commentFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${vlogId}/comments/${commentFormData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

// delete comment
async function deleteComment(vlogId, commentId) {
  try {
    const res = await fetch(`${BASE_URL}/${vlogId}/comments/${commentId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}


export {
  create,
  index,
  show,
  update,
  deleteVlog,
  createComment,
  updateComment,
  deleteComment
}