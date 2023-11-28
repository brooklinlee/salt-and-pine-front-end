// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// services
import * as BlogService from '../../services/BlogService'

// components
import Loading from '../../components/Loading/Loading'
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

const BlogDetails = () => {
  const { blogId } = useParams()
  const [blog, setBlog] = useState(null)

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
      <button>Like</button>
      <button>Save</button>
      </section>
      <section>
        <h3>Comments</h3>
      </section>
    </main>
  )
}

export default BlogDetails