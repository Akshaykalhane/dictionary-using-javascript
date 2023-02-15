const URL='https://api.dictionaryapi.dev/api/v2/entries/en'

const inputEl=document.querySelector('#search')
const button = document.querySelector('.btn')
const displayUI=document.querySelector('.result-box')
const error = document.querySelector('#error')

button.addEventListener('click',searchWord)

function searchWord(){
    error.textContent=''
    if(inputEl.value=='') {
        validate();
    }else{
        fetch(`${URL}/${inputEl.value}`).then(res=>res.json()).then((data)=>getWord(data))
        inputEl.value=''
    }
}

function getWord(info){
    console.log(info)
    if(info.message){
        notfound(info.message)
    }else{
        let data = info[0];
        let meaning = data.meanings[0]
        let defination = meaning.definitions[0].definition;
        displayUI.innerHTML=`
            <h2 class="word-name">${data.word}</h2>
            <p class="adjective">${data.phonetic}</p>
            <p class="meaning">parts of speech ${meaning.partOfSpeech}</p>
            <p class="defination">${defination}</p>
        `
    }
}

function validate(){
    console.log('enter input value first')
    error.textContent='Enter Text First'
}

function notfound(message){
    console.log(message)
    displayUI.innerHTML=`
        <h3 class="welcome-msg">word not found</h3>
    `
}