const cp = document.getElementById('cp');
const sp = document.getElementById('sp');
const btn = document.getElementById('btn')
const input = document.getElementsByTagName('input')

btn.addEventListener('click', function () {
    const cp = parseInt(document.getElementById('cp').value);
    const sp = parseInt(document.getElementById('sp').value);
    const p = document.getElementById('p');
    const p2 = document.getElementById('p2');
    const p3 = document.getElementById('p3');
    const profit = cp - sp;
    if (cp < sp) {
        //  p.innerHTML('you have made profit amount');
        p.innerHTML = 'you have made profit amount'
        p2.innerText = Math.abs(profit),
            p3.innerText = Math.abs(profit) / cp * 100 + "%"
        console.log(Math.abs(profit))

    }
    else {
        p.innerHTML = 'you have made loos amount';
        p2.innerHTML = Math.abs(profit)
        p3.innerText = Math.abs(profit) / cp * 100 + "%"
        console.log(Math.abs(profit))
    }
    console.log(btn)

})