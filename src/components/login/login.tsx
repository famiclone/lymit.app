const Login = () => {
  function saveToken(token: string) {
    window.localStorage.setItem('token', token);
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <div className="login__content">
        <form onSubmit={(e) => {
          e.preventDefault();
          const token = (document.getElementById('token') as HTMLInputElement).value;

          saveToken(token);
        }}>
          <div className="form-group form-group--input">
            <input type="text" id="token" placeholder="API Token" />
          </div>

          <div className="form-group form-group--button">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
