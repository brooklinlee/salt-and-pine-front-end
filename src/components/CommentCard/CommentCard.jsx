// components
import AuthorInfo from "../AuthorInfo/AuthorInfo"

const CommentCard = ({ comment }) => {
  return (  
      <article>
        <h1>Comment Card</h1>
        <AuthorInfo content={ comment } />
        <p>{ comment.text }</p>
      </article>
  )
}

export default CommentCard