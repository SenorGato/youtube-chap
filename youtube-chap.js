const target = document.getElementById('content');
const observer = new MutationObserver(muts => {
    if (document.getElementById('content').innerText == "") {
            console.log("Its empty");
       } else {
               console.log(document.getElementsById('content').innerText);
       }
});
const config = { charachterData: true, attributes: false, childList: true, subtree: true}
observer.observe(target, config);

//    var x = document.getElementById("content").innerText;
//    console.log(x);
