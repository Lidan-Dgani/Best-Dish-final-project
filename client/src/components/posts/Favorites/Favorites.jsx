import React, { Component } from "react";
import cardsService from "../../../services/cardsService";
import AllPostsSingle from "../AllPostsSingle/AllPostsSingle";
import PageHeader from "../../common/PageHeader";
import "../MyPosts/MyPosts.css";

class Favourites extends Component {
  state = { cards: [] };

  async componentDidMount() {
    this.getCards();
  }

  async getCards() {
    const { data } = await cardsService.getFavorites();
    if (data.length) {
      this.setState({
        cards: data,
      });
    }
  }

  render() {
    const { cards } = this.state;

    return (
      <>
        <PageHeader title="My Favorites" />
        <div className="row"></div>
        <div className="row mt-3">
          {cards.length ? (
            cards.map((card) => <AllPostsSingle key={card._id} card={card} />)
          ) : (
            <h5 className="text-center">No Favorites Found...</h5>
          )}
        </div>
      </>
    );
  }
}

export default Favourites;
