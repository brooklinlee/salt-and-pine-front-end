// npm modules
import { Link } from "react-router-dom"

// components
import AuthorInfo from "../AuthorInfo/AuthorInfo"

const VlogCard = ({ vlog }) => {
  return (  
    <>
    <h1>Vlog Card</h1>
    <Link to={`/vlogs/${vlog._id}`}>
      <article>
        <h1>{ vlog.title }</h1>
        <AuthorInfo content={ vlog }/>
      </article>
    </Link>
    </>
  )
}

export default VlogCard