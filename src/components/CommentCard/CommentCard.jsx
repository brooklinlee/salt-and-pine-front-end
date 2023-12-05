// npm modules
import { useState } from "react"

// components
import AuthorInfo from "../AuthorInfo/AuthorInfo"
import EditComment from "../EditComment/EditComment"

const CommentCard = (props) => {
  const [showForm, setShowForm] = useState(false)

  const handleShowForm = () => {
    setShowForm(true)
  }

  const handleHideForm = () => {
    setShowForm(false)
  }

  // console.log('Comment in Comment Card: ', props.comment)

  return (  
      <article>
        <header>
        <AuthorInfo content={ props.comment } />
        </header>
        <p>{ props.comment.text }</p>
        <div>
        {props.comment.author?._id === props.user?.profile && <button onClick={() => handleShowForm()}>Edit</button>}
        {props.comment.author?._id === props.user?.profile && <button onClick={() => {
  console.log('Clicked Delete Button:', props.comment._id);
  props.handleDeleteComment(props.comment._id);
}}>Delete</button>
}
        </div>
        {showForm && <EditComment comment={props.comment} handleEditComment={props.handleEditComment} handleHideForm={handleHideForm} />}
      </article>
  )
}

export default CommentCard