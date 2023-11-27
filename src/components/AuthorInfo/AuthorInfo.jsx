// import placeholder profileIcon icon as assets

import DateCard from "../DateCard/DateCard"

const AuthorInfo = ({ content }) => {
  const photo = content.author.photo ? content.author.photo : <i className="fa-solid fa-user"></i>
  return ( 
    <div>
      <img src={photo} alt="The users avatar" />
      <section>
        <h4>{content.author.name}</h4>
        <DateCard createdAt={content.createdAt} />
      </section>
    </div>
  )
}

export default AuthorInfo;