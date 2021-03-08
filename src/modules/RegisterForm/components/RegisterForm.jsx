import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import { Form, Input, Button,Typography } from "ui-nature";
import { validateField } from "../../../utils";

const FormWrapper = styled(Form)`
  width: 100%;
`
const ButtonPrimaryWrapper = styled(Button)`
  height: 44px;
  margin-top: 24px;
`
const LinkWrapper = styled(Link)`
  text-decoration: none;
  width: 100%;
  outline: none;
`
const ButtonSecondaryWrapper = styled(Button)`
  height: 44px;
  margin-top: 16px;
`
const RegisterForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = props;
  return (
    <>
      <Typography type="h1">Регистрация</Typography>
      <FormWrapper onSubmit={handleSubmit}>
        <Input 
          id="name" 
          placeholder="Имя"
          value={values.name}
          onChange={handleChange}
          status={validateField("name", touched, errors)}
          help={!touched.name ? "" : errors.name}/>
        <Input 
          name="lastname"
          placeholder="Фамилия"
          value={values.lastname}
          onChange={handleChange}
          status={validateField("lastname", touched, errors)}
          help={!touched.lastname ? "" : errors.lastname}/>
        <Input 
          id="email" placeholder="E-mail"
          value={values.email}
          onChange={handleChange}
          status={validateField("email", touched, errors)}
          help={!touched.email ? "" : errors.email}/>
        <Input 
          id="password"
          type="password"
          placeholder="Придумайте пароль"
          value={values.password}
          onChange={handleChange}
          status={validateField("password", touched, errors)}
          help={!touched.password ? "" : errors.password}/>
        <Input 
          id="password_2"
          type="password"
          placeholder="Повторите пароль"
          value={values.password_2}
          onChange={handleChange}
          status={validateField("password_2", touched, errors)}
          help={!touched.password_2 ? "" : errors.password_2}/>
        <ButtonPrimaryWrapper 
          type="primary"
          disabled={isSubmitting}
          onClick={handleSubmit}
          fullWidth>
            Зарегистрироваться
        </ButtonPrimaryWrapper>
      </FormWrapper>
      <LinkWrapper to="/signin">
        <ButtonSecondaryWrapper fullWidth type="outline">
          Войти
        </ButtonSecondaryWrapper>
      </LinkWrapper>
    </>
  );
};

export default RegisterForm;
