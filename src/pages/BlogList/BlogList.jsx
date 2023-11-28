// css
// import styles from './BlogList.module.css'

// components
import BlogCard from "../../components/Blog Card/BlogCard"

const BlogList = (props) => {
  // console.log('BlogList props: ', props)

  return ( 
    <main>
      <h1>Blog List</h1>
      {props.blogs.map(blog => (
        // <p key={blog._id}>
        //   {blog.title}
        // </p>
        <BlogCard blog={blog} key={blog._id} />
      ))}
    </main>
  )
}

export default BlogList
