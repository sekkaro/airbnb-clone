import * as React from "react";
import { Form, Input } from "antd";
import { FieldProps } from "formik";

export const InputField: React.FC<FieldProps<any> & {}> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const errorMsg = touched[field.name] && errors[field.name];
  return (
    <Form.Item help={errorMsg} validateStatus={errorMsg ? "error" : ""}>
      <Input {...field} {...props} />
    </Form.Item>
  );
};
