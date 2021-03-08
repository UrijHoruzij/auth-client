import { withFormik } from "formik";
import RegisterForm from "../components/RegisterForm";
import validateForm from "../../../utils/validate";
import {userActions} from "../../../redux/actions"
import store from "../../../redux/store";

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    name: "",
    lastname: "",
    password: "",
    password_2: "",
  }),
  validate: (values) => {
    let errors = {};
    validateForm({ isAuth: false, values, errors });
    return errors;
  },
  handleSubmit: async (values, { setSubmitting, props }) => {
    const {data} = await store.dispatch(userActions.fetchUserRegister(values));
    if(data){
      props.history.push('/signin'); 
    }     
    setSubmitting(false);
  },
  displayName: "RegisterForm",
})(RegisterForm);
