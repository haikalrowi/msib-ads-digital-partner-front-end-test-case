import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const users = [{ username: "username", password: "password" }] as const;

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "username",
          value: users[0].username,
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
          value: users[0].password,
        },
      },
      async authorize(credentials, req) {
        for (const user of users) {
          if (
            credentials?.username === user.username &&
            credentials.password === user.password
          ) {
            return { id: user.username };
          }
        }
        return null;
      },
    }),
  ],
};

export { authOptions };
