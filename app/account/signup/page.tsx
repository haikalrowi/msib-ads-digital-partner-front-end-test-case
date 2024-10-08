import Logo from "@/components/ui/logo";
import LogoDark from "@/components/ui/logo-dark";
import DashboardImageDark from "@/public/image-dark.png";
import DashboardImage from "@/public/image.png";
import {
  Anchor,
  Box,
  Button,
  Card,
  Container,
  Fieldset,
  Group,
  Image,
  NumberInput,
  PasswordInput,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

export default function SignUpAccountPage() {
  return (
    <Container>
      <Box className="flex min-h-screen items-center justify-center gap-4 py-4 max-md:flex-col">
        <Group className="relative md:fixed md:left-4 md:top-4">
          <Box darkHidden>
            <Logo />
          </Box>
          <Box lightHidden>
            <LogoDark />
          </Box>
          <Anchor href="/" pos="absolute" inset={0} />
        </Group>
        <Box className="flex items-center justify-center max-md:hidden md:flex-[1]">
          <Box className="relative size-full max-md:h-64">
            <Image
              className="absolute left-2 top-1/2 w-5/6 -translate-y-3/4 shadow-md"
              src={DashboardImage.src}
              alt=""
              radius="md"
            />
            <Image
              className="absolute bottom-1/2 right-2 w-5/6 translate-y-3/4 shadow-md"
              src={DashboardImageDark.src}
              alt=""
              radius="md"
            />
          </Box>
        </Box>
        <Card className="md:flex-[1]" shadow="md" withBorder>
          <Stack gap="xs">
            <Stack gap="xs">
              <Title ta="center" order={2}>
                Welcome to Forwardin
              </Title>
              <Text ta="center">
                Revolutionize your communication journey with Forwardin today
              </Text>
            </Stack>
            <form action="/account/signin">
              <Fieldset variant="unstyled">
                <Stack gap="sm">
                  <TextInput placeholder="Username" size="md" name="username" />
                  <Group>
                    <Select flex={1} data={["+62", "+1", "+2", "+3"]} />
                    <NumberInput
                      placeholder="WhatsApp Phone Number"
                      name="username"
                      flex={4}
                      size="md"
                      hideControls
                    />
                  </Group>
                  <Stack gap="xs">
                    <PasswordInput
                      placeholder="Password"
                      size="md"
                      name="password"
                    />
                    <Card shadow="xs" padding="xs">
                      <Text size="xs">Password harus mengandung:</Text>
                      <Text size="xs" c="gray">
                        Paling tidak 8 karakter
                      </Text>
                      <Text size="xs">
                        Password tidak 3 dari syarat berikut:
                      </Text>
                      <Text size="xs" c="gray">
                        Huruf kecil (a-z)
                      </Text>
                      <Text size="xs" c="gray">
                        Huruf besar (A-Z)
                      </Text>
                      <Text size="xs" c="gray">
                        Angka
                      </Text>
                      <Text size="xs" c="gray">
                        Karakter Spesial (!@#$%^&*)
                      </Text>
                    </Card>
                  </Stack>
                  <Button type="submit" size="md">
                    Sign Up
                  </Button>
                </Stack>
              </Fieldset>
            </form>
            <Text ta="center">
              Sudah punya akun?
              <span> </span>
              <Anchor href="/account/signin">Masuk di sini</Anchor>
            </Text>
          </Stack>
        </Card>
      </Box>
    </Container>
  );
}
