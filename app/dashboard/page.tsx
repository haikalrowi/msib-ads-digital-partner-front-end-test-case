import { DonutChart, LineChart } from "@mantine/charts";
import {
  Anchor,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Group,
  Progress,
  Select,
  Stack,
  Text,
  TextInput,
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

function RingkasanHariIni() {
  return (
    <Card className="flex-[1]" withBorder>
      <Stack>
        <Title order={6}>Ringkasan hari ini</Title>
        <Group>
          <Select
            flex={1}
            variant="filled"
            description="Device"
            data={["RMX3263", "SM3263"]}
            defaultSearchValue="RMX3263"
          />
          <TextInput
            flex={1}
            variant="filled"
            description="Aktif sejak"
            defaultValue="29.8.2023"
            readOnly
          />
        </Group>
        <Group>
          <Box>
            <Text size="xs" c="dimmed">
              Pesan keluar
            </Text>
            <Title order={6}>24</Title>
          </Box>
          <Box>
            <Text size="xs" c="dimmed">
              Pesan masuk
            </Text>
            <Title order={6}>7</Title>
          </Box>
          <Box>
            <Text size="xs" c="dimmed">
              Pesan gagal
            </Text>
            <Title order={6}>0</Title>
          </Box>
        </Group>
      </Stack>
    </Card>
  );
}

const data_1 = [
  { name: "Total pesan masuk", value: 23, color: "blue.6" },
  { name: "Total pesan keluar", value: 45, color: "yellow.6" },
  { name: "Total pesan gagal", value: 8, color: "teal.6" },
];

function TotalStatistikPesan() {
  return (
    <Card className="flex-[2]" withBorder>
      <Stack>
        <Title order={6}>Total statistik pemesanan</Title>
        <Group>
          <Stack flex={1}>
            <Box>
              <Text size="xs" c="dimmed">
                Total pesan masuk
              </Text>
              <Title order={6}>{data_1[0].value}</Title>
            </Box>
            <Box>
              <Text size="xs" c="dimmed">
                Total pesan keluar
              </Text>
              <Title order={6}>{data_1[1].value}</Title>
            </Box>
            <Box>
              <Text size="xs" c="dimmed">
                Total pesan gagal
              </Text>
              <Title order={6}>{data_1[2].value}</Title>
            </Box>
          </Stack>
          <Group flex={1} justify="center">
            <DonutChart data={data_1} />
          </Group>
        </Group>
      </Stack>
    </Card>
  );
}

const data_2 = [
  { date: "Mar 22", Oranges: 2338 },
  { date: "Mar 23", Oranges: 2103 },
  { date: "Mar 24", Oranges: 986 },
  { date: "Mar 25", Oranges: 2108 },
  { date: "Mar 26", Oranges: 1726 },
];

function Analitik() {
  return (
    <Card className="flex-1">
      <Stack>
        <Title order={5}>Analitik</Title>
        <Box className="flex gap-4 max-lg:flex-col">
          <RingkasanHariIni />
          <TotalStatistikPesan />
        </Box>
        <Card withBorder>
          <Stack>
            <Group>
              <TextInput
                flex={1}
                variant="filled"
                description="Hari ini"
                defaultValue="24"
                readOnly
              />
              <TextInput
                flex={1}
                variant="filled"
                description="Rata-rata harian"
                defaultValue="7"
                readOnly
              />
              <TextInput
                flex={1}
                variant="filled"
                description="Bulan ini"
                defaultValue="23"
                readOnly
              />
              <TextInput
                flex={1}
                variant="filled"
                description="Rata-rata waktu"
                defaultValue="00:02:42"
                readOnly
              />
            </Group>
            <Title order={6}>Grafik chart perjam</Title>
            <Title c="blue" order={4}>
              512
            </Title>
            <LineChart
              h={256}
              data={data_2}
              dataKey="date"
              series={[{ name: "Oranges", color: "blue.6" }]}
            />
            <Title order={6}>Grafik chart perjam</Title>
            <Title c="blue" order={4}>
              256
            </Title>
            <LineChart
              h={256}
              data={data_2}
              dataKey="date"
              series={[{ name: "Oranges", color: "blue.6" }]}
            />
          </Stack>
        </Card>
      </Stack>
    </Card>
  );
}

export default function DashboardPage() {
  return (
    <Stack>
      <Box className="flex gap-4 max-lg:flex-col">
        <Paket />
        <PesanTerakhir />
      </Box>
      <Analitik />
    </Stack>
  );
}
