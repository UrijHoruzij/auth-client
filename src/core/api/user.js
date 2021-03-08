import { core } from "../";
import {AUTH_URL} from "../../config";

const userApi = {
    signIn: postData => core.signIn(`${AUTH_URL}/signin`, postData),
    signUp: postData => core.http(`${AUTH_URL}/signup`, "POST", postData),
    refresh: () => core.refresh(),
    logout: () => core.http(`${AUTH_URL}/logout`, "POST")
};
export default userApi;