import "../style/Home.css";
import { Link } from "react-router-dom";

const Home = ({ user }) => {
  return (
    <>
      <div className="main">
        <div className="heading col-12 text-center">
          <h2 className="display-4 mt-5">
            Recommend And Discover The Most Favourite Food Here At
            <br />
            <strong className="big">Best Dish</strong>
          </h2>
        </div>
        <div className="arrow-down text-center mt-5">
          <a href="#content">
            <i className="bi bi-arrow-down-circle-fill"></i>
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-center" id="content">
        <div className="col-4 text-center">
          <img
            src="https://cdn.pixabay.com/photo/2017/09/29/23/44/feedback-2800867_960_720.png"
            alt="recommend"
            className="img-fluid"
          />
        </div>
        <div className="container-fluid col-8 side-text">
          Watch Other Peoples Recommendations <br></br>
          Look For New Meals Ideas <br></br>
          <button className="action-btn mt-5">
            <Link to="/all-posts" className="btn-link">
              Watch Recommendations
            </Link>
          </button>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-center">
        <div className="container-fluid col-8 side-text">
          We Want Your Recommendations ! <br></br>
          Share With Us The Best Meal You Had <br></br>
          <button className="action-btn mt-5">
            <Link to="/my-posts" className="btn-link">
              Cick Here To Post
            </Link>
          </button>
        </div>
        <div className="col-4 text-center">
          <img
            src="https://cdn.pixabay.com/photo/2012/04/11/16/17/thinker-28741_960_720.png"
            alt="recommend"
            className="img-fluid"
          />
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-center">
        <div className="col-4 text-center">
          <img
            src="https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png"
            alt="recommend"
            className="img-fluid"
          />
        </div>
        <div className="container-fluid col-8 side-text">
          Wanna Cook Something New ? <br></br>
          Search Meals With Your Favourite Recipe <br></br>
          <button className="action-btn mt-5">
            <Link to="/meals" className="btn-link">
              Look For Recipes
            </Link>
          </button>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default Home;
