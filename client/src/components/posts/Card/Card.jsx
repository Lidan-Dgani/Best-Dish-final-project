import { Link } from "react-router-dom";
import React from "react";

const Card = ({
  card: { _id, image, name, location, description },
  onDelete,
}) => {
  return (
    <div className="col-md-6 col-lg-4 mt-3">
      <div className="card h-80">
        <img
          src={image}
          alt={name}
          className="p-1"
          style={{ width: "100%", height: "40%" }}
        />
        <div className="card-body">
          <h5 className="card-title">
            <p className="text-muted">Posted By :</p> <strong>{name}</strong>
          </h5>
          <hr />
          <div className="card-text">
            <p className="text-muted"> Description :</p> {description}
          </div>

          <div className="card-text border-top mt-3">
            <p className="text-muted">Location :</p>
            <a
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
              href={
                "https://www.google.com/maps/search/?api=1&query=" + location
              }
            >
              <i className="bi bi-geo-alt-fill me-2"></i>
              {location}
            </a>
          </div>
          <hr />
          <div className="card_actions">
            <Link to={`/my-cards/edit/${_id}`}>
              <button className="btn btn-primary">Edit</button>
            </Link>
            <button className="btn btn-danger ms-3" onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
