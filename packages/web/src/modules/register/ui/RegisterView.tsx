import React from "react";
import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { FormikErrors, FormikProps, FormikValues, withFormik } from "formik";

interface FormValues {
  email: string;
  password: string;
}

interface RegisterViewProps {
  submit: (values: FormValues) => Promise<FormikErrors<FormikValues> | null>;
}

const RegisterView: React.FC<FormikProps<FormValues> & RegisterViewProps> = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
}) => (
  <form
    style={{
      display: "flex",
    }}
    onSubmit={handleSubmit}
  >
    <div
      style={{
        width: 400,
        margin: "auto",
      }}
    >
      <Form.Item>
        <Input
          name="email"
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Form.Item>
        <Input
          name="password"
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Form.Item>
        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
        Or <a href="">login now!</a>
      </Form.Item>
    </div>
  </form>
);

export default withFormik<RegisterViewProps, FormValues>({
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  },
})(RegisterView);
