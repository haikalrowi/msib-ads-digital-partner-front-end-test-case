import { Box, Group, Stack, Text, Title } from "@mantine/core";
import LogoSymbol from "./ui/logo-symbol";
import LogoType from "./ui/logo-type";

export default function Footer() {
  return (
    <Box className="flex min-h-screen flex-col items-stretch justify-center p-4">
      <Stack>
        <Box className="flex gap-4 max-md:flex-col">
          <Stack className="flex-[3]">
            <Group wrap="nowrap" gap="xs">
              <LogoSymbol size={36} />
              <LogoType size={36} />
            </Group>
            <Text mt="xl">
              Fowardin is your ultimate communication management solution. We
              empower businesses of all sizes with efficient message forwarding,
              streamlined contact management, and powerful campaign scheduling.
              Our mission is to simplify your communication processes, helping
              you engage with your audience effectively and effortlessly. Join
              us in transforming your communication game today!
            </Text>
          </Stack>
          <Stack className="flex-[2]">
            <Title order={3}>Contact Us</Title>
            <Text>
              Fowardin is your ultimate communication management solution. We
              empower businesses of all sizes with efficient message forwarding,
              streamlined contact management, and powerful campaign scheduling.
              Our mission is to simplify your communication processes, helping
              you engage with your audience effectively and effortlessly. Join
              us in transforming your communication game today!
            </Text>
          </Stack>
          <Stack className="flex-[1]">
            <Title order={3}>Let&apos;s talk</Title>
            <Stack>
              <Text>Facebook</Text>
              <Text>Instagram</Text>
              <Text>X (Twitter)</Text>
            </Stack>
          </Stack>
        </Box>
        <Group className="mt-32" justify="center">
          <Text span>Powered By</Text>
          <Group wrap="nowrap" gap="xs">
            <LogoSymbol />
            <LogoType />
          </Group>
        </Group>
      </Stack>
    </Box>
  );
}
