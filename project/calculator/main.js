let keys = ["+","-","x","/","7","8","9","ac","1","2","3","=","0","0",".","="]

let keyboard = document.getElementById('keyboard')

for (let i=0; i<keys.length;i++){
    let exit = `
        <div class="key">${keys[i]}</div>
    `
    keyboard.insertAdjacentHTML('beforeend',exit)
}
