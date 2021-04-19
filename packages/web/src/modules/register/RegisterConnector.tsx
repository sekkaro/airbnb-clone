import React from "react";
import { RegisterController } from "@airbnb-clone/controller";
import RegisterView from "./ui/RegisterView";

export const RegisterConnector: React.FC<{}> = ({}) => {
  return (
    <>
      <RegisterController>
        {({ submit }) => <RegisterView submit={submit} />}
      </RegisterController>
    </>
  );
};
