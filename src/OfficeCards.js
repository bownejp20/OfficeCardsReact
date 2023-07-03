export const OfficeCards = ({name, handle, image, description}) => {
  console.log(image)
  return(
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt={name}/>
        </figure>
      </div>
      <>hello</>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{name}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>  
        <div className="content">{description}</div>
      </div>
    </div>
  )
}
