import { Title, Text, Group, Button, Stepper, Skeleton, Input } from '@mantine/core';
import Footer from '../components/global/Footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { auth } from '../lib/firebase';
import { useFirebase } from '../components/providers/FirebaseProvider';
import { useMediaQuery } from '@mantine/hooks';

export default function Setup() {
  const router = useRouter();
  const mobile = useMediaQuery('(max-width: 700px)');
  
  const [active, setActive] = useState(0);
  const { user } = useFirebase();

  useEffect(() => {
      console.log(user);
      if(user?.emailVerified) setActive(1);
  }, [user])

  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Group position='center' direction='column' mt={100}>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step label="Verify Email" description="Check your email for a confirmation." allowStepSelect={false}></Stepper.Step>
          <Stepper.Step label="Update Preferences" description="Make changes to your profile." allowStepSelect={false}>
              <Group position='center' direction={mobile ? 'column' : 'row'} mt='xl' spacing='xl' align='start'>
                <label htmlFor="image-upload">
                    <Skeleton width='200px' height='25px'/>
                    <Skeleton circle width='25px' height='25px'/>
                    <Skeleton width="200px" height="150px"/>
                </label>
                <input type="file" id="image-upload" hidden/>
                <form>
                    <Title order={3}>Profile</Title>
                    <Input/>
                </form>
              </Group>
          </Stepper.Step>
          <Stepper.Step label="Take the Quiz" description="Help us understand who you are." allowStepSelect={false}></Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
      </Stepper>
    </Group>
  );
}
