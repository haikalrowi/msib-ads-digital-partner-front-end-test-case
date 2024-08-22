import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Section_5_Tabs from "@/components/section-5-tabs";
import Section_6_Tabs from "@/components/section-6-tabs";
import Section_7_Accordion from "@/components/section-7-accordion";
import {
  ActionIcon,
  Box,
  Button,
  Container,
  Fieldset,
  Group,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconArrowRight, IconSearch } from "@tabler/icons-react";

function Section_1() {
  return (
    <Box className="flex min-h-screen flex-col items-center justify-center p-4">
      <Box className="flex gap-4 max-md:flex-col">
        <Stack className="flex-1">
          <Title>
            Elevate Your Messaging Efficiency with Our Innovative Admin Tools
          </Title>
          <Text>
            Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih
            mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan
            pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi
            lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan
            kendali penuh pesan dengan manajemen konten yang praktis.
          </Text>
          <Box>
            <Button rightSection={<IconArrowRight />}>Daftar sekarang</Button>
          </Box>
        </Stack>
        <Box className="flex flex-1 items-center justify-center">
          {<Box bg="blue" w={240} h={240} />}
          {/* <Image radius="md" alt="" /> */}
        </Box>
      </Box>
    </Box>
  );
}

function Section_2() {
  return (
    <Box className="flex min-h-screen flex-col items-center justify-center p-4">
      <Box className="flex gap-4 max-md:flex-col">
        <Stack className="flex-1 md:order-2">
          <Title>Reach Further with Ease</Title>
          <Text>
            Fowardin memberikan Anda akses cepat untuk memperluas jangkauan
            komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim
            pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens
            Anda tidak pernah semudah ini.
          </Text>
        </Stack>
        <Box className="flex flex-1 items-center justify-center md:order-1">
          {<Box bg="blue" w={240} h={240} />}
          {/* <Image radius="md" alt="" /> */}
        </Box>
      </Box>
    </Box>
  );
}

function Section_3() {
  return (
    <Box className="flex min-h-screen flex-col items-center justify-center p-4">
      <Box className="flex gap-4 max-md:flex-col">
        <Stack className="flex-1">
          <Title>Right Time, Effective Messages</Title>
          <Text>
            Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang
            tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan
            pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan
            Fowardin, setiap pesan iklan memiliki dampak yang lebih besar.
          </Text>
        </Stack>
        <Box className="flex flex-1 items-center justify-center">
          {<Box bg="blue" w={240} h={240} />}
          {/* <Image radius="md" alt="" /> */}
        </Box>
      </Box>
    </Box>
  );
}

function Section_4() {
  return (
    <Box className="flex min-h-screen flex-col items-center justify-center p-4">
      <Box className="flex gap-4 max-md:flex-col">
        <Stack className="flex-1">
          <Title>Respond Faster with the Convenience of Auto Reply</Title>
          <Text>
            Fowardin mempermudah Anda untuk memberikan respon cepat kepada pesan
            dari banyak kontak dan grup sekaligus. Dengan fitur Auto Reply kami,
            Anda dapat menjawab pertanyaan atau memberikan respon otomatis,
            menghemat waktu dan energi Anda. Tanggap lebih cepat dengan
            Fowardin.
          </Text>
        </Stack>
        <Box className="flex flex-1 items-center justify-center">
          {<Box bg="blue" w={240} h={240} />}
          {/* <Image radius="md" alt="" /> */}
        </Box>
      </Box>
    </Box>
  );
}

function Section_5() {
  return (
    <Box className="flex min-h-screen flex-col items-center justify-center p-4">
      <Stack>
        <Title ta="center">
          &quot;One Step Closer to More Effective and
          <br />
          Connected Communication!&quot;
        </Title>
        <Box className="flex gap-4 max-md:flex-col">
          <Box className="flex flex-[20%] items-center justify-center">
            {<Box bg="blue" w={120} h={120} />}
            {/* <Image radius="md" alt="" /> */}
          </Box>
          <Box className="flex-[80%]" h={192}>
            <Section_5_Tabs />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

function Section_6() {
  return (
    <Box className="flex min-h-screen flex-col items-stretch justify-center p-4">
      <Stack>
        <Title ta="center">Our Pricing</Title>
        <Section_6_Tabs />
      </Stack>
    </Box>
  );
}

function Section_7() {
  return (
    <Box className="flex min-h-screen flex-col items-stretch justify-center p-4">
      <Stack>
        <Title ta="center">Frequently Asked Questions</Title>
        <form>
          <Fieldset variant="unstyled">
            <Group wrap="nowrap">
              <TextInput flex={1} />
              <ActionIcon variant="transparent">
                <IconSearch />
              </ActionIcon>
            </Group>
          </Fieldset>
        </form>
        <Section_7_Accordion />
      </Stack>
    </Box>
  );
}

export default function RootPage() {
  return (
    <Container>
      <Navbar />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_6 />
      <Section_7 />
      <Footer />
    </Container>
  );
}
