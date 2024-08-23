"use client";

import {
  ActionIcon,
  AppShell,
  Avatar,
  Burger,
  Container,
  Group,
  HoverCard,
  ScrollArea,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBell, IconCalendar, IconSettings } from "@tabler/icons-react";
import LogoSymbol from "../ui/logo-symbol";
import LogoType from "../ui/logo-type";
import Navbar from "./navbar";
import SignOut from "./signout";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle, close }] = useDisclosure();
  const newVariable = (
    <Group flex={1}>
      <Burger hiddenFrom="sm" size="sm" opened={opened} onClick={toggle} />
      <Group flex={1} justify="end">
        <ActionIcon variant="white" radius="xl">
          <IconBell size={20} />
        </ActionIcon>
        <HoverCard>
          <HoverCard.Target>
            <Group className="rounded-full" p={4} bg="white" gap="xs">
              <Text px="md" visibleFrom="sm" size="sm">
                Haikal Rowi
              </Text>
              <Avatar size="sm" />
            </Group>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <SignOut />
          </HoverCard.Dropdown>
        </HoverCard>
        <ActionIcon variant="white" radius="xl">
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
        <ThemeIcon flex={1} variant="transparent">
          <IconCalendar />
        </ThemeIcon>
      </Group>
    </Group>
  );
  const logo = (
    <Group justify="center" gap="xs">
      <LogoSymbol size={24} />
      <LogoType size={24} />
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
      <AppShell.Header bg="gray.1" withBorder={false}>
        <Container h="100%">
          <Stack h="100%">
            {newVariable}
            {newVariable2}
          </Stack>
        </Container>
      </AppShell.Header>
      <AppShell.Navbar p="md" onClick={close}>
        <AppShell.Section>{logo}</AppShell.Section>
        <AppShell.Section mt="md" component={ScrollArea} grow>
          <Navbar />
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main bg="gray.1">
        <Container>{children}</Container>
      </AppShell.Main>
    </AppShell>
  );
}
