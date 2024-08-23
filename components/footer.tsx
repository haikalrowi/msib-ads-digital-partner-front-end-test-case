import { Box, Center, Group, Stack, Text, Title } from "@mantine/core";
import Logo from "./ui/logo";
import LogoDark from "./ui/logo-dark";

export default function Footer() {
  return (
    <Box className="flex min-h-screen flex-col items-stretch justify-center p-4">
      <Stack>
        <Box className="flex gap-4 max-md:flex-col">
          <Stack className="flex-[3]">
            <Box darkHidden>
              <Logo />
            </Box>
            <Box lightHidden>
              <LogoDark />
            </Box>
            <Text>
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
          <Center darkHidden>
            <Logo size={20} />
          </Center>
          <Center lightHidden>
            <LogoDark size={20} />
          </Center>
        </Group>
      </Stack>
    </Box>
  );
}
