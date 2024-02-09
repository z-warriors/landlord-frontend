import { jwtDecode } from "jwt-decode";
import {
    loginUserAction,
    registerUserAction,
    loginFailed,
    registerFailed,
    logoutUserAction,
} from "./auth.types";
import { instance } from "../../../config/client";

export const loginLandlord = (loginData) => (dispatch) => {
    instance
        .post("auth/login", loginData)
        .then((res) => {
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            const decoded = jwtDecode(token);
            decoded.token = token;

            dispatch(loginUserAction(decoded));
        })
        .catch((err) => {
            dispatch(loginFailed(err.response.data));
        });
};

export const registerLandlord = (registrationData) => async (dispatch) => {
    try {
        const res = await instance.post("landlord", registrationData);
        dispatch(registerUserAction(res.data));
    } catch (err) {
        dispatch(registerFailed(err.response.data));
    }
};

export const logoutLandlord = () => (dispatch) => {
    localStorage.removeItem("jwtToken");
    dispatch(logoutUserAction());
};