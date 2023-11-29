// components
import CommentCard from "../CommentCard/CommentCard"


const Comments = (props) => {
  return (  
    <main>
      <h1>Comment Section</h1>
          {props.comments.map((comment) => (
              <CommentCard 
                comment={comment} 
                key={comment._id} 
                user={props.user} 
              />
          ))}
    </main>
  )
}

export default Comments
