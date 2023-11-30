// components
import CommentCard from "../CommentCard/CommentCard"


const Comments = (props) => {
  return (  
    <main>
      <h1>Comment Section</h1>
          {props.comments.map((comment) => (
              <CommentCard 
                key={comment._id} 
                comment={comment} 
                user={props.user} 
                blogId={props.blogId}
                handleEditComment={props.handleEditComment}
              />
          ))}
    </main>
  )
}

export default Comments
