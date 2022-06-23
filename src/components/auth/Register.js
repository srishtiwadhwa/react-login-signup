import {useState} from "react";
// import {register} from "../api/auth"

const Register = () => {
  const [email, setEmail] = useState("ss@gmail.com");
  const [password, setPassword] = useState("ss@3");
  const [referral, setReferral] = useState("");

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // try {
    //     register({email,password,referral})
    //       .then((res) => {})
    //       .catch((err) => console.log(err));
    //   } catch (error) {
    //     console.log(error);
    //   }
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                autoFocus
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={referral}
                onChange={(e) => setReferral(e.target.value)}
                placeholder="Your referral"
              />
            </div>

            <br />
            <button
              onClick={handleSubmit}
              type="primary"
              className="mb-3 btn btn-primary"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;