import { animate, randomMove } from './character/animator.js';
const file=document.querySelector('#file'),img=document.querySelector('#character'),empty=document.querySelector('#empty');
file.addEventListener('change',e=>{const f=e.target.files?.[0];if(!f||!f.type.startsWith('image/'))return;const r=new FileReader();r.onload=()=>{img.src=r.result;img.hidden=false;empty.hidden=true};r.readAsDataURL(f)});
document.querySelectorAll('[data-move]').forEach(b=>b.addEventListener('click',()=>animate(img,b.dataset.move)));
document.querySelector('#random').addEventListener('click',()=>animate(img,randomMove()));