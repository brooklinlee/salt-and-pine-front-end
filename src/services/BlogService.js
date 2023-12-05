// services
// import { json } from 'react-router-dom'
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

async function update(blogFormData){
  try {
    const res = await fetch(`${BASE_URL}/${blogFormData._id}`, {
      method: 'PUT', 
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

async function deleteBlog(blogId) {
  try {
    const res = await fetch(`${BASE_URL }/${blogId}`, {
      method: 'DELETE', 
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function createComment(blogId, commentFormData){
  try {
    const res = await fetch(`${BASE_URL}/${blogId}/comments`, {
      method: 'POST',
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

async function updateComment(blogId, commentFormData)  {
  try {
    const res = await fetch(`${BASE_URL}/${blogId}/comments/${commentFormData._id}`, {
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


async function deleteComment(blogId, commentId) {
  try {
    console.log('service function:', `${BASE_URL}/${blogId}/comments/${commentId}`)
    const res = await fetch(`${BASE_URL}/${blogId}/comments/${commentId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

export {
  index,
  show,
  create,
  update,
  deleteBlog,
  createComment,
  updateComment,
  deleteComment,
}