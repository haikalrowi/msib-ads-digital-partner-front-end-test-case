import { NavLink, Text } from "@mantine/core";
import {
  IconAddressBook,
  IconApi,
  IconBroadcast,
  IconDeviceMobile,
  IconGraph,
  IconHelp,
  IconLayoutDashboard,
  IconMailDown,
  IconMailUp,
  IconMessage,
  IconMessages,
  IconSettings,
  IconSpeakerphone,
  IconStopwatch,
  IconUsersGroup,
} from "@tabler/icons-react";
import { useState } from "react";

type NavItem = {
  icon: React.ReactNode;
  label: string;
  nest?: NavItem[];
};

function RecursiveNavLink({
  items,
  active,
  setActive,
}: {
  items: NavItem[];
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}) {
  return items.map((item, index) => (
    <NavLink
      key={index}
      classNames={{ root: "rounded-xl" }}
      variant="filled"
      label={item.label}
      leftSection={item.icon}
      active={item.label === active}
      defaultOpened
      onClick={() => setActive(item.label)}
    >
      {item.nest && (
        <RecursiveNavLink
          items={item.nest}
          active={active}
          setActive={setActive}
        />
      )}
    </NavLink>
  ));
}

export default function Navbar() {
  const [active, setActive] = useState("Dashboard");
  const items_main = (
    <RecursiveNavLink
      active={active}
      setActive={setActive}
      items={[
        {
          icon: <IconLayoutDashboard size={16} />,
          label: "Dashboard",
        },
        {
          icon: <IconDeviceMobile size={16} />,
          label: "Device",
        },
        {
          icon: <IconAddressBook size={16} />,
          label: "Contacts",
          nest: [
            { icon: <IconAddressBook size={16} />, label: "Contact" },
            { icon: <IconUsersGroup size={16} />, label: "Group" },
          ],
        },
        {
          icon: <IconMessages size={16} />,
          label: "Message List",
          nest: [
            { icon: <IconMessage size={16} />, label: "Messenger" },
            { icon: <IconMailDown size={16} />, label: "Incoming Chat" },
            { icon: <IconMailUp size={16} />, label: "Outgoing Chat" },
          ],
        },
      ]}
    />
  );
  const items_tools = (
    <>
      <Text mt="xs" size="xs" c="dimmed">
        Tools
      </Text>
      <RecursiveNavLink
        active={active}
        setActive={setActive}
        items={[
          { icon: <IconBroadcast size={16} />, label: "Broadcast" },
          { icon: <IconSpeakerphone size={16} />, label: "Campaign" },
          { icon: <IconStopwatch size={16} />, label: "Auto Reply" },
          { icon: <IconHelp size={16} />, label: "Customer Service" },
          { icon: <IconGraph size={16} />, label: "Analytics" },
          { icon: <IconApi size={16} />, label: "Forwardin API" },
        ]}
      />
    </>
  );
  const items_others = (
    <>
      <Text mt="xs" size="xs" c="dimmed">
        Others
      </Text>
      <RecursiveNavLink
        active={active}
        setActive={setActive}
        items={[{ icon: <IconSettings size={16} />, label: "Settings" }]}
      />
    </>
  );
  return (
    <>
      {items_main}
      {items_tools}
      {items_others}
    </>
  );
}
