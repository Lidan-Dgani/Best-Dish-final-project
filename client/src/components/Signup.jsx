import PageHeader from "../components/common/PageHeader";
import Form from "./common/Form";
import Joi from "joi";
import { createUser } from "../services/userService";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import usersService from "../services/userService";

class Signup extends Form {
  state = {
    form: {
      email: "",
      password: "",
      name: "",
    },
  };

  schema = {
    email: Joi.string()
      .required()
      .email({
        tlds: { allow: false },
      }),
    password: Joi.string().required().min(6),
    name: Joi.string().required().min(2),
  };

  async doSubmit() {
    const { form } = this.state;
    const body = { ...form };
    try {
      await createUser(body);
      toast.success("Account Created Successfully 🏆", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      this.props.history.replace("/signin");
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
        <PageHeader title="Signup For Real App" />
        <div className="row">
          <div className="col-12">
            <p>Have A New Account It's Free !</p>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} autoComplete="off" noValidate>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          <div className="mt-2">{this.renderButton("Sign Up !")}</div>
        </form>
      </>
    );
  }
}

export default Signup;
