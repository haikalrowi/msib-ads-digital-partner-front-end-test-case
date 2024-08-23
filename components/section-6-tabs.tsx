"use client";

import {
  Box,
  Button,
  Card,
  Group,
  Stack,
  Tabs,
  Text,
  Title,
} from "@mantine/core";
import {
  IconAddressBook,
  IconBroadcast,
  IconDevices,
  IconFileSpreadsheet,
  IconRefresh,
  IconSpeakerphone,
  IconStopwatch,
} from "@tabler/icons-react";

function Features() {
  return (
    <Stack>
      <Group wrap="nowrap" gap="xs">
        <IconStopwatch size={20} />
        <Text size="sm">100 Auto reply</Text>
      </Group>
      <Group wrap="nowrap" gap="xs">
        <IconBroadcast size={20} />
        <Text size="sm">500 Broadcast</Text>
      </Group>
      <Group wrap="nowrap" gap="xs">
        <IconSpeakerphone size={20} />
        <Text size="sm">50 Campaign</Text>
      </Group>
      <Group wrap="nowrap" gap="xs">
        <IconAddressBook size={20} />
        <Text size="sm">500 Contact</Text>
      </Group>
      <Group wrap="nowrap" gap="xs">
        <IconDevices size={20} />
        <Text size="sm">50 Device</Text>
      </Group>
      <Group wrap="nowrap" gap="xs">
        <IconFileSpreadsheet size={20} />
        <Text size="sm">
          Excel/CSV <br /> Contact Import
        </Text>
      </Group>
      <Group wrap="nowrap" gap="xs">
        <IconRefresh size={20} />
        <Text size="sm">
          Google Contact <br /> Sync
        </Text>
      </Group>
    </Stack>
  );
}

function Starter() {
  return (
    <Card>
      <Stack>
        <Title order={2}>Starter</Title>
        <Text className="md:h-48 lg:h-36" size="xs">
          Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati
          pesan otomatis, siaran pesan, dan manajemen kontak yang efisien.
          Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp.
        </Text>
        <Title order={3}>Gratis</Title>
        <Button>Start Now</Button>
        <Features />
      </Stack>
    </Card>
  );
}

function Basic() {
  return (
    <Card>
      <Stack>
        <Title order={2}>Basic</Title>
        <Text className="md:h-48 lg:h-36" size="xs">
          Dapatkan akses selama 1 bulan dengan paket Basic. Manfaatkan fitur
          pesan otomatis, siaran pesan, dan manajemen kontak yang ditingkatkan.
          Rasakan kenyamanan integrasi yang luas dengan sinkronisasi kontak
          Google dan WhatsApp.
        </Text>
        <Title order={3}>
          Rp65.000
          <Text size="xs" span>
            /bulan
          </Text>
        </Title>
        <Button>Get Started</Button>
        <Features />
      </Stack>
    </Card>
  );
}

function Premium() {
  return (
    <Card>
      <Stack>
        <Title order={2}>Premium</Title>
        <Text className="md:h-48 lg:h-36" size="xs">
          Perpanjang pengalaman Anda dengan paket Premium selama 1 bulan.
          Nikmati manfaat pesan otomatis, siaran pesan, dan manajemen kontak
          tanpa batasan. Aktifkan integrasi yang luas dengan sinkronisasi kontak
          Google dan WhatsApp.
        </Text>
        <Title order={3}>
          Rp76.000
          <Text size="xs" span>
            /bulan
          </Text>
        </Title>
        <Button>Get Started</Button>
        <Features />
      </Stack>
    </Card>
  );
}

function Pro() {
  return (
    <Card>
      <Stack>
        <Title order={2}>Pro</Title>
        <Text className="md:h-48 lg:h-36" size="xs">
          Jelajahi seluruh fitur dengan paket Pro selama 1 bulan. Dapatkan
          keuntungan dari pesan otomatis, siaran pesan, serta manajemen kontak
          yang tidak terbatas. Aktifkan integrasi yang luas dengan sinkronisasi
          kontak Google dan WhatsApp.
        </Text>
        <Title order={3}>
          Rp86.000
          <Text size="xs" span>
            /bulan
          </Text>
        </Title>
        <Button>Get Started</Button>
        <Features />
      </Stack>
    </Card>
  );
}

export default function Section_6_Tabs() {
  return (
    <Tabs variant="pills" defaultValue="monthly">
      <Tabs.List justify="center">
        <Tabs.Tab value="monthly">Monthly</Tabs.Tab>
        <Tabs.Tab value="yearly">Yearly</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="monthly">
        <Box className="flex max-md:flex-col">
          <Box className="flex-1">
            <Starter />
          </Box>
          <Box className="flex-1">
            <Basic />
          </Box>
          <Box className="flex-1">
            <Premium />
          </Box>
          <Box className="flex-1">
            <Pro />
          </Box>
        </Box>
      </Tabs.Panel>
      <Tabs.Panel value="yearly">
        <Box className="flex max-md:flex-col">
          <Box className="flex-1">
            <Starter />
          </Box>
          <Box className="flex-1">
            <Basic />
          </Box>
          <Box className="flex-1">
            <Premium />
          </Box>
          <Box className="flex-1">
            <Pro />
          </Box>
        </Box>
      </Tabs.Panel>
    </Tabs>
  );
}
