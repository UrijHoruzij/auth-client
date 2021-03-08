import { withFormik } from "formik";
import LoginForm from "../components/LoginForm";
import validateForm from "../../../utils/validate";
import { userActions } from "../../../redux/actions";
import store from "../../../redux/store";

const LoginFormContainer = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  validate: (values) => {
    let errors = {};
    validateForm({ isAuth: true, values, errors });
    return errors;
  },
  handleSubmit: async (values, { setSubmitting, props }) => {
    const data = await store.dispatch(userActions.fetchUserLogin(values))
    const {isAuth} = data;
    setSubmitting(false);
    if (isAuth === true) {
      props.history.push('/');
    }
  },
  displayName: "LoginForm",
})(LoginForm);

export default LoginFormContainer;
