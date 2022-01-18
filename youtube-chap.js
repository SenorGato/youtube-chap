console.log('Hack the Planet');
document.body.style.border = "20px solid red";

const targetNode = document.getElementById('content');
const observer = new MutationObserver(muts => {
    console.log(muts);
    console.log("Motherfucker");
});

observer.observe(targetNode, {
        attributes: true
});

//    var x = document.getElementById("content").innerText;
//    console.log(x);
