"use server"; // All functions exported from this file are server actions
import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from "next/headers";

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!) //Adding exclaimation fixes the red line
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!); //Adding exclaimation fixes the red line

  const session = (await cookies()).get("appwrite-session"); //////////add await
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!) //Adding exclaimation fixes the red line
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!) //Adding exclaimation fixes the red line
    .setKey(process.env.NEXT_APPWRITE_KEY!); //Adding exclaimation fixes the red line

  return {
    get account() {
      return new Account(client);
    },
    get database(){
        return new Databases(client);
    },
    get user(){
        return new Users(client);
    }
  };
}
