import { Client, Account, ID, Teams } from "appwrite";

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("686f8911000c95bfb037");

const account = new Account(client);
const teams = new Teams(client);

export async function registerUser(email, password, name) {
  return await account.create(ID.unique(), email, password, name);
}

export async function loginUser(email, password) {
  return await account.createEmailSession(email, password);
}

export async function getCurrentUser() {
  return await account.get();
}

export async function logoutUser() {
  return await account.deleteSession("current");
}

export async function isUserAdmin() {
  const list = await teams.list();
  return list.teams.some((t) => t.$id === "admins");
}