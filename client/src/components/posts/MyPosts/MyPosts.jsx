import React, { Component } from "react";
import cardsService from "../../../services/cardsService";
import Card from "../Card/Card";
import PageHeader from "../../common/PageHeader";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./MyPosts";

class MyPosts extends Component {
  state = { cards: [] };

  async componentDidMount() {
    this.getCards();
  }

  async getCards() {
    const { data } = await cardsService.getMyCards();
    if (data.length) {
      this.setState({
        cards: data,
      });
    }
  }

  handleCardDelete = async (id) => {
    await cardsService.deleteCard(id);
    toast.success("Card Deleted !");

    const { cards } = this.state;
    this.setState({
      cards: cards.filter((card) => card._id !== id),
    });
  };

  render() {
    const { cards } = this.state;

    return (
      <>
        <PageHeader title="My Posts" />
        <div className="row"></div>
        <div className="mt-3">
          <Link className="createCard" to="/create-card">
            +
          </Link>
        </div>
        <div className="row mt-3">
          {cards.length ? (
            cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                onDelete={() => this.handleCardDelete(card._id)}
              />
            ))
          ) : (
            <h5 className="text-center">No Cards Found...</h5>
          )}
        </div>
      </>
    );
  }
}

export default MyPosts;
