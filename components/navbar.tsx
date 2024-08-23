"use client";

import {
  Anchor,
  Box,
  Burger,
  Button,
  Card,
  Center,
  Collapse,
  Group,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import Logo from "./ui/logo";
import LogoDark from "./ui/logo-dark";

export default function Navbar() {
  const [opened, { toggle }] = useDisclosure();
  const logo = (
    <Group pos="relative" wrap="nowrap" gap="xs">
      <Center darkHidden>
        <Logo />
      </Center>
      <Center lightHidden>
        <LogoDark />
      </Center>
      <Anchor href="/" pos="absolute" inset={0} />
    </Group>
  );
  const items = (
    <>
      <Button variant="transparent" size="compact-sm">
        Features
      </Button>
      <Button variant="transparent" size="compact-sm" color="gray">
        Pricing
      </Button>
      <Button variant="transparent" size="compact-sm" color="gray">
        Demo
      </Button>
      <Button variant="transparent" size="compact-sm" color="gray">
        Blog
      </Button>
      <Button component={Link} href="/account/signin">
        Sign In
      </Button>
    </>
  );
  return (
    <>
      <Box className="sticky top-2 z-10 md:hidden">
        <Card padding="xs">
          <Stack>
            <Group justify="space-between">
              {logo}
              <Burger opened={opened} onClick={toggle} />
            </Group>
            <Collapse in={opened}>
              <Stack>{items}</Stack>
            </Collapse>
          </Stack>
        </Card>
      </Box>
      <Box className="fixed left-1/2 top-2 z-10 -translate-x-1/2 max-md:hidden">
        <Card shadow="sm" padding="xs">
          <Group wrap="nowrap">
            {logo}
            {items}
          </Group>
        </Card>
      </Box>
    </>
  );
}
