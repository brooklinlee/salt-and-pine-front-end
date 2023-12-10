// components
import VlogCard from "../../components/Vlog Card/VlogCard"

const VlogList = (props) => {
  return (  
    <>
      <h1>Vlog List</h1>
      {props.vlogs.map(vlog => (
        <VlogCard vlog={vlog} key={vlog._id} />
      ))}
    </>
  )
} 
export default VlogList

