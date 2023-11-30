// npm modules
import { useState } from "react"


// services
// import * as blogService from '../../services/BlogService'


const EditComment = (props) => {
  const [formData, setFormData] = useState(props.comment)

  function handleChange(evt) {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    // await blogService.updateComment(props.blogId, props.commentId, formData)
    props.handleEditComment(formData)
    props.handleHideForm()
  }

  return (  
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Edit Comment</h1>
        <label htmlFor="text-input">Text</label>
        <textarea
          required
          type="text"
          name="text"
          id="text-input"
          value={formData.text}
          placeholder="Text"
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default EditComment