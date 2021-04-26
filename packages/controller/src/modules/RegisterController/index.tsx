import * as React from "react";
import {
  RegisterMutationVariables,
  useRegisterMutation,
} from "src/generated/graphql";

interface RegisterControllerProps {
  children: (data: {
    submit: (values: RegisterMutationVariables) => Promise<null>;
  }) => JSX.Element | null;
}

export const RegisterController: React.FC<RegisterControllerProps> = ({
  children,
}) => {
  const [register] = useRegisterMutation();

  const submit = async (values: RegisterMutationVariables) => {
    console.log(values);
    const response = await register({ variables: values });
    console.log("response: ", response);
    return null;
  };
  return children({ submit });
};
