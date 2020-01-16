import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";

const Imagen = props => {
  const { largeImageURL, likes, previewURL, tags, views } = props.imagen;
  return (
    <div className="col-6 col-sm-4 col-md-3">
      <div className="card">
        <img className="card-img-top" src={previewURL} alt={tags} />
        <div className="card-body">
          <p className="card-text">
            {likes} <FontAwesomeIcon icon={faHeart} color="#f44336" />
          </p>
          <p className="card-text">
            {views} <FontAwesomeIcon icon={faEye} color="#125688" />
          </p>

          <a
            href={largeImageURL}
            target="_blank"
            className="btn btn-primary btn-block"
          >
            Ver Imagen
          </a>
        </div>
      </div>
    </div>
  );
};

export default Imagen;
