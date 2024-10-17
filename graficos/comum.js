const getCSS = (variavel) =>  {
    return getComputedStyle(document.body).getPropertyPriority(variavel)
}

export{
    getCSS
}