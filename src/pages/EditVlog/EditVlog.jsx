// npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"

const EditVlog = (props) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)

  function handleChange(evt) {
    setFormData({...formData, [evt.target.name]: evt.target.value})
    // console.log(formData)
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    props.handleUpdateVlog(formData) 
  }

  return (  
    <main>
      <h1>Edit Vlog Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title-input">Title: </label>
        <input 
          required
          type="text" 
          name='title'
          id='title-input'
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="text-input">Text: </label>
        <textarea  
          required 
          name="text" 
          id="text-input" 
          cols="30" rows="10" 
          onChange={handleChange}
          value={formData.text}
          placeholder="About this Vlog...">
        </textarea>
        <label htmlFor="category-input">Category: </label>
        <select 
          required
          name="category" 
          id="category-input"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Utah Gems">Utah Gems</option>
          <option value="Great Outdoors">Great Outdoors</option>
          <option value="Foodie Finds">Foodie Finds</option>
          <option value="Travel">Travel</option>
          <option value="Events & Festivals">Events & Festivals</option>
          <option value="Seasonal">Seasonal</option>
          <option value="Personal Stories">Personal Stories</option>
        </select>
        <label htmlFor="location-input">Location: </label>
        <input 
          required
          type="text" 
          name='location'
          id='location-input'
          value={formData.location}
          onChange={handleChange}
        />
      <button type="submit">Update Vlog</button>
    </form>
    </main>
  )
}

export default EditVlog