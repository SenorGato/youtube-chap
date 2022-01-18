const target = document.getElementById('content');
const observer = new MutationObserver(muts => {
    console.log(muts);
});
const config = { charachterData: true, attributes: true, childList: true, subtree: true}
observer.observe(target, config);

//    var x = document.getElementById("content").innerText;
//    console.log(x);
