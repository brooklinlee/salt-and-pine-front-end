// components
import AuthorInfo from "../AuthorInfo/AuthorInfo"

const VlogCard = ({ vlog }) => {
  return (  
    <>
    <h1>Vlog Card</h1>
      <article>
        <h1>{ vlog.title }</h1>
        <AuthorInfo content={ vlog }/>
      </article>
    </>
  )
}

export default VlogCard