import Layout from "@/components/dashboard/layout";
import { authOptions } from "@/lib/next-auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/account/signin");
  }
  return <Layout>{children}</Layout>;
}
