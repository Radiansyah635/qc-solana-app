import { Client, Account, Databases, Storage, ID } from 'https://cdn.jsdelivr.net/npm/appwrite@13.0.1/+esm';

const client = new Client();
client
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject('686f8911000c95bfb037'); // Ganti dengan ID Project kamu

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

window.registerUser = async function registerUser(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value;

  try {
    await account.create(ID.unique(), email, password, name);
    alert('Registrasi berhasil! Silakan login.');
    window.location.href = 'index.html';
  } catch (error) {
    alert('Gagal registrasi: ' + error.message);
  }
};

window.loginUser = async function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    await account.createEmailSession(email, password);
    alert('Login berhasil!');
    window.location.href = 'dashboard.html';
  } catch (error) {
    alert('Login gagal: ' + error.message);
  }
};

window.logoutUser = async function logoutUser() {
  try {
    await account.deleteSession('current');
    alert('Logout berhasil!');
    window.location.href = 'index.html';
  } catch (error) {
    alert('Logout gagal: ' + error.message);
  }
};

window.submitAgenda = async function submitAgenda(event) {
  event.preventDefault();
  const title = document.getElementById('agendaTitle').value;
  const desc = document.getElementById('agendaDesc').value;
  const file = document.getElementById('agendaFile').files[0];

  try {
    const user = await account.get();
    let fileId = "";

    if (file) {
      const uploaded = await storage.createFile('qc_files', ID.unique(), file);
      fileId = uploaded.$id;
    }

    await databases.createDocument('qc_system', 'agenda', ID.unique(), {
      title: title,
      desc: desc,
      fileId: fileId,
      userId: user.$id
    });

    alert('Agenda berhasil ditambahkan!');
  } catch (error) {
    alert('Gagal menambahkan agenda: ' + error.message);
  }
};