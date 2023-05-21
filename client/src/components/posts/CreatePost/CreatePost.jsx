import React from "react";
import Form from "../../common/Form";
import Joi from "joi";
import PageHeader from "../../common/PageHeader";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import cardsService from "../../../services/cardsService";

class CreatePost extends Form {
  state = {
    form: {
      name: "",
      description: "",
      location: "",
      image: "",
    },
  };
  schema = {
    name: Joi.string().min(2).max(255).required().label("Traveler Name"),
    description: Joi.string().min(2).max(1024).required().label("Description"),
    location: Joi.string().min(2).max(400).required().label("Location"),
    image: Joi.string().min(11).max(1024).uri().label("Image").allow(""),
  };

  async doSubmit() {
    const {
      form: { image, ...body },
    } = this.state;

    if (image) {
      body.image = image;
    }

    try {
      await cardsService.createCard(body);
      toast.success("A New Card Has Created");
      this.props.history.push("/my-cards");
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { image: response.data } });
      }
    }
  }

  render() {
    return (
      <>
        <PageHeader title="Post A New Card !" />
        <div className="row">
          <div className="col-12">
            <p>Share Your Favorite Location</p>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} autoComplete="off" noValidate>
          {this.renderInput("name", "Traveler Name", "text", true)}
          {this.renderInput("location", "Location", "text", true)}
          {this.renderInput("description", "Description", "text", true)}
          {this.renderInput("image", "Image")}
          <div className="mt-2">
            <div className="mt-2">{this.renderButton("Post !")}</div>
            <Link to="/my-posts" className="me-3 mt-2 btn btn-danger">
              Cancel
            </Link>
          </div>
        </form>
      </>
    );
  }
}

export default CreatePost;
