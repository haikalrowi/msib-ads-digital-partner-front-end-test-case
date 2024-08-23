import { Button } from "@mantine/core";
import CsrfToken from "../account/csrfToken";

export default function SignOut() {
  return (
    <form action="/api/auth/signout" method="POST">
      <CsrfToken />
      <Button type="submit">Sign Out</Button>
    </form>
  );
}
