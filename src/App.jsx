import { useState } from "react";
import classes from "./App.module.css";

const App = () => {
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleIsPassword = ({ target: { value } }) => {
    setIsPassword(value);
  };

  const handlePasswordValidation = (e) => {
    e.preventDefault();
    if (password != isPassword) {
      alert("Passwords must match");
    }
  };

  return (
    <div className={classes["init-page"]}>
      <div className={classes.rightSide}>
        <img
          src="src\assets\eva-darron-g2v5chnany8-unsplash.jpg"
          alt="front-img"
        />
        <div className={classes.logo}>
          <img src="src\assets\odin-lined.png" alt="logo" />
          <span>Alley Bar</span>
        </div>

        <div className={classes.owner}>
          Photo by{" "}
          <a href="https://unsplash.com/@evadarron?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Eva Darron
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/g2v5chnany8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
      </div>

      <main>
        <header>
          This is not a real online service! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Necessitatibus, commodi! Sign up now to
          get started.
        </header>
        <p>
          <span>You know you want to.</span>
        </p>
        <form onSubmit={handleSubmit}>
          <legend>Let's do this!</legend>

          <div className={classes.inputs}>
            <label htmlFor="name">FIRST NAME</label>
            <input type="text" id="name" required />
          </div>
          <div className={classes.inputs}>
            <label htmlFor="lastname">LAST NAME</label>
            <input type="text" id="lastname" />
          </div>
          <div className={classes.inputs}>
            <label htmlFor="email">EMAIL</label>
            <input type="email" id="email" required />
          </div>
          <div className={classes.inputs}>
            <label htmlFor="phone-number">PHONE NUMBER</label>
            <input
              type="tel"
              id="phone-number"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="###-###-####"
              maxLength={13}
              required
            />
          </div>
          <div className={classes.inputs}>
            <label htmlFor="password">PASSWORD</label>
            <input
              onChange={handlePassword}
              type="password"
              id="password"
              required
            />
          </div>
          <div className={classes.inputs}>
            <label htmlFor="confirm-password">CONFIRM PASSWORD</label>
            <input
              onChange={handleIsPassword}
              type="password"
              id="confirm-password"
              required
            />
          </div>

          <button onClick={handlePasswordValidation}>Create Account</button>
        </form>
        <p>
          Already have an account? <a href="#">Log in</a>
        </p>
      </main>
    </div>
  );
};

export default App;
