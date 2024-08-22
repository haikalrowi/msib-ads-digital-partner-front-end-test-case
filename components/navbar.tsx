"use client";

import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Card,
  Group,
  Stack,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMenu2 } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import LogoSymbol from "./ui/logo-symbol";
import LogoType from "./ui/logo-type";

export default function Navbar() {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure();
  const logo = (
    <Group pos="relative" wrap="nowrap" gap="xs">
      <LogoSymbol size={24} />
      <LogoType size={20} />
      <Anchor href="/" pos="absolute" inset={0} />
    </Group>
  );
  const items = (
    <>
      <Button variant="transparent" size="compact-sm">
        Features
      </Button>
      <Button variant="transparent" size="compact-sm" color="dark">
        Pricing
      </Button>
      <Button variant="transparent" size="compact-sm" color="dark">
        Demo
      </Button>
      <Button variant="transparent" size="compact-sm" color="dark">
        Blog
      </Button>
      <Button onClick={() => router.push("/account/signin")}>Sign In</Button>
    </>
  );
  return (
    <>
      <Box className="sticky top-2 z-10 md:hidden">
        <Card padding="xs">
          <Stack>
            <Group justify="space-between">
              {logo}
              <ActionIcon variant="transparent" onClick={toggle}>
                <IconMenu2 />
              </ActionIcon>
            </Group>
            <Transition
              keepMounted
              transition="pop"
              duration={100}
              mounted={opened}
            >
              {(styles) => <Stack style={styles}>{items}</Stack>}
            </Transition>
          </Stack>
        </Card>
      </Box>
      <Box className="fixed left-1/2 top-2 z-10 -translate-x-1/2 max-md:hidden">
        <Card className="bg-white/90" shadow="sm" padding="xs">
          <Group wrap="nowrap">
            {logo}
            {items}
          </Group>
        </Card>
      </Box>
    </>
  );
}
