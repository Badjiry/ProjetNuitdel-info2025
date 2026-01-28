const Catcher = document.getElementById('catcher');
const MailBox = document.getElementById('email-box');
const PassBox = document.getElementById('pass-box');
const LoginButton = document.getElementById('login-btn');
const KEY_MAP = {
    'a': 'z', 'z': 'a', 'e': 'r', 'r': 'e', 't': 'y',
    'y': 't', 'u': 'i', 'i': 'u', 'o': 'p', 'p': 'o',
    'q': 's', 's': 'q', 'd': 'f', 'f': 'd', 'g': 'h',
    'h': 'g', 'j': 'k', 'k': 'j', 'l': 'w', 'w': 'l',
    'x': 'c', 'c': 'x', 'v': 'b', 'b': 'v', 'n': 'm',
    'm':'n',
    
    'A': 'Z', 'Z': 'A', 'E': 'R', 'R': 'E', 'T': 'Y',
    'Y': 'T', 'U': 'I', 'I': 'U', 'O': 'P', 'P': 'O',
    'Q': 'S', 'S': 'Q', 'D': 'F', 'F': 'D', 'G': 'H',
    'H': 'G', 'J': 'K', 'K': 'J', 'L': 'W', 'W': 'L',
    'X': 'C', 'C': 'X', 'V': 'B', 'B': 'V', 'N': 'M',
    'M':'N', 

    '1': '2', '2': '3', '3': '4', '4': '5', '5': '6',
    '6': '7', '7': '8', '8': '9', '9': '0', '0': '1',
    ';':'@','@':'.',
};


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let divList = [] 
let catcherData = {
    'x':100,
    'length': 200,
}

let divid=0;
let field=1;

// crée les lettres tombantes

const generateFallingDiv = (left_padding, content, type) => {
    let fallingDiv = document.createElement('div');
    fallingDiv.style.cssText = `
    position:fixed;
    left: ${left_padding}px;
    top: 20px;
    opacity:1;
    z-index:100;
    `;
    let contentText = document.createElement('h1');
    contentText.innerHTML = content;
    fallingDiv.dataset.type = type;
    
    
    if(type === 'eraser') {
        contentText.style.color = 'white';
        contentText.style.background = 'crimson';
        contentText.style.padding = '6px';
        contentText.style.borderRadius = '6px';
        contentText.style.fontSize = '34px';
    } else { 
        contentText.style.color = '#ff00c3ff'; 
        contentText.style.fontSize = '48px';
    }

    fallingDiv.appendChild(contentText);
    fallingDiv.id = divid;
    document.body.appendChild(fallingDiv);

    return fallingDiv;
}


let loginLoopInterval = setInterval(loginLoop, 10);

function loginLoop(){

    if(field == 1){
        MailBox.style.borderColor = "purple";
    }
    else if( field == 2){
        MailBox.style.borderColor = "white";
        PassBox.style.borderColor = "purple";
    }
    else{
        MailBox.style.borderColor = "white";
        PassBox.style.borderColor = "white";
        LoginButton.style.borderColor = "purple";
    }
   
    moveLetters();
}

function stopLoginLoop(){
    clearInterval(loginLoopInterval);
    console.log('login stopped')
}


function removeElement(id){
    const elementToRemove = document.getElementById(id);
    if(elementToRemove != null)
        elementToRemove.remove()
}

function moveLetters(){

    divList = divList.filter(element => { 
        const computedStyle = window.getComputedStyle(element);
        let currentTop = parseInt(computedStyle.getPropertyValue("top"));
        const type = element.dataset && element.dataset.type;
        
        
        if(type === 'eraser') {
            currentTop += 10;
        } else {
            currentTop += 2;
        }
        
        element.style.top =  `${currentTop}px`;

        
        if(parseInt(element.style.top) > window.innerHeight) {
            removeElement(element.id);
            return false; 
        }

        
        const isCaught = (
            parseInt(element.style.top) > window.innerHeight - 120 && 
            parseInt(element.style.top) < window.innerHeight - 20 && 
            parseInt(element.style.left) >=  catcherData.x && 
            parseInt(element.style.left) <= catcherData.x + catcherData.length
        );

        if(isCaught) {
            const parentDiv = document.getElementById(element.id);
            if(parentDiv != null){
                const childText = parentDiv.querySelector("h1").textContent;
                const type = parentDiv.dataset && parentDiv.dataset.type;
                
                if(type === 'eraser'){
                    clearAllInput();
                } else {
                    addLetterToBox(childText);
                }
                removeElement(element.id);
                return false; 
            }
        }
        
        return true; 
    });
}


function clearAllInput(){
    if(field == 1){
        MailBox.value = '';
    } else if(field == 2){
        PassBox.value = '';
    }
}

function addLetterToBox(chr){
    if (field == 1){
        MailBox.value += chr;
    }
    else if (field == 2){
        PassBox.value += chr;
    }
}


document.addEventListener("keydown", function(event) {
    const key = event.key;
    
    const isMappableKey = key.length === 1 && KEY_MAP.hasOwnProperty(key); 
    
    event.preventDefault(); 
    
    if(key == 'ArrowRight' && catcherData.x + catcherData.length < window.innerWidth - 20 ) {
        catcherData.x += 50;
    } else if (key == 'ArrowLeft' && catcherData.x > 20) {
        catcherData.x -= 50;
    } else if(key == 'Enter') {
        field += 1;
    } 
    //eponge
    else if (key == 'Backspace') {
    
        divList.push(generateFallingDiv(getRandomInt(20, window.innerWidth - 20), '🧽', 'eraser'));
        divid += 1;
    } 

    else if (isMappableKey) { 
        
        const substituted_char = KEY_MAP[key]; 

        
        const drop_x = catcherData.x + catcherData.length / 2 - 20; 
        divList.push(generateFallingDiv(drop_x, substituted_char, 'letter')); 
        divid += 1;
    }

    Catcher.style.left=`${catcherData.x}px`

});
