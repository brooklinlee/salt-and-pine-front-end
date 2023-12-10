// npm modules
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

import * as VlogService from '../../services/VlogService'

import Loading from "../../components/Loading/Loading"

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
      <h1>{ vlog.title }</h1>
    </>
  )
}

export default VlogDetails
