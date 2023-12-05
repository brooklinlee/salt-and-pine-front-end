// npm modules
import { useState } from "react"

const NewVlog = (props) => {
  // set state of form
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    category: 'Utah Gems',
    location: ''
  })

  // set up handleChange
  function handleChange(evt) {
    setFormData({...formData, [evt.target.name]: evt.target.value})
    // console.log(formData)
  }

  // onSumbit/handleSubmit
  function handleSubmit(evt) {
    evt.preventDefault()
    props.handleAddVlog(formData)
  }


  return ( 
    <>
    {/* return the form */}
    <form onSubmit={handleSubmit}>
    {/* lable and input pairs */}
    <label htmlFor="title-input">Title: </label>
    <input 
      required
      onChange={handleChange}
      type="text" 
      name='title'
      id='title-input'
      placeholder="Title"
    />
    {/* submit button */}
    <button type="submit">Add New Vlog</button>
    </form>
      <h1>New Vlog Form</h1>
    </>
  )
}

export default NewVlog