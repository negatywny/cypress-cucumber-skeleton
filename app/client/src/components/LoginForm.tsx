import React, { useEffect } from 'react';
import { Button } from './Button';
import { InputField } from './InputField';
import { useForm } from 'react-hook-form';
import { useAuth } from '../hooks/auth.hook';

interface LoginFormProps {
  onLogin: () => void;
}

type LoginFormData = {
  email: string;
  password: string;
};

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const {
    register,
    handleSubmit: handleReactHookFormSubmit,
    formState,
  } = useForm<LoginFormData>();

  const { login, user, error } = useAuth();

  useEffect(() => {
    if (user) {
      onLogin();
    }
  }, [user, onLogin]);

  const handleSubmit = handleReactHookFormSubmit(({ email, password }) => {
    login(email, password);
  });

  return (
    <div className="flex flex-col gap-4 w-[380px]">
      <h5 className="text-xl" data-cy="login_modal_header">Login</h5>
      <form noValidate className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <InputField
          label="Email"
          data-cy="email_input"
          expand="full"
          type="email"
          dataCy='email_error'
          errorMessage={formState.errors.email?.message as string}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Email is not valid',
            },
          })}
        />

        <InputField
          label="Password"
          data-cy="password_input"
          expand="full"
          type="password"
          dataCy='password_error'
          errorMessage={formState.errors.password?.message as string}
          {...register('password', {
            required: 'Password is required',
          })}
        />

        {error && <div className="text-red-500" data-cy="modal_error">{error}</div>}

        <Button 
          expand="full" 
          data-cy="submit_button"
        >
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
