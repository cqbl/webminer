/*
explore github.com/? name space!
assert window.location begins "https://github.com"
in webbrowser console, run the below code
*/
let n=2000,MAX=2100;
function openWindow(){
    window.open(n++);
    if (n>MAX) clearInterval(iv);
}
iv=setInterval(openWindow,300); 

/* function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function probing() {
  let start=2000,end=2100;
  for (let n = start; n < end; n++) {
    await delay(1000);
    window.open(n++);
  }
}
probing(); */