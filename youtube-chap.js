console.log('Hack the Planet');
document.body.style.border = "20px solid red";

const target = document.getElementById('content');
const observer = new MutationObserver(muts => {
    console.log(muts);
});
const config = { charachterData: false, attributes: false, childList:false, subtree: attributes}
observer.observe(target, config);

//    var x = document.getElementById("content").innerText;
//    console.log(x);
