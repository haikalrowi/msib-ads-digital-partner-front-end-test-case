"use client";

import { useEffect, useState } from "react";

export default function SignInCsrfToken() {
  const csrfToken = useState("");
  useEffect(() => {
    (async () => {
      const csrfResponse = await fetch("/api/auth/csrf");
      const csrfJson = await csrfResponse.json();
      csrfToken[1](csrfJson.csrfToken);
    })();
  }, []);
  return <input name="csrfToken" type="hidden" value={csrfToken[0]} />;
}
