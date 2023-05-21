import React from "react";
import Form from "../../common/Form";
import Joi from "joi";
import PageHeader from "../../common/PageHeader";
import { toast } from "react-toastify";
import cardsService from "../../../services/cardsService";
import { Link } from "react-router-dom";

class EditCard extends Form {
  state = {
    form: {
      name: "",
      description: "",
      location: "",
      image: "",
    },
  };
  schema = {
    _id: Joi.string(),
    name: Joi.string().min(2).max(255).required().label("Name"),
    description: Joi.string().min(2).max(1024).required().label("Description"),
    location: Joi.string().min(2).max(400).required().label("Location"),
    image: Joi.string().min(11).max(1024).uri().label("Image").allow(""),
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const {
      data: { _id, name, image, description, location },
    } = await cardsService.getCard(id);

    this.setState({
      form: {
        _id,
        name,
        image,
        description,
        location,
      },
    });
  }

  async doSubmit() {
    const {
      form: { _id, image, ...body },
    } = this.state;

    if (image) {
      body.image = image;
    }

    try {
      await cardsService.editCard(_id, body);
      toast.success("Card Has Been Edited !");
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
        <PageHeader title="Edit Your Card !" />
        <div className="row">
          <div className="col-12">
            <p>Here You Can Edit Your Post !</p>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} autoComplete="off" noValidate>
          {this.renderInput("name", "Name", "text", true)}
          {this.renderInput("description", "Description", "text", true)}
          {this.renderInput("location", "Location", "text", true)}
          {this.renderInput("image", "Image")}
          <div className="mt-2">
            <Link to=".." className="me-3 btn btn-secondary">
              Cancel
            </Link>
          </div>
          <div className="mt-2">{this.renderButton("Accept")}</div>
        </form>
      </>
    );
  }
}

export default EditCard;
