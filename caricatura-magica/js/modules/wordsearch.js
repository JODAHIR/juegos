export const categories={
"🌎 Países":["PARAGUAY","BRASIL","CHILE","PERU","ARGENTINA","URUGUAY","MEXICO","ESPAÑA"],
"🐾 Animales":["PERRO","GATO","LEON","TIGRE","CONEJO","MONO","PUMA","ZORRO"],
"🍎 Frutas":["MANZANA","PERA","UVA","BANANA","MELON","MANGO","KIWI","NARANJA"],
"📅 Días":["LUNES","MARTES","MIERCOLES","JUEVES","VIERNES","SABADO","DOMINGO"]};
const dirs=[[0,1],[1,0],[1,1],[1,-1],[0,-1],[-1,0],[-1,-1],[-1,1]],letters="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const sh=a=>[...a].sort(()=>Math.random()-.5);
export function makeWordSearch(size=10){
 const names=Object.keys(categories),category=names[Math.floor(Math.random()*names.length)],words=sh(categories[category].filter(w=>w.length<=size)).slice(0,5),grid=Array.from({length:size},()=>Array(size).fill("")),placed=[];
 for(const word of words){let done=false;for(let t=0;t<250&&!done;t++){let [dr,dc]=dirs[Math.floor(Math.random()*dirs.length)],r=Math.floor(Math.random()*size),c=Math.floor(Math.random()*size),endR=r+dr*(word.length-1),endC=c+dc*(word.length-1);if(endR<0||endR>=size||endC<0||endC>=size)continue;let cells=[];for(let i=0;i<word.length;i++){let rr=r+dr*i,cc=c+dc*i;if(grid[rr][cc]&&grid[rr][cc]!==word[i]){cells=[];break}cells.push([rr,cc])}if(cells.length===word.length){cells.forEach(([rr,cc],i)=>grid[rr][cc]=word[i]);placed.push({word,cells});done=true}}}
 for(let r=0;r<size;r++)for(let c=0;c<size;c++)if(!grid[r][c])grid[r][c]=letters[Math.floor(Math.random()*letters.length)];
 return{category,grid,placed};
}