import Footer from '../components/global/Footer';
import { Button, Group, TextInput, Text, Divider, Anchor, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { AlertCircle, BrandGoogle } from 'tabler-icons-react';
import { useState } from 'react';
import { createAccount } from '../lib/authentication';
import { useNotifications } from '@mantine/notifications';
import { useRouter } from 'next/router';

export default function Login() {

  const [mode, setMode] = useState('login');
  const notifications = useNotifications();
  const router = useRouter();
  
  const loginForm = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => ((/^\S+@\S+$/.test(value) ? null : 'Invalid email, please try again.')),
    },
  });

  const createAccountForm = useForm({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },

    validate: {
      email: (value) => ((/^\S+@\S+$/.test(value) ? null : 'Invalid email, please try again.')),
      confirmPassword: (value, values) => (value !== values.password ? 'Passwords did not match' : null),
    },
  });

  async function handleCreateAccount(email: string, password: string) {
    const { result, error } = await createAccount(email, password);
    if(error) {
        notifications.showNotification({
            icon: <AlertCircle/>,
            color: 'red',
            title: "An error has occured.",
            message: error.code
        })
    } else router.replace('/setup');
  }

  return (
    <Group position='center' direction='column' sx={{height: '100vh'}}>
      <form className='login' onSubmit={mode == 'login' ? loginForm.onSubmit((values) => console.log(values)) : createAccountForm.onSubmit(({email, password}) => handleCreateAccount(email, password))}>
        <Button color='red' leftIcon={<BrandGoogle size={18}/>}> Sign in with Google</Button>
        <Group position='center' grow>
            <Divider my='sm'/>
            <Text color='dimmed' size='sm' align='center'>or</Text>
            <Divider my='sm'/>
        </Group>
        <TextInput required label="Email" placeholder='you@example.com' {...loginForm.getInputProps('email')} {...createAccountForm.getInputProps('email')}/>
        <PasswordInput required label="Password" placeholder='Password' {...loginForm.getInputProps('password')} {...createAccountForm.getInputProps('password')}/>
        {mode == 'login' 
        && (<>
            <Button type='submit'>Login</Button>
            <Text color='dimmed' size='sm' align='center'>Don't have an account? <Anchor inherit onClick={() => setMode('create')}>Create Account</Anchor></Text>
        </>)}
        {mode == 'create' 
        && (<>
            <PasswordInput required label="Confirm Password" placeholder='Confirm Password' {...createAccountForm.getInputProps('confirmPassword')}/>
            <Button type='submit'>Create Account</Button>
            <Text color='dimmed' size='sm' align='center'>Already have an account? <Anchor inherit onClick={() => setMode('login')}>Sign In</Anchor></Text>
        </>)}
      </form>
      <Footer/>
    </Group>
  );
}
