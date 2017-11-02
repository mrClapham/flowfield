import { create } from './flowfields/flowfield'
document.addEventListener('DOMContentLoaded', ()=>init() );

let init = ()=>{
    create('canvas-holder', 500, 500)
};