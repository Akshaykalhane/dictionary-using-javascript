const URL='https://api.dictionaryapi.dev/api/v2/entries/en'

const inputEl=document.querySelector('#search')
const button = document.querySelector('.btn')
const displayUI=document.querySelector('.display-area')

button.addEventListener('click',searchWord)

function searchWord(){
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
        displayUI.innerHTML=`
            <h3>${data.word}</h3>
        `
    }
}

function validate(){
    console.log('enter input value first')
}

function notfound(message){
    console.log(message)
}