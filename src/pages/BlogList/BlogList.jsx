// css
// import styles from './BlogList.module.css'

const BlogList = (props) => {
  // console.log('BlogList props: ', props)

  return ( 
    <main>
      <h1>Blog List</h1>
      {props.blogs.map(blog => (
        <p key={blog._id}>
          {blog.title}
        </p>
      ))}
    </main>
  )
}

export default BlogList
