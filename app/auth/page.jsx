// here we are using our custom pages not the ones from kinde

import React from "react";
import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const AuthPage = () => {
  return (
    <>
      <div className="flex flex-col mt-11 items-center justify-center gap-4">
        <LoginLink
          authUrlParams={{
            connection_id: process.env.NEXT_PUBLIC_GOOGLE,
          }}
        >
          Sign in with Google
        </LoginLink>
        <RegisterLink
          authUrlParams={{
            connection_id: process.env.NEXT_PUBLIC_GOOGLE,
          }}
        >
          Sign up with google
        </RegisterLink>
      </div>
    </>
  );
};

export default AuthPage;
