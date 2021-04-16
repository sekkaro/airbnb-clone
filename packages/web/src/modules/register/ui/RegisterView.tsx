import React from "react";
import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { FormikErrors, FormikProps, FormikValues, withFormik } from "formik";
import { validUserSchema } from "@airbnb-clone/common";

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
  touched,
  errors,
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
      <Form.Item
        validateStatus={touched.email && errors.email ? "error" : ""}
        help={touched.email && errors.email ? errors.email : ""}
      >
        <Input
          name="email"
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Form.Item
        validateStatus={touched.password && errors.password ? "error" : ""}
        help={touched.password && errors.password ? errors.password : ""}
      >
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
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  },
})(RegisterView);
