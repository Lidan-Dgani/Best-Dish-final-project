import PageHeader from "../components/common/PageHeader";
import Form from "./common/Form";
import Joi from "joi";
import usersService from "../services/userService";
import { Redirect } from "react-router-dom";

class Signin extends Form {
  state = {
    form: {
      email: "",
      password: "",
    },
  };

  schema = {
    email: Joi.string()
      .required()
      .email({
        tlds: { allow: false },
      })
      .label("Email"),
    password: Joi.string().required().min(6).label("Password"),
  };

  async doSubmit() {
    const { email, password } = this.state.form;

    try {
      await usersService.login(email, password);

      const to = this.props.location.state?.from?.pathname ?? "/";
      window.location = to;
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { email: response.data } });
      }
    }
  }
  render() {
    if (usersService.getCurrentUser()) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <PageHeader title="SignIn For Existing Account" />
        <div className="row">
          <div className="col-12">
            <p>We Missed You !</p>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} autoComplete="off" noValidate>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          <div className="mt-2">{this.renderButton("Sign In !")}</div>
        </form>
      </>
    );
  }
}

export default Signin;
