"use client";

import {
  ActionIcon,
  AppShell,
  Avatar,
  Burger,
  Button,
  Center,
  Container,
  Group,
  HoverCard,
  ScrollArea,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBell,
  IconCalendar,
  IconMoon,
  IconSettings,
} from "@tabler/icons-react";
import Logo from "../ui/logo";
import Navbar from "./navbar";
import SignOut from "./signout";

export default function Layout({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme();
  const [opened, { toggle, close }] = useDisclosure();
  const { toggleColorScheme } = useMantineColorScheme();
  const newVariable = (
    <Group flex={1}>
      <Burger
        hiddenFrom="sm"
        flex={0}
        size="sm"
        opened={opened}
        onClick={toggle}
      />
      <Group flex={1} justify="end">
        <ActionIcon variant="default" radius="xl" onClick={toggleColorScheme}>
          <IconMoon size={20} />
        </ActionIcon>
        <ActionIcon variant="default" radius="xl">
          <IconBell size={20} />
        </ActionIcon>
        <HoverCard>
          <HoverCard.Target>
            <Button
              variant="default"
              size="xs"
              rightSection={
                <Avatar
                  visibleFrom="sm"
                  variant="filled"
                  size="xs"
                  color="blue"
                />
              }
              radius="xl"
            >
              Haikal Rowi
            </Button>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <SignOut />
          </HoverCard.Dropdown>
        </HoverCard>
        <ActionIcon variant="default" radius="xl">
          <IconSettings size={20} />
        </ActionIcon>
      </Group>
    </Group>
  );
  const newVariable2 = (
    <Group flex={1}>
      <Title flex={2} order={3}>
        Selamat datang, Haikal Rowi
      </Title>
      <Group flex={1} visibleFrom="sm" gap="xs">
        <Stack flex={4} gap={0}>
          <Text ta="right" size="xs" c="dimmed">
            Tanggal hari ini
          </Text>
          <Text ta="right" size="sm">
            Jumat, 23 Agustus 2024
          </Text>
        </Stack>
        <ThemeIcon variant="transparent" color="gray">
          <IconCalendar />
        </ThemeIcon>
      </Group>
    </Group>
  );
  return (
    <AppShell
      layout="alt"
      header={{ height: { base: 16 * 10, sm: 16 * 8 } }}
      navbar={{
        width: 16 * 16,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header withBorder={false}>
        <Container h="100%">
          <Stack h="100%">
            {newVariable}
            {newVariable2}
          </Stack>
        </Container>
      </AppShell.Header>
      <AppShell.Navbar p="md" onClick={close}>
        <AppShell.Section>
          <Center>
            <Logo fill={theme.colors.blue[6]} />
          </Center>
        </AppShell.Section>
        <AppShell.Section mt="md" component={ScrollArea} grow>
          <Navbar />
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
        <Container>{children}</Container>
      </AppShell.Main>
    </AppShell>
  );
}
