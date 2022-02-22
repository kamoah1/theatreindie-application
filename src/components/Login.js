import { useState, Fragment, useEffect } from "react";
//import { Card, Menu, Form, Button } from "semantic-ui-react";
import { useHistory ,Link } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth";

import { app } from "../firebase";

//import "../css/AuthForm.css";

import firebase from "firebase/app";
const auth = getAuth(app);

async function authenticateUser(email, password, isLogin) {
  try {
    const user = isLogin
      ? await signInWithEmailAndPassword(auth ,email, password)
      : await createUserWithEmailAndPassword(auth , email, password);
    console.log(user);
	//history.push("/Main")
	
  } catch (err) {
    console.log(err);
  }
}

// function renderLoggedIn() {
//   return (
//     <div className="loggedIn-wrapper">
//       <h1>You are logged in!</h1>
//       <div>
//         <Button onClick={() => auth.signOut()} color="yellow">
//           Log out
//         </Button>
//       </div>
//     </div>
//   );
// }

function Login() {
	let history = useHistory()
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  
  auth.onAuthStateChanged((user) => setUser(user));

  useEffect(() => {
    if (user) {
		history.push('/Home');
    //   authUI.start(".google-login", {
    //     signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    //     signInFlow: "redirect",
    //  });
    }
  }, [user]);

  return (

	<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="sign__content">
						{/* <!-- authorization form --> */}
						<form action="#" className="sign__form">
							<a href="index.html" className="sign__logo">
								<img src="img/logo.svg" alt=""/>
							</a>

							<div className="sign__group">
								<input type="text" className="sign__input"    value={loginEmail || ""}   onChange={(e) => setLoginEmail(e.target.value)} placeholder="Email"/>
							</div>

							<div className="sign__group">
								<input type="text" className="sign__input" value={loginPassword || ""}   onChange={(e) => setLoginPassword(e.target.value)} placeholder="Password"/>
							</div>

						
							
							<button className="sign__btn"    onClick={() => setIsLogin(true)} type="button">Login</button>

							<span className="sign__text">Don't have an account? <Link to='/Signup'>Signup</Link></span>

							<span className="sign__text"><a href="#">Forgot password?</a></span>
						</form>
						{/* <!-- end authorization form --> */}
					</div>
				</div>
			</div>
		</div>

    // <div className="auth-form-wrapper">
    //   <Card className="auth-form-card">
    //     <Card.Content>
    //       {user ? (
    //         renderLoggedIn()
    //       ) : (
    //         <Fragment>
    //           <Card.Header className="auth-form-header">Auth Form</Card.Header>
    //           <Menu compact secondary>
    //             <Menu.Item
    //               name="Login"
    //               onClick={() => setIsLogin(true)}
    //               active={isLogin}
    //             ></Menu.Item>
    //             <Menu.Item
    //               name="Sign up"
    //               onClick={() => setIsLogin(false)}
    //               active={!isLogin}
    //             ></Menu.Item>
    //           </Menu>
    //           {isLogin ? (
    //             <Fragment>
    //               <Form>
    //                 <Form.Field className="auth-form-fields">
    //                   <label className="form-labels">Email</label>
    //                   <input
    //                     placeholder="Email Address"
    //                     name="loginEmail"
    //                     type="email"
    //                     value={loginEmail || ""}
    //                     onChange={(e) => setLoginEmail(e.target.value)}
    //                   ></input>
    //                 </Form.Field>
    //                 <Form.Field className="auth-form-fields">
    //                   <label className="form-labels">Password</label>
    //                   <input
    //                     placeholder="Password"
    //                     name="loginPassword"
    //                     type="password"
    //                     value={loginPassword || ""}
    //                     onChange={(e) => setLoginPassword(e.target.value)}
    //                   ></input>
    //                 </Form.Field>
    //                 <Button
    //                   onClick={() => authenticateUser(loginEmail, loginPassword, true)}
    //                   className="auth-form-buttons"
    //                   color="green"
    //                 >
    //                   Login
    //                 </Button>
    //               </Form>
    //               <div className="google-login"></div>
    //             </Fragment>
    //           ) : (
    //             <Fragment>
    //               <Form>
    //                 <Form.Field className="auth-form-fields">
    //                   <label className="form-labels">Email</label>
    //                   <input
    //                     placeholder="Email Address"
    //                     name="signUpEmail"
    //                     type="email"
    //                     value={signupEmail || ""}
    //                     onChange={(e) => setSignupEmail(e.target.value)}
    //                   ></input>
    //                 </Form.Field>
    //                 <Form.Field className="auth-form-fields">
    //                   <label className="form-labels">Password</label>
    //                   <input
    //                     placeholder="Password"
    //                     name="signUpPassword"
    //                     type="password"
    //                     value={signupPassword || ""}
    //                     onChange={(e) => setSignupPassword(e.target.value)}
    //                   ></input>
    //                 </Form.Field>
    //                 <Button
    //                   className="auth-form-buttons"
    //                   color="teal"
    //                   onClick={() => authenticateUser(signupEmail, signupPassword, false)}
    //                 >
    //                   Sign up
    //                 </Button>
    //               </Form>
    //               <div className="google-login"></div>
    //             </Fragment>
    //           )}
    //         </Fragment>
    //       )}
    //     </Card.Content>
    //   </Card>
    // </div>
  );
}

export default Login;