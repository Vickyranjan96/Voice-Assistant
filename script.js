const mic = document.querySelector('#mic');
const data = document.querySelector('#data');

function speak(sentence){
    const bolo = new SpeechSynthesisUtterance(sentence);
    bolo.rate=1;
    bolo.pitch=1;
    window.speechSynthesis.speak(bolo);
}


function wish(){
    speak("I am your assistant");
}


window.addEventListener('load', ()=>/* function() also use*/ {
    speak("hello Vicky");
    wish();
})

const Speech = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognice = new Speech();

recognice.onresult = (event)=>{
    const res = event.resultIndex;
    const transcript = event.results[res][0].transcript;
    data.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

    mic.addEventListener('click',()=>{
    recognice.start();
})

function speakThis(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = "Not Understand";

    if(message.includes('hello')){
        const final = "sir hello";
        speech.text = final;
    }

    else if(message.includes('how are you')){
        const final = "i am fine";
        speech.text = final;
    }

    else if(message.includes('introduce yourself') || message.includes('introduction')){
        const final = "I am a Virtual Assistatant and my name is pippo i am created by mr. Vicky Ranjan on 14th August 2024";
        speech.text = final;
    }

    else if(message.includes('youtube' )){
        window.open("https://www.youtube.com/", "_blank");
        const final = "Opening Youtube";
        speech.text = final;
    }

    else if(message.includes('open instagram')){
        window.open("https://www.instagram.com/", "_blank");
        const final = "Opening instagram";
        speech.text = final;
    }
    else if(message.includes('calculator')){
        window.open('Calculator:///')
        const final = "Opening Calculator";
        speech.text = final;
    }
    else if(message.includes('whatsapp')){
        window.open('Whatsapp:///')
        const final = "Opening Whatsapp";
        speech.text = final;
    }

    else if(message.includes('open my github profile')){
        window.open("https://github.com/Vickyranjan96", "_blank");
        const final = "Opening Your Github Profile";
        speech.text = final;
    }
    else if(message.includes('linkedin')){
        window.open("https://www.linkedin.com/", "_blank");
        const final = "Opening Linkedin";
        speech.text = final;
    }
    else{
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const final = "Showing you the Inforamation about " + message + " on google";
        speech.text = final;
    }

    speech.volume = 5;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
