import axios from "axios";
import { REGISTER_USER, TYPE_USER } from "./types";

const LOGIN_URL = "/api/users/login";
const REGISTER_URL = "/api/users/register";
const LOGOUT_URL = "/api/users/logout";

export function loginUser(dataToSend) {
    const request = axios.post(LOGIN_URL, dataToSend).then((res) => res.data);

    return {
        type: TYPE_USER,
        payload: request,
    };
}

export function registerUser(dataToSend) {
    const request = axios
        .post(REGISTER_URL, dataToSend)
        .then((res) => res.data);

    return {
        type: REGISTER_USER,
        payload: request,
    };
}

export function logoutUser() {
    const request = axios.get(LOGOUT_URL).then((res) => res.data);

    return {
        type: REGISTER_USER,
        payload: request,
    };
}