const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = 3001;

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>GitHub User Explorer</title>

  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-slate-900 text-white min-h-screen p-8">

  <div class="max-w-6xl mx-auto">

    <h1 class="text-5xl font-bold text-center mb-10">
      GitHub User Explorer
    </h1>

    <div class="flex justify-center gap-4 mb-10">
      <input
        id="username"
        type="text"
        placeholder="Digite um usuário do GitHub"
        class="p-4 rounded-xl w-96 text-black"
      />

      <button
        onclick="searchUser()"
        class="bg-blue-600 px-6 py-4 rounded-xl hover:bg-blue-700"
      >
        Pesquisar
      </button>
    </div>

    <div id="loading" class="hidden text-center text-xl">
      Carregando...
    </div>

    <div id="content"></div>

  </div>

<script>

async function searchUser() {
  const username = document.getElementById('username').value;

  const loading = document.getElementById('loading');
  const content = document.getElementById('content');

  loading.classList.remove('hidden');
  content.innerHTML = '';

  try {
    const response = await fetch('/api/user/' + username);

    const data = await response.json();

    loading.classList.add('hidden');

    content.innerHTML = `

      <div class="bg-slate-800 rounded-2xl p-8 flex gap-8 items-center">

        <img
          src="${data.user.avatar_url}"
});
