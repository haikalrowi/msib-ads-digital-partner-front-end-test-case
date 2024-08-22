"use client";

import { Accordion, Title } from "@mantine/core";

export default function Section_7_Accordion() {
  return (
    <Accordion variant="separated" defaultValue="apa-itu-forwardin">
      <Accordion.Item value="apa-itu-forwardin">
        <Accordion.Control>
          <Title order={4}>Apa itu Forwardin?</Title>
        </Accordion.Control>
        <Accordion.Panel>
          Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang
          dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup
          WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur
          canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta
          sinkronisasi kontak WhatsApp dan kontak Google.
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="apakah-forwardin-cocok-untuk-saya">
        <Accordion.Control>
          <Title order={4}>Apakah Forwardin cocok untuk saya?</Title>
        </Accordion.Control>
        <Accordion.Panel>
          Fowardln is a powerful communication management tool that simplifies
          message forwarding, enhances contact management, and streamlines
          campaign scheduling for businesses of all sizes.
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="apakah-forwardin-perlu-di-install-ke-komputer">
        <Accordion.Control>
          <Title order={4}>
            Apakah Forwardin perlu di-install ke komputer?
          </Title>
        </Accordion.Control>
        <Accordion.Panel>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          rem sapiente officiis.
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
