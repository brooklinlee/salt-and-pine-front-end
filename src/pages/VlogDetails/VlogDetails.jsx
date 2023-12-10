// npm modules
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

// services
import * as VlogService from '../../services/VlogService'

// pages
import Loading from "../../components/Loading/Loading"

// components
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"
import NewBlogComment from "../../components/NewBlogComment/NewBlogComment"
import Comments from "../../components/Comments/Comments"

const VlogDetails = (props) => {
  const { vlogId } = useParams()
  const [vlog, setVlog] = useState(null)

  // handleAddComment
  // pass to component
  const handleAddComment = async (commentFormData) => {
    const newComment = await VlogService.createComment(vlogId, commentFormData)
    setVlog({...vlog, comments: [...vlog.comments, newComment]})
  }

  // handleEditComment
  const handleEditComment = async(commentFormData) => {
    const editedComment = await VlogService.updateComment(vlogId, commentFormData)
    setVlog({...vlog, comments: vlog.comments.map(cmt => cmt._id === commentFormData._id ? editedComment : cmt)})
  }

  // handleDeleteComment
  const handleDeleteComment = async(commentId) => {
    const deletedComment = await VlogService.deleteComment(vlogId, commentId)
    setVlog({...vlog, comments: vlog.comments.filter(cmt => cmt._id !== deletedComment._id)})
  }

  useEffect(() => {
    const fetchVlog = async() => {
      const vlogData = await VlogService.show(vlogId)
      setVlog(vlogData)
    }
    fetchVlog()
  }, [vlogId])
  
  if (!vlog) return <Loading />

  return (  

    <>
      <h1>Vlog Details Page</h1>
      <article>
        <h1>{ vlog.title }</h1>
        <AuthorInfo content={ vlog }/>
        <h3>{ vlog.location }</h3>
        <h3>{ vlog.category }</h3>
        <p>{ vlog.text }</p>
      </article>
      <section>
        {vlog.author._id === props.user.profile &&
        <>
        <Link to={`/vlogs/${vlogId}/edit`} state={ vlog }> <button>Edit</button> </Link>
          <button onClick={() => { props.handleDeleteVlog(vlogId) }}>Delete</button>
        </>
        }
      </section>
      <section>
      <button>Like</button>
      <button>Save</button>
      </section>
      <section>
        {/* newVlogComment component, handle add comment */}
        {props.user?.profile && <NewBlogComment handleAddComment={handleAddComment} />}
        {/* current comments component, handle edit comment and handle delete comment */}
        <Comments comments={vlog.comments} user={props.user} vlogId={vlogId} handleEditComment={handleEditComment} handleDeleteComment={handleDeleteComment} />
      </section>
    </>
  )
}

export default VlogDetails
