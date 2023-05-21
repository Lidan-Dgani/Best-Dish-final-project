import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "bootswatch/dist/journal/bootstrap.min.css";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Logout from "./components/Logout";

import CreatePost from "./components/posts/CreatePost/CreatePost";
import MyPosts from "./components/posts/MyPosts/MyPosts";
import AllPosts from "./components/posts/AllPosts/AllPosts";
import EditCard from "./components/posts/EditCard/EditCard";
import Favorites from "./components/posts/Favorites/Favorites";

import usersService from "./services/userService";

import ProtectedRoute from "./components/common/ProtectedRoute";

class App extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.setState({
      user: usersService.getCurrentUser(),
    });
  }
  render() {
    const { user } = this.state;
    return (
      <div className="App d-flex flex-column min-vh-100">
        <ToastContainer
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          autoClose={1800}
        />
        <header>
          <Navbar user={user} />
        </header>
        <main className="container flex-fill">
          <Switch>
            <ProtectedRoute
              path="/my-cards/edit/:id"
              component={EditCard}
              user={user}
              exact
            />
            <ProtectedRoute
              path="/my-posts"
              user={user}
              component={MyPosts}
              exact
            />
            <ProtectedRoute
              path="/create-card"
              user={user}
              component={CreatePost}
              exact
            />
            <ProtectedRoute
              path="/all-posts"
              user={user}
              component={AllPosts}
              exact
            />
            <ProtectedRoute
              path="/favorites"
              user={user}
              component={Favorites}
              exact
            />
            <Route path="/signup" component={Signup} exact />
            <Route path="/signin" component={Signin} exact />
            <Route path="/logout" component={Logout} exact />
            <Route path="/about" component={About} exact></Route>
            <Route path="/" component={Home} user={user} exact></Route>
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
