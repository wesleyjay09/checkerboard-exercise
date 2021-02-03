//createCheckers()

function createDiv() {
     return document.createElement('div')    
}

function createCheckers() {
    var alt;
    var body = document.querySelector('body')
    for(var i = 0; i < 81; i++) {
        var div = createDiv()
        div.style.width = '11.1%'
        div.style.float = 'left'
        div.style.paddingBottom = '11.1%'
        if(alt) {
            div.style.background = 'black'
            alt = false
         }else{
            div.style.background = 'red'
            alt = true;
        }
        body.appendChild(div)
        }
    }
    createRandomColor()
    function createRandomColor() {
        var alt;
        var body = document.querySelector('body')
        for(var i = 0; i < 81; i++) {
            var div = createDiv()
            div.style.width = '11.1%'
            div.style.float = 'left'
            div.style.paddingBottom = '11.1%'
            div.style.background = `rgb(${generateRandom()},${generateRandom()},${generateRandom()})`
            body.appendChild(div)
            }
        }

    function generateRandom(){
        var random = Math.ceil(Math.random() * 255)
        return random;
        }
