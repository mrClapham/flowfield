let context

export const create = (divId, width, height)=>{
    console.log("Create called ", divId)
    const canv = document.createElement('canvas')
    canv.setAttribute('width', String(width));
    canv.setAttribute('height', String(height));
    document.querySelector('#'+divId).appendChild(canv)
    context = canv.getContext("2d")
    return canv
} 