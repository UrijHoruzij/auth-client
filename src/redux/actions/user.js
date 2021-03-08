import { userApi } from "../../core/api";
import {core} from "../../core";

const Actions = {
  setUserData: (data) => ({
    type: "USER:SET_DATA",
    payload: data,
  }),
  setIsAuth: (bool) => ({
    type: "USER:SET_IS_AUTH",
    payload: bool,
  }),

  fetchUserLogin: (postData) => async (dispatch) => {
    try {
      const data = await userApi.signIn({...postData});
      const { SSOToken } = data;
      window.SSOToken ="?SSOToken="+SSOToken;
      dispatch(Actions.setIsAuth(true));
      return data;
    } catch (error){
      console.error(error);
    }
  },

  fetchUserRegister: (postData) => async () => {
    try {
      const data = await userApi.signUp({...postData});
      return data;
    } catch (error){
      console.error(error);
    }
  },

  refresh: () => async (dispatch)=>{
    try{
      const data = await userApi.refresh();
      const { SSOToken } = data;
      window.SSOToken ="?SSOToken="+SSOToken;
      dispatch(Actions.setIsAuth(true));
      return data;
    }catch (error){
      console.error(error);
    }
  },

  logout: () => async (dispatch) => {
    try {
      const data = await userApi.logout();
      core.SetAccessToken('');
      dispatch(Actions.setIsAuth(false))
      return data;
    } catch (error){
      console.error(error);
    }
  }
};

export default Actions;