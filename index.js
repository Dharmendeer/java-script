let isDobOpen = false;
let DateBirth;
const settingCogEl= document.getElementById('settingsIcon');
const settingContentEl = document.getElementById('settingContent');
const initialTextEl = document.getElementById('initialtext');
const afterDobEl = document.getElementById('afterDob');
const dobButtonEl = document.getElementById('dobButton');
const dobInputEl = document.getElementById('dobInput');


const toggleDateSelct=() =>{
    if(isDobOpen){
        settingContentEl.classList.add("hide");
    }else{
        settingContentEl.classList.remove("hide");
    }

isDobOpen=! isDobOpen;
console.log("Toggle", isDobOpen);
};

const setDob =()=> {
    DateBirth=dobInputEl.value;
    if(DateBirth){
        initialTextEl.classList.add('hide');
        afterDobEl.classList.remove('hide');
        

    }else{
        afterDobEl.classList.add('hide');
        initialTextEl.classList.remove('hide');
        
    }



};
setDob();

settingCogEl.addEventListener("click", toggleDateSelct);
settingCogEl.addEventListener("click", setDob);
