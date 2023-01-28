import { useDispatch } from "react-redux";
import { createUser } from "src/redux/states/user";
import getUser from "src/services/auth.service";

function Login() {
  const dispatch = useDispatch();
  const login = async () => {
    try {
      const result = await getUser();
      dispatch(createUser(result));
    } catch {}
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </div>
  );
}
export default Login;