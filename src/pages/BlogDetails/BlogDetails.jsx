// npm modules
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"


// services
import * as BlogService from '../../services/BlogService'

// components
import Loading from '../../components/Loading/Loading'
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"
import NewBlogComment from "../../components/NewBlogComment/NewBlogComment"

const BlogDetails = (props) => {
  const { blogId } = useParams()
  const [blog, setBlog] = useState(null)

  // const [comments, setComments] = useState([])

  const handleAddComment = async (commentFormData) => {
    const newComment = await BlogService.createComment(blogId, commentFormData)
    setBlog({...blog, comments: [...blog.comments, newComment]})
  }

  useEffect(() => {
    const fetchBlog = async() => {
      const blogData = await BlogService.show(blogId)
      setBlog(blogData)
    }
    fetchBlog()
  }, [blogId])

// console.log('Blog State: ', blog)

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
        <h3>Comments</h3>
        <NewBlogComment handleAddComment={handleAddComment} />
      </section>
    </main>
  )
}

export default BlogDetails