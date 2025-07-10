import withAuth from "../util/authenticator";

function Authtest() {
  return <div>This should be secured route</div>;
}

export default withAuth(Authtest);
