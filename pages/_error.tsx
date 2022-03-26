import { Box, Button, Title } from "@mantine/core";
import { useRouter } from "next/router";
export default function Login() {
    const router = useRouter();
    return (
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column', gap:'2rem', textAlign: 'center'}}> 
        <Title>404 | This page does not exist.</Title>
        <Button onClick={() => router.replace('/')} variant='light'>Back to Homepage</Button>
    </Box>
    );
}
