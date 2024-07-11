// here i am using the custompages as provided by kinde

import Image from "next/image";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <>
      <div className="text-center text-5xl font-bold mt-9">
        This is using Kinde⚡
      </div>
      <div className="flex flex-col mt-11 items-center justify-center gap-4">
        <LoginLink>Sign in</LoginLink>
        <RegisterLink>Sign up</RegisterLink>
      </div>
    </>
  );
}
