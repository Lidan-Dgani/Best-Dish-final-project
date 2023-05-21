import usersService from "../../../services/userService";
import { toast } from "react-toastify";

const AllPostsSingle = ({
  card: { _id, image, name, location, description, user_id },
}) => {
  //adding the id of the card to the user's cards array
  const addCardToFav = async (id) => {
    try {
      await usersService.addToFav(id);
      toast.success("Post Added To Favorites");
    } catch {
      toast.error("Error");
    }
  };

  return (
    <div className="col-md-6 col-lg-4 mt-3">
      <div className="card h-100">
        <img
          src={image}
          alt={name}
          className="p-2"
          style={{ width: "100%", height: "50%" }}
        />
        <div className="card-body">
          <h5 className="card-title">
            <p className="text-muted">Posted By :</p> <strong>{name}</strong>
          </h5>
          <hr />
          <p className="text-muted"> Description :</p> {description}
          <div className="card-text border-top pt-3">
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
            <br />
            <button
              className="mt-3"
              onClick={() => {
                addCardToFav(_id);
              }}
            >
              Favourites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPostsSingle;
