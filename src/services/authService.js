import { userLogin, userRegister } from "../redux/features/auth/authAction";
import Store from "../redux/store";
export const handleLogin = (e, email, password, role) => {
  try {
    if (!role || !email || !password) {
      return alert("Plz provide all fields");
    }
    e.preventDefault();
    Store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  organizationName,
  hospitalName,
  address,
  phone,
  website
) => {
    e.preventDefault();
  try {
    Store.dispatch(
      userRegister(
       {
        name,
        role,
        email,
        password,
        organizationName,
        hospitalName,
        address,
        phone,
        website
       }
      )
    );
  } catch (error) {
    console.log(error);
  }
};
