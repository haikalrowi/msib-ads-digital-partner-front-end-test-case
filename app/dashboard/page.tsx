import {
  Anchor,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Group,
  Progress,
  Stack,
  Text,
  Title,
} from "@mantine/core";

function Paket() {
  return (
    <Card className="flex-[2]">
      <Stack>
        <Box className="flex gap-4 max-lg:flex-col">
          <Stack className="flex-1">
            <Group>
              <Text flex={1} size="sm">
                Paket saat ini
              </Text>
              <Group flex={2} gap="xs">
                <Title order={3}>Starter</Title>
                <Badge>Free</Badge>
              </Group>
            </Group>
            <Group>
              <Text flex={1} size="sm">
                Devices
              </Text>
              <Stack flex={2} gap="xs">
                <Progress value={(8 / 10) * 100} />
                <Text size="xs" c="dimmed">
                  8 dari 10 devices tersisa
                </Text>
              </Stack>
            </Group>
            <Group>
              <Text flex={1} size="sm">
                Contacts
              </Text>
              <Stack flex={2} gap="xs">
                <Progress value={5} />
                <Text size="xs" c="dimmed">
                  5 dari 100 kontak yang tersisa
                </Text>
              </Stack>
            </Group>
          </Stack>
          <Stack className="flex-1">
            <Box>
              <Text ta="right" size="xs" c="dimmed">
                Aktif sampai dengan
              </Text>
              <Text ta="right" size="sm">
                Jumat, 23 Agustus 2024
              </Text>
            </Box>
            <Text ta="right" size="sm">
              Upgrade untuk meningkatkan batasan fitur yang ada
            </Text>
            <Group justify="end">
              <Button variant="outline">Upgrade</Button>
            </Group>
          </Stack>
        </Box>
        <Text ta="center" size="xs" c="dimmed">
          Tampilkan kapasitas fitur lainnya
        </Text>
      </Stack>
    </Card>
  );
}

function PesanTerakhir() {
  return (
    <Card className="flex-[1]">
      <Stack>
        <Title order={5}>Pesan terakhir</Title>
        <Stack>
          <Card bg="gray.1" padding="xs">
            <Group>
              <Avatar size="sm" />
              <Box flex={1}>
                <Text size="xs">Anda</Text>
                <Text size="xs" lineClamp={1}>
                  Hai! Bagaimana kabarmu hari ini? Semoga sehat selalu.
                </Text>
              </Box>
              <Badge size="xs">Terkirim</Badge>
            </Group>
          </Card>
          <Card bg="gray.1" padding="xs">
            <Group>
              <Avatar size="sm" />
              <Box flex={1}>
                <Text size="xs">Anda</Text>
                <Text size="xs" lineClamp={1}>
                  Hai! Bagaimana kabarmu hari ini? Semoga sehat selalu.
                </Text>
              </Box>
              <Badge size="xs">Terkirim</Badge>
            </Group>
          </Card>
          <Text ta="right" size="xs">
            <Anchor>Tampilkan lainnya</Anchor>
          </Text>
        </Stack>
      </Stack>
    </Card>
  );
}

function Analitik() {
  return <Card className="flex-1"></Card>;
}

export default function DashboardPage() {
  return (
    <Container>
      <Stack>
        <Box className="flex gap-4 max-md:flex-col">
          <Paket />
          <PesanTerakhir />
        </Box>
        <Analitik />
      </Stack>
    </Container>
  );
}
