import { Typography } from '@mui/material';
import SignUpForm from './components/SignUpForm/SignUpForm';

export default function App() {
  const handleSignUp = (values: {
    id: string;
    password: string;
    username?: string;
    phoneNumber?: string;
  }) => {
    console.log('SignUp values:', values);
  };
  return (
    <Typography variant="h1" component="div">
      <SignUpForm onSubmit={handleSignUp} />
    </Typography>
  );
}
