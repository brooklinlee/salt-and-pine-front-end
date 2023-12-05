// npm modules
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

// services
import * as BlogService from '../../services/BlogService'

// components
import Loading from '../../components/Loading/Loading'
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"
import NewBlogComment from "../../components/NewBlogComment/NewBlogComment"
import Comments from "../../components/Comments/Comments"

const BlogDetails = (props) => {
  const { blogId } = useParams()
  const [blog, setBlog] = useState(null)

  const handleAddComment = async (commentFormData) => {
    const newComment = await BlogService.createComment(blogId, commentFormData)
    setBlog({...blog, comments: [...blog.comments, newComment]})
  }

  const handleEditComment = async (commentFormData) => {
    const editedComment = await BlogService.updateComment(blogId, commentFormData)
    setBlog({...blog, comments: blog.comments.map(cmt => cmt._id === commentFormData._id ? editedComment : cmt) })
  }

  const handleDeleteComment = async (commentId) => {
    const deletedComment = await BlogService.deleteComment(blogId, commentId)
    setBlog({...blog, comments: blog.comments.filter(cmt => cmt._id !== deletedComment._id)})
  }

  useEffect(() => {
    const fetchBlog = async() => {
      const blogData = await BlogService.show(blogId)
      setBlog(blogData)
    }
    fetchBlog()
  }, [blogId])

if (!blog) return <Loading />

  return (  
    <main>
      <h1>Blog Details Page</h1>
      <article>
        <h1>{blog.title}</h1>
        {/* <h3>{blog.author}</h3> */}
        <AuthorInfo content={ blog }/>
        <h3>{blog.location}</h3>
        <h3>{blog.category}</h3>
        <p>{blog.text}</p>
      </article>
      <section>
        {blog.author._id === props.user.profile &&
          <>
            <Link to={`/blogs/${blogId}/edit`} state={blog}> <button>Edit Blog</button> </Link>
            <button onClick={() => props.handleDeleteBlog(blogId)}>Delete Blog</button>
          </>
        }
      </section>
      <section>
      <button>Like</button>
      <button>Save</button>
      </section>
      <section>
        {props.user?.profile && <NewBlogComment handleAddComment={handleAddComment} />}
        <Comments comments={blog.comments} user={props.user} blogId={blogId} handleEditComment={handleEditComment} handleDeleteComment={handleDeleteComment} /> 
      </section>
    </main>
  )
}

export default BlogDetails