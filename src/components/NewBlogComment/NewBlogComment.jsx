// npm modules
import { useState } from 'react'


const NewBlogComment = (props) => {
  const [formData, setFormData] = useState({
    text: ''
  })

  function handleChange(evt) {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    props.handleAddComment(formData)
    setFormData({ text: '' })
  }

  return (
    <main>
      <h1>Add a Comment</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text-input">Add a Comment</label>
        <input 
        required
        type="text" 
        name="text" 
        id="text-input"
        value={formData.text}
        placeholder='Add your comment here...'
        onChange={handleChange}
        />
        <button type='submit'>Add Comment</button>
      </form>
    </main>
  )
}

export default NewBlogComment