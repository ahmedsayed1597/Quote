
var quote = 0;
var advice = document.getElementById('adviceOutput');
var adviceName = document.getElementById('nameOutput');


function create(){

     quote = Math.round(Math.random()*10);
    switch(quote){
        case 1: 
        advice.innerHTML = "“Be yourself; everyone else is already taken.”";
        adviceName.innerHTML = "--Oscar Wilde";
        break;
    
        case 2: 
        advice.innerHTML = "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ";
        adviceName.innerHTML = "--Albert Einstein";
        break;

        case 3: 
        advice.innerHTML = "“So many books, so little time.”";
        adviceName.innerHTML = "--Frank Zappa";
        break;

        case 4: 
        advice.innerHTML = "“A room without books is like a body without a soul.”";
        adviceName.innerHTML = "--Marcus Tullius Cicero ";
        break;

        case 5: 
        advice.innerHTML = "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”";
        adviceName.innerHTML = "--Dr. Seuss ";
        break;

        case 6: 
        advice.innerHTML = "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ";
        adviceName.innerHTML = "--Bernard M. Baruch ";
        break;

        case 7: 
        advice.innerHTML = "“You only live once, but if you do it right, once is enough.”";
        adviceName.innerHTML = "--Mae West ";
        break;

        case 8: 
        advice.innerHTML = "“In three words I can sum up everything I've learned about life: it goes on.”";
        adviceName.innerHTML = "--Robert Frost ";
        break;

        case 9: 
        advice.innerHTML = "“Be the change that you wish to see in the world.”";
        adviceName.innerHTML = "-- Mahatma Gandhi";
        break;
    }
    console.log(quote);
}

