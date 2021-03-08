export default ({ isAuth, values, errors }) => {
  const rules = {
    email: (value) => {
      if (!value) {
        errors.email = "Введите E-Mail";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = "Неверный E-Mail";
      }
    },
    password: (value) => {
      if (!value) {
        errors.password = "Введите пароль";
      } else if (
        !isAuth &&
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
      ) {
        errors.password = "Пароль должен содержать не менее 8 символов и включать как минимум одну цифру, одну прописную и одну строчную букву";
      }
    },
    password_2: (value) => {
      if (!value) {
        errors.password_2 = "Введите повторно пароль";
      } else if (!isAuth && value !== values.password) {
        errors.password_2 = "Пароли не совпадают";
      }
    },
    name: (value) => {
      if (!isAuth && !value) {
        errors.fullname = "Укажите свое имя";
      }
    },
    lastname: (value) => {
      if (!isAuth && !value) {
        errors.fullname = "Укажите свою фамилию";
      }
    }
  };

  Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]));
};
