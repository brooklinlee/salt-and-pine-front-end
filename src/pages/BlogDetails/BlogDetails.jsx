// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// services
import * as BlogService from '../../services/BlogService'

const BlogDetails = (props) => {
  const { blogId } = useParams()
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    const fetchBlog = async() => {
      const blogData = await BlogService.show(blogId)
      setBlog(blogData)
    }
    fetchBlog()
  }, [blogId])

console.log('Blog State: ', blog)

  return (  
    <main>
      <h1>Blog Details Page</h1>
    </main>
  )
}

export default BlogDetails