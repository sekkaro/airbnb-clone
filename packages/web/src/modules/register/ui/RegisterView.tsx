import { validUserSchema } from "@airbnb-clone/common";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form as AntForm } from "antd";
import {
  Field,
  FormikErrors,
  FormikProps,
  FormikValues,
  withFormik,
  Form,
} from "formik";
import React from "react";
import { InputField } from "../../shared/InputField";

interface FormValues {
  email: string;
  password: string;
}

interface RegisterViewProps {
  submit: (values: FormValues) => Promise<FormikErrors<FormikValues> | null>;
}

const RegisterView: React.FC<
  FormikProps<FormValues> & RegisterViewProps
> = ({}) => (
  <Form
    style={{
      display: "flex",
    }}
  >
    <div
      style={{
        width: 400,
        margin: "auto",
      }}
    >
      <Field
        name="email"
        prefix={<UserOutlined className="site-form-item-icon" />}
        placeholder="Email"
        component={InputField}
      />
      <Field
        name="password"
        type="password"
        prefix={<LockOutlined className="site-form-item-icon" />}
        placeholder="Password"
        component={InputField}
      />
      <AntForm.Item>
        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </AntForm.Item>
      <AntForm.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
        Or <a href="">login now!</a>
      </AntForm.Item>
    </div>
  </Form>
);

export default withFormik<RegisterViewProps, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  },
})(RegisterView);
