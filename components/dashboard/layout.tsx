"use client";

import {
  AppShell,
  Burger,
  Group,
  NavLink,
  NavLinkVariant,
  ScrollArea,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconAddressBook,
  IconApi,
  IconBroadcast,
  IconDeviceMobile,
  IconGraph,
  IconHelp,
  IconLayoutDashboard,
  IconMailDown,
  IconMailUp,
  IconMessage,
  IconMessages,
  IconSettings,
  IconSpeakerphone,
  IconStopwatch,
  IconUsersGroup,
} from "@tabler/icons-react";
import { useState } from "react";
import LogoSymbol from "../ui/logo-symbol";
import LogoType from "../ui/logo-type";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const navigationVariant: NavLinkVariant = "filled";
  type NavigationData = {
    icon: React.ReactNode;
    label: string;
    children?: React.ReactNode;
  }[];
  const navigation_main: NavigationData = [
    {
      icon: <IconLayoutDashboard size={16} />,
      label: "Dashboard",
    },
    {
      icon: <IconDeviceMobile size={16} />,
      label: "Device",
    },
    {
      icon: <IconAddressBook size={16} />,
      label: "Contacts",
      children: (
        <>
          <NavLink
            classNames={{ root: "rounded-xl" }}
            variant={navigationVariant}
            active={-1 === active}
            label="Contact"
            leftSection={<IconAddressBook size={16} />}
            onClick={() => setActive(-1)}
          />
          <NavLink
            classNames={{ root: "rounded-xl" }}
            variant={navigationVariant}
            active={-2 === active}
            label="Group"
            leftSection={<IconUsersGroup size={16} />}
            onClick={() => setActive(-2)}
          />
        </>
      ),
    },
    {
      icon: <IconMessages size={16} />,
      label: "Message List",
      children: (
        <>
          <NavLink
            classNames={{ root: "rounded-xl" }}
            variant={navigationVariant}
            active={-3 === active}
            label="Messenger"
            leftSection={<IconMessage size={16} />}
            onClick={() => setActive(-3)}
          />
          <NavLink
            classNames={{ root: "rounded-xl" }}
            variant={navigationVariant}
            active={-4 === active}
            label="Incoming Chat"
            leftSection={<IconMailDown size={16} />}
            onClick={() => setActive(-4)}
          />
          <NavLink
            classNames={{ root: "rounded-xl" }}
            variant={navigationVariant}
            active={-5 === active}
            label="Outgoing Chat"
            leftSection={<IconMailUp size={16} />}
            onClick={() => setActive(-5)}
          />
        </>
      ),
    },
  ];
  const navigation_main_jsx = navigation_main.map((item, index) => (
    <NavLink
      key={item.label}
      classNames={{ root: "rounded-xl" }}
      variant={navigationVariant}
      active={index === active}
      label={item.label}
      leftSection={item.icon}
      defaultOpened
      onClick={() => setActive(index)}
    >
      {item.children}
    </NavLink>
  ));
  const navigation_tools: NavigationData = [
    { icon: <IconBroadcast size={16} />, label: "Broadcast" },
    { icon: <IconSpeakerphone size={16} />, label: "Campaign" },
    { icon: <IconStopwatch size={16} />, label: "Auto Reply" },
    { icon: <IconHelp size={16} />, label: "Customer Service" },
    { icon: <IconGraph size={16} />, label: "Analytics" },
    { icon: <IconApi size={16} />, label: "Forwardin API" },
  ];
  const navigation_tools_jsx = (
    <>
      <Text mt="xs" size="xs">
        Tools
      </Text>
      {navigation_tools.map((item, index) => (
        <NavLink
          key={item.label}
          classNames={{ root: "rounded-xl" }}
          variant={navigationVariant}
          active={index + 100 === active}
          label={item.label}
          leftSection={item.icon}
          onClick={() => setActive(index + 100)}
        />
      ))}
    </>
  );
  const navigation_others: NavigationData = [
    { icon: <IconSettings size={16} />, label: "Settings" },
  ];
  const navigation_others_jsx = (
    <>
      <Text mt="xs" size="xs">
        Others
      </Text>
      {navigation_others.map((item, index) => (
        <NavLink
          key={item.label}
          classNames={{ root: "rounded-xl" }}
          variant={navigationVariant}
          active={index + 200 === active}
          label={item.label}
          leftSection={item.icon}
          onClick={() => setActive(index + 200)}
        />
      ))}
    </>
  );
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      layout="alt"
      header={{ height: 16 * 4 }}
      navbar={{
        width: 16 * 16,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header hiddenFrom="sm">
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <AppShell.Section>
          <Group justify="center" gap="xs">
            <LogoSymbol size={24} />
            <LogoType size={24} />
          </Group>
        </AppShell.Section>
        <AppShell.Section mt="md" component={ScrollArea} grow>
          {navigation_main_jsx}
          {navigation_tools_jsx}
          {navigation_others_jsx}
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
