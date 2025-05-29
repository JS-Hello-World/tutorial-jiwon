import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export type SignUpFormProps = {
  id?: string;
  password?: string;
  username?: string;
  phoneNumber?: string;
  onSubmit?: (values: {
    id: string;
    password: string;
    username?: string;
    phoneNumber?: string;
  }) => void;
};

export default function SignUpForm({
  id: initId,
  password: initPassword,
  username: initUsername,
  phoneNumber: initPhoneNumber,
  onSubmit,
}: SignUpFormProps) {
  const [id, setId] = useState(initId ?? '');
  const [password, setPassword] = useState(initPassword ?? '');
  const [username, setUsername] = useState(initUsername ?? '');
  const [phoneNumber, setPhoneNumber] = useState(initPhoneNumber ?? '');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit?.({ id, password, username, phoneNumber });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            label="ID"
          />
          <TextField
            required
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
          />
          <TextField
            required
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="user name"
          />
          <TextField
            required
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            label="Phone Number"
          />
        </div>
      </Box>
      <Stack spacing={2} direction="row">
        <Button type="submit" variant="contained">
          회원가입
        </Button>
      </Stack>
    </form>
  );
}
