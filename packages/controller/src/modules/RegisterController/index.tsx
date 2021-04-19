import * as React from "react";

interface RegisterControllerProps {
  children: (data: {
    submit: (values: any) => Promise<null>;
  }) => JSX.Element | null;
}

export const RegisterController: React.FC<RegisterControllerProps> = ({
  children,
}) => {
  const submit = async (values: any) => {
    console.log(values);
    return null;
  };
  return children({ submit });
};
