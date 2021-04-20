import * as React from "react";
import { gql, useMutation } from "@apollo/client";

interface RegisterControllerProps {
  children: (data: {
    submit: (values: any) => Promise<null>;
  }) => JSX.Element | null;
}

export const RegisterController: React.FC<RegisterControllerProps> = ({
  children,
}) => {
  const [register] = useMutation(registerMutation);

  const submit = async (values: any) => {
    console.log(values);
    const response = await register({ variables: values });
    console.log("response: ", response);
    return null;
  };
  return children({ submit });
};

const registerMutation = gql`
  mutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      path
      message
    }
  }
`;
