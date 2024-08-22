"use client";

import { Tabs, Text } from "@mantine/core";

export default function Section_5_Tabs() {
  return (
    <Tabs variant="pills" defaultValue="bisnis-dan-pemasasran">
      <Tabs.List pb={8} grow>
        <Tabs.Tab value="bisnis-dan-pemasasran">Bisnis dan Pemasaran</Tabs.Tab>
        <Tabs.Tab value="komersial-dan-penjualan">
          Komersial dan Penjualan
        </Tabs.Tab>
        <Tabs.Tab value="organisasi-sosial">Organisasi Sosial</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="bisnis-dan-pemasasran">
        <Text>
          Bidang ini dapat memanfaatkan fitur Broadcast untuk mengirim promosi,
          pengumuman, dan informasi produk kepada pelanggan dalam jumlah besar
          secara efisien. Selain itu, fitur Campaign dapat membantu merencanakan
          dan menyampaikan pesan iklan dengan waktu yang tepat kepada target
          audiens yang sesuai.
        </Text>
      </Tabs.Panel>
      <Tabs.Panel value="komersial-dan-penjualan">
        <Text>
          Dengan fitur broadcast, pelaku bisnis dapat memberi tahu pelanggan
          tentang penawaran khusus, diskon, atau acara penjualan dengan cepat.
          Fitur campaign dapat membantu mengatur kampanye penjualan yang lebih
          terarah dan efektif.
        </Text>
      </Tabs.Panel>
      <Tabs.Panel value="organisasi-sosial">
        <Text>
          Organisasi non-profit dapat menggunakan fitur broadcast untuk
          menginformasikan para donatur tentang proyek, acara komunitas, atau
          inisiatif sosial yang sedang berlangsung. Fitur campaign bisa membantu
          dalam mengingatkan tentang acara atau program yang akan datang.
        </Text>
      </Tabs.Panel>
    </Tabs>
  );
}
