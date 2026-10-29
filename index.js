const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Inter:wght@400;600&display=swap" rel="stylesheet">
<title>Atelier Matola | Moda Feminina</title>
<style>body{font-family:'Inter',sans-serif} h1,h2{font-family:'Playfair Display',serif}</style>
</head>
<body class="bg-[#fffbf7] text-zinc-900">
<header class="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
  <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
    <h1 class="text-2xl">ATELIER MATOLA</h1>
    <a href="https://wa.me/258849468025" class="bg-black text-white px-4 py-2 rounded-full text-sm">WhatsApp 84 946 8025</a>
  </div>
</header>

<div class="max-w-6xl mx-auto px-4">
  <div class="mt-6 bg-black text-white rounded-[24px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-6">
    <div class="flex-1">
      <p class="text-sm tracking-widest opacity-70">NOVA COLEÇÃO 2026</p>
      <h2 class="text-4xl md:text-5xl mt-2 leading-tight">Elegância Minimal para o Dia a Dia em Matola</h2>
      <p class="mt-4 opacity-80">Peças exclusivas, entrega em Maputo e Matola. Pague no M-Pesa.</p>
      <a href="#produtos" class="inline-block mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold">Ver Coleção</a>
    </div>
    <img src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=600" class="w-full md:w-[320px] h-[380px] object-cover rounded-[20px]">
  </div>

  <h2 id="produtos" class="text-3xl mt-12 mb-6">Nossos Produtos</h2>
  <div id="grid" class="grid grid-cols-2 md:grid-cols-4 gap-4"></div>
</div>

<div id="cartBtn" class="fixed bottom-4 right-4 bg-black text-white px-6 py-4 rounded-full shadow-xl hidden cursor-pointer" onclick="checkout()">
  🛒 Finalizar no WhatsApp - <span id="cartTotal">0</span> MZN
</div>

<script>
const produtos = [
  {id:1,n:"Blusa Tule Minimal - Preta",p:2500,img:"https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=500"},
  {id:2,n:"Blusa Canelada Elegante",p:1800,img:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=500"},
  {id:3,n:"Saia Longa Plissada",p:3200,img:"https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=500"},
  {id:4,n:"Vestido Midi Chic",p:4500,img:"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=500"}
];
let carrinho=[];
document.getElementById('grid').innerHTML=produtos.map(pr=>\`
  <div class="bg-white rounded-[18px] overflow-hidden border hover:shadow-lg transition">
    <img src="\${pr.img}" class="w-full h-[200px] md:h-[260px] object-cover">
    <div class="p-3">
      <p class="text-sm font-semibold leading-tight">\${pr.n}</p>
      <p class="mt-1 font-bold">MZN \${pr.p}</p>
      <button onclick="add(\${pr.id})" class="mt-3 w-full bg-black text-white py-2.5 rounded-full text-sm">Adicionar +</button>
    </div>
  </div>
\`).join('');
function add(id){
  const pr=produtos.find(x=>x.id===id);
  carrinho.push(pr);
  const total=carrinho.reduce((s,i)=>s+i.p,0);
  document.getElementById('cartTotal').innerText=total;
  document.getElementById('cartBtn').classList.remove('hidden');
}
function checkout(){
  let total=carrinho.reduce((s,i)=>s+i.p,0);
  let lista=carrinho.map(i=>'- '+i.n+' (MZN '+i.p+')').join('%0A');
  let msg=\`Olá Atelier Matola! 🌸%0AQuero comprar:%0A\${lista}%0A%0ATotal: MZN \${total}%0AEntrega em Matola/Maputo\`;
  window.open('https://wa.me/258849468025?text='+msg,'_blank');
}
</script>
<footer class="text-center py-12 opacity-60 text-sm">Atelier Matola • 84 946 8025 • Matola, Moçambique</footer>
</body>
</html>
  `);
});

app.listen(process.env.PORT || 3000);
