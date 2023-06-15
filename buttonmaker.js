let applybtn = document.getElementById("applyButton");
let custombtn = document.getElementById("customButton");
let bgcolor = document.getElementById("bgColorInput");
let fontcolorip = document.getElementById("fontColorInput");
let fronsizeip = document.getElementById("fontSizeInput");
let fontwieghtip = document.getElementById("fontWeightInput");
let paddingip = document.getElementById("paddingInput");
let borderradiusip = document.getElementById("borderRadiusInput");
applybtn.onclick = function() {
    custombtn.style.backgroundColor = bgcolor.value;
    custombtn.style.color = fontcolorip.value;
    custombtn.style.fontSize = fronsizeip.value;
    custombtn.style.fontWeight = fontwieghtip.value;
    custombtn.style.padding = paddingip.value;
    custombtn.style.borderRadius = borderradiusip.value;



};