import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';

export function ToggleDarkMode() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="right" sx={{position:'absolute', top: '1rem', right: '1rem'}}>
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="xl"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
        })}
      >
        {colorScheme === 'dark' ? <Sun size={24} /> : <MoonStars size={24} />}
      </ActionIcon>
    </Group>
  );
}