// npm modules
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

import * as VlogService from '../../services/VlogService'

import Loading from "../../components/Loading/Loading"

import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

const VlogDetails = (props) => {
  const { vlogId } = useParams()
  const [vlog, setVlog] = useState(null)

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
    </>
  )
}

export default VlogDetails
