// here we are getting the user session details and this way is specific when we are in a server component

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const user = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const isUserAuthenticated = await isAuthenticated();
  const userDetails = await getUser();
  console.log("Autheticated or not:", isUserAuthenticated);
  //   console.log("This is the user details:", userDetails);

  return (
    <>
      <div>Hi there user</div>
      {isUserAuthenticated ? <div>true</div> : <div>false</div>}
      {userDetails ? <LogoutLink>Log out</LogoutLink> : null}
    </>
  );
};

export default user;
