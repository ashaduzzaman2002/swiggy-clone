import { loginAction } from '../redux/feature/auth/authAction';
import store from '../redux/store'

export const handleLogin = (values) => {

    try {
        store.dispatch(loginAction(values))
    } catch (error) {
        console.log(error);
    }
}
