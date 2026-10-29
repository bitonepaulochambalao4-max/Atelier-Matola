const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><script src="https://cdn.tailwindcss.com"></script><title>Atelier Matola</title></head><body class="bg-white"><div class="p-4"><h1 class="text-3xl font-bold">Atelier Matola - Loja 84 946 8025</h1><p class="mt-2">Bem-vindo a loja oficial!</p><div id="produtos" class="grid grid-cols-2 gap-4 mt-4"></div></div><script>const prod=[{id:1,n:"Blusa Tule Minimal",p:2500,img:"https://images.unsplash.com/photo-1590742489112-3aad46afb7ec"}]; document.getElementById('produtos').innerHTML=prod.map(pr=>\`<div class="border p-2"><img src="\${pr.img}" class="w-full h-32 object-cover"><p>\${pr.n}</p><p>MZN \${pr.p}</p><button onclick="cart.push(pr);document.getElementById('cart').classList.remove('hidden')" class="bg-black text-white px-2 py-1">Comprar</button></div>\`).join(''); let cart=[]; function checkout(){let total=cart.reduce((s,i)=>s+i.p,0); let msg=cart.map(i=>i.n).join(', ')+' - Total MZN '+total; window.open('https://wa.me/258849468025?text='+encodeURIComponent('Ola Atelier! Quero: '+msg))}</script><div id="cart" class="hidden fixed bottom-0 right-0 bg-white border p-4"><button onclick="checkout()" class="bg-green-600 text-white px-4 py-2">Finalizar no WhatsApp</button></div></body></html>`);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Atelier rodando!');
});
