const express = require('express');
const app = express();
app.get('/', (req,res)=>{ res.send(`
<!DOCTYPE html><html lang="pt"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700;900&display=swap" rel="stylesheet">
<title>Atelier Matola - Loja</title></head>
<body style="font-family:Inter" class="bg-zinc-50">
<header class="bg-white sticky top-0 z-10 border-b p-3 flex justify-between items-center max-w-6xl mx-auto">
<h1 class="font-black text-xl">ATELIER MATOLA</h1>
<a href="https://wa.me/258849468025" class="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm">WhatsApp</a>
</header>
<div class="max-w-6xl mx-auto p-3">
<div class="bg-black text-white rounded-2xl p-6 mt-3"><h2 class="text-3xl font-black">Tudo em Matola & Maputo</h2><p class="opacity-70 mt-2">Roupas, Carros, Eletrônicos - Entrega rápida</p></div>

<div class="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">

<!-- BLUSA -->
<div class="bg-white rounded-2xl overflow-hidden shadow-sm border">
<img src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400" class="h-44 w-full object-cover">
<div class="p-3"><p class="font-bold text-sm">Blusa Verde Babados - Elegante</p><p class="text-green-600 font-black mt-1">250 Mts</p><button onclick="buy('Blusa Verde Babados - 250 Mts')" class="w-full mt-3 bg-black text-white py-2 rounded-full text-sm font-bold">Comprar</button></div></div>

<!-- CARRO -->
<div class="bg-white rounded-2xl overflow-hidden shadow-sm border">
<img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400" class="h-44 w-full object-cover">
<div class="p-3"><p class="font-bold text-sm">Toyota Vitz Preto - 2012 Brilhante</p><p class="text-green-600 font-black mt-1">80.000 Mts</p><span class="text-xs bg-zinc-100 px-2 py-1 rounded">Negociável</span><button onclick="buy('Carro Toyota Vitz Preto - 80.000 Mts - Vi no site Atelier Matola')" class="w-full mt-3 bg-black text-white py-2 rounded-full text-sm font-bold">Comprar</button></div></div>

<!-- MACBOOK -->
<div class="bg-white rounded-2xl overflow-hidden shadow-sm border">
<img src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400" class="h-44 w-full object-cover">
<div class="p-3"><p class="font-bold text-sm">MacBook Pro M3 2023 - Silver - M3 Pro</p><p class="text-green-600 font-black mt-1">Sob Consulta</p><button onclick="buy('MacBook Pro M3 2023 - Silver - Vi no site')" class="w-full mt-3 bg-black text-white py-2 rounded-full text-sm font-bold">Perguntar Preço</button></div></div>

</div>
<p class="text-center text-xs opacity-50 mt-10 pb-10">Atelier Matola • 84 946 8025 • Matola</p>
</div>
<script>
function buy(prod){ 
let msg = 'Olá Atelier Matola! Quero: ' + prod + '%0ATotal: ' + prod.split('-').pop();
window.open('https://wa.me/258849468025?text='+msg,'_blank');
}
</script>
</body></html>
`)}); app.listen(process.env.PORT||3000);
