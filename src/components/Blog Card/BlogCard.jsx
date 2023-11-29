// npm modules
import { Link } from "react-router-dom"

// pages

// components
import AuthorInfo from "../AuthorInfo/AuthorInfo"

const BlogCard = ({ blog }) => {
  return ( 
      <Link to={`/blogs/${blog._id}`}>
        <article>
          <h1>{ blog.title }</h1>
          <AuthorInfo content={ blog }/>
        </article>
      </Link>
  )
}

export default BlogCard