import React, { Component } from "react";
import Input from "./Input";
import Joi from "joi";

class Form extends Component {
  validateInput = ({ name, value }) => {
    const data = {
      [name]: value,
    };

    const schema = Joi.object({
      [name]: this.schema[name],
    });
    const { error } = schema.validate(data);
    return error ? error.details[0].message : null;
  };

  validateForm = () => {
    const {
      schema,
      state: { form },
    } = this;
    const { error } = Joi.object(schema).validate(form, {
      abortEarly: false,
    });
    if (!error) {
      return null;
    }

    const errors = {};
    for (const detail of error.details) {
      errors[detail.path[0]] = detail.message;
    }
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validateForm();
    this.setState({ errors });

    if (errors) {
      return;
    }
    this.doSubmit();
  };

  handleChange = ({ target }) => {
    const { form, errors } = this.state;

    this.setState({
      form: {
        ...form,
        [target.name]: target.value,
      },
      errors: {
        ...errors,
        [target.name]: this.validateInput(target),
      },
    });
  };

  renderInput(name, label, type = "text", required = false) {
    const { form, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        label={label}
        onChange={this.handleChange}
        value={form[name]}
        error={errors?.[name]}
        required={required}
      />
    );
  }
  renderButton(label) {
    return (
      <button disable={this.validateForm()} className="btn btn-primary">
        {label}
      </button>
    );
  }
}

export default Form;
