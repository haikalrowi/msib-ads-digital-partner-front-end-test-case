import CsrfToken from "@/components/account/csrfToken";
import LogoSymbol from "@/components/ui/logo-symbol";
import LogoType from "@/components/ui/logo-type";
import { authOptions } from "@/lib/next-auth";
import {
  Anchor,
  Box,
  Button,
  Card,
  Container,
  Fieldset,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function SignInAccountPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }
  const lupaPassword = searchParams.state === "lupa-password";
  const cekEmail = searchParams.state === "cek-email";
  const passwordBaru = searchParams.state === "password-baru";
  return (
    <Container>
      <Box className="flex min-h-screen items-center justify-center gap-4 py-4 max-md:flex-col">
        <Group className="relative md:fixed md:left-4 md:top-4">
          <LogoSymbol size={32} />
          <LogoType size={24} />
          <Anchor href="/" pos="absolute" inset={0} />
        </Group>
        <Box className="flex items-center justify-center max-md:hidden md:flex-[1]">
          {<Box bg="blue" w={240} h={240} />}
          {/* <Image radius="md" alt="" /> */}
        </Box>
        <Stack className="md:flex-[1]" gap="xs">
          <Stack gap="xs">
            <Title ta="center" order={2}>
              {lupaPassword
                ? "Password Recovery"
                : cekEmail
                  ? "Cek Email"
                  : passwordBaru
                    ? "New Password"
                    : "Welcome back"}
            </Title>
            <Text ta="center">
              {lupaPassword
                ? "Kami akan membantu Anda mengatur ulang kata sandi Anda dengan cepat"
                : cekEmail
                  ? "Cek email yang anda masukkan tadi, kemudian ikuti instruksi untuk proses pemulihan"
                  : passwordBaru
                    ? "Masukkan Password Baru"
                    : "We're so excited to see you again!"}
            </Text>
          </Stack>
          <form
            method={lupaPassword ? "GET" : "POST"}
            action={
              lupaPassword
                ? "?state=cek-email"
                : "/api/auth/callback/credentials?callbackUrl=/dashboard"
            }
          >
            {!lupaPassword && <CsrfToken />}
            <Fieldset variant="unstyled">
              <Stack gap="sm">
                <Stack gap="xs">
                  {lupaPassword && (
                    <Card bg="gray.1" padding="xs">
                      <Text size="xs" c="gray">
                        Mohon masukkan alamat email Anda di bawah ini dan kami
                        akan mengirimkan instruksi untuk proses pemulihan
                      </Text>
                    </Card>
                  )}
                  {!cekEmail && !passwordBaru && (
                    <TextInput
                      placeholder={lupaPassword ? "Email" : "Username"}
                      size="md"
                      defaultValue={lupaPassword ? undefined : "username"}
                      name={lupaPassword ? undefined : "username"}
                    />
                  )}
                </Stack>
                {!lupaPassword && !cekEmail && (
                  <Stack gap="xs">
                    <PasswordInput
                      placeholder={
                        passwordBaru ? "Buat Password Baru" : "Password"
                      }
                      size="md"
                      defaultValue={passwordBaru ? undefined : "password"}
                      name="password"
                    />
                    {passwordBaru && (
                      <PasswordInput
                        placeholder={
                          passwordBaru ? "Konfirmasi Password Baru" : "Password"
                        }
                        size="md"
                        defaultValue={passwordBaru ? undefined : "password"}
                        name="password"
                      />
                    )}
                    {!passwordBaru && (
                      <Text>
                        <Anchor href="?state=lupa-password">
                          Lupa password
                        </Anchor>
                      </Text>
                    )}
                  </Stack>
                )}
                {lupaPassword ? (
                  <Button component="a" href="?state=cek-email">
                    Konfirmasi
                  </Button>
                ) : cekEmail ? (
                  <>
                    <Text>
                      Kode tidak terkirim?
                      <span> </span>
                      <Anchor href="?state=cek-email">Coba lagi</Anchor>
                    </Text>
                    <Text>
                      Ingin mengganti email?
                      <span> </span>
                      <Anchor href="?state=lupa-password">Kembali</Anchor>
                    </Text>
                    <Button component="a" href="?state=password-baru">
                      Selanjutnya
                    </Button>
                  </>
                ) : passwordBaru ? (
                  <Button component="a" href="?">
                    Simpan
                  </Button>
                ) : (
                  <Button type="submit" size="md">
                    Sign In
                  </Button>
                )}
              </Stack>
            </Fieldset>
          </form>
          {!lupaPassword && !cekEmail && !passwordBaru && (
            <Text ta="center">
              Butuh buat akun?
              <span> </span>
              <Anchor href="/account/signup">Daftar di sini</Anchor>
            </Text>
          )}
        </Stack>
      </Box>
    </Container>
  );
}
