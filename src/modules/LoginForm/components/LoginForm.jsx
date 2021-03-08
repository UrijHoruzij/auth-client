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
const LoginForm = props => {
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
      <Typography type="h1">Вход</Typography>
      <FormWrapper onSubmit={handleSubmit}>
        <Input 
          name="email"
          placeholder="E-Mail"
          value={values.email}
          onChange={handleChange}
          status={validateField("email", touched, errors)}
          help={!touched.email ? "" : errors.email}/>
        <Input 
          name="password"
          type="password"
          placeholder="Пароль"
          value={values.password}
          onChange={handleChange}
          status={validateField("password", touched, errors)}
          help={!touched.password ? "" : errors.password}/>

        <ButtonPrimaryWrapper 
          fullWidth
          type="primary"
          disabled={isSubmitting}
          onClick={handleSubmit}
          >
          Войти
        </ButtonPrimaryWrapper>
      </FormWrapper>
      <LinkWrapper to="/signup">
        <ButtonSecondaryWrapper fullWidth type="outline">
          Зарегистрироваться
        </ButtonSecondaryWrapper>
      </LinkWrapper>
    </>
  );
};

export default LoginForm;
