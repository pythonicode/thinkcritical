import { Title, Text, Group, Button } from '@mantine/core';
import { Login } from 'tabler-icons-react';
import Information from '../components/homepage/Infomation';
import Footer from '../components/global/Footer';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  return (
    <Group position='center' direction='column'>
      <Title sx={{fontSize: 'min(5rem, 12vw)'}} align="center" mt={100}>
        Think<Text inherit component='span' variant='gradient'>Critical</Text>
      </Title>
      <Group mb={100}>
        <Button onClick={() => {router.push('/login')}} size='md' leftIcon={<Login size={18}/>}>Login</Button>
        <Button size='md' variant='outline'>Read More</Button>
      </Group>
      <Information/>
      <Footer/>
    </Group>
  );
}
