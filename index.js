const express = require('express');
const app = express();
app.get('/', (req,res)=>res.send(`
<!DOCTYPE html><html lang="pt"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;600&display=swap" rel="stylesheet">
<style>h1{font-family:Syne} body{font-family:Inter}</style></head>
<body class="bg-[#f6f5f1]">
<header class="bg-white sticky top-0 z-20 border-b">
<div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
<h1 class="text-[22px] font-extrabold tracking-tight">ATELIER MATOLA</h1>
<div class="flex gap-2">
<button onclick="document.getElementById('menu').classList.toggle('hidden')" class="w-10 h-10 rounded-full bg-black text-white">☰</button>
<a href="https://wa.me/258849468025" class="w-10 h-10 rounded-full bg-green-500 text-white grid place-items-center">W</a>
</div>
</div>
<div id="menu" class="hidden absolute top-[64px] left-0 w-full bg-white border-b p-4 shadow-xl">
<div class="max-w-6xl mx-auto grid gap-2">
<button onclick="filterCat('todos')" class="text-left p-3 rounded-xl bg-black text-white">🏠 Todos Produtos</button>
<button onclick="filterCat('roupa')" class="text-left p-3 rounded-xl bg-zinc-100">👗 Roupas - 250 Mts</button>
<button onclick="filterCat('carro')" class="text-left p-3 rounded-xl bg-zinc-100">🚗 Carros - 80.000 Mts</button>
<button onclick="filterCat('laptop')" class="text-left p-3 rounded-xl bg-zinc-100">💻 Laptops</button>
<button onclick="document.getElementById('addBox').classList.remove('hidden')" class="text-left p-3 rounded-xl bg-green-500 text-white font-bold mt-2">+ Adicionar Novo Produto (Não apaga os outros)</button>
</div></div>
</header>

<div class="max-w-6xl mx-auto px-4">
<div id="addBox" class="hidden mt-4 bg-white rounded-[20px] p-5 border-2 border-green-500">
<h3 class="font-bold text-lg">Adicionar Produto Novo</h3>
<p class="text-xs opacity-60">Esse produto vai ficar salvo e NÃO apaga os outros!</p>
<input id="nNome" placeholder="Nome ex: Blusa Rosa" class="w-full mt-3 border p-3 rounded-xl">
<input id="nPreco" placeholder="Preço ex: 250 Mts ou 80000 Mts" class="w-full mt-2 border p-3 rounded-xl">
<input id="nImg" placeholder="Link da foto (cola link do imgbb.com)" class="w-full mt-2 border p-3 rounded-xl">
<select id="nCat" class="w-full mt-2 border p-3 rounded-xl"><option value="roupa">Roupa</option><option value="carro">Carro</option><option value="laptop">Laptop</option><option value="outro">Outro</option></select>
<button onclick="addProd()" class="w-full mt-3 bg-black text-white p-3 rounded-xl font-bold">Salvar Produto ✅</button>
</div>

<div id="grid" class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6"></div>
</div>

<script>
let defaultProds = [
{n:"Blusa Verde Babados Elegante",p:"250 Mts",img:"https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500",cat:"roupa"},
{n:"Toyota Vitz Preto Brilhante",p:"80.000 Mts",img:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500",cat:"carro"},
{n:"MacBook Pro M3 2023 Silver",p:"Sob Consulta",img:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500",cat:"laptop"}
];
let prods = JSON.parse(localStorage.getItem('matola_prods')||'null') || defaultProds;

function render(filtro='todos'){
 document.getElementById('grid').innerHTML = prods.filter(x=>filtro=='todos'||x.cat==filtro).map((pr,i)=>\`
  <div class="bg-white rounded-[18px] overflow-hidden border">
   <img src="\${pr.img}" class="w-full h-[180px] object-cover">
   <div class="p-3"><p class="font-bold text-[13px] leading-tight">\${pr.n}</p><p class="text-green-600 font-black mt-1">\${pr.p}</p>
   <button onclick="buy('\${pr.n} - \${pr.p}')" class="w-full mt-2 bg-black text-white py-2.5 rounded-full text-xs font-bold">Comprar</button>
   <button onclick="del(\${i})" class="w-full mt-1 text-[10px] opacity-30">remover</button>
   </div></div>\`).join('');
}
function addProd(){
 let obj={n:document.getElementById('nNome').value, p:document.getElementById('nPreco').value, img:document.getElementById('nImg').value||'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500', cat:document.getElementById('nCat').value};
 if(!obj.n||!obj.p) return alert('Escreve nome e preço');
 prods.unshift(obj); localStorage.setItem('matola_prods', JSON.stringify(prods)); render(); document.getElementById('addBox').classList.add('hidden'); alert('Produto adicionado! Não apagou os outros ✅');
}
function del(i){ if(confirm('Apagar?')){ prods.splice(i,1); localStorage.setItem('matola_prods', JSON.stringify(prods)); render(); } }
function filterCat(c){ render(c); document.getElementById('menu').classList.add('hidden'); window.scrollTo(0,0); }
function buy(t){ window.open('https://wa.me/258849468025?text=Olá! Quero: '+encodeURIComponent(t),'_blank'); }
render();
</script>
</body></html>
`));
app.listen(process.env.PORT||3000);
