var quotesArray = [
    { author: '--Oscar Wilde', quote: "“Be yourself; everyone else is already taken.”" },
    { author: '--Frank Zappa', quote: "“So many books, so little time.”" },
    { author: '--Marcus Tullius Cicero', quote: "“A room without books is like a body without a soul.”" },
    { author: '--Mae West', quote: "“You only live once, but if you do it right, once is enough.”" },
    { author: '--Mahatma Gandhi', quote: "“Be the change that you wish to see in the world.”" },
    { author: '--Robert Frost', quote: "“In three words I can sum up everything I've learned about life: it goes on.”" },
    { author: '--Mark Twain', quote: "“If you tell the truth, you don't have to remember anything.”" },
    { author: '--Elbert Hubbard', quote: "“A friend is someone who knows all about you and still loves you.”" },
    { author: '--Steve Jobs', quote: "The only way to do great work is to love what you do." },
    { author: '--Winston Churchill', quote: "Success is not final, failure is not fatal: It is the courage to continue that counts." },
    { author: '--Eleanor Roosevelt', quote: "The future belongs to those who believe in the beauty of their dreams." },
    { author: '--Wayne Gretzky', quote: "You miss 100% of the shots you don't take." },
    { author: '--George Eliot', quote: "It is never too late to be what you might have been." },
    { author: '--Peter Drucker', quote: "The best way to predict the future is to create it." }

];



// to store the visited indices to make sure to not visited again until i finished all the indices
var visitedIndices = [];

function getQuote() {
    if (visitedIndices.length === quotesArray.length) {
        visitedIndices = []; // if i visited all the indices, so i will empty the array to start again from the beginning
    }

    var randomNumber; // 3mltlha declare baraa 34an ha7taghaa ta7t
    for (;;) {
        randomNumber = Math.floor(Math.random() * quotesArray.length);

        if (!visitedIndices.includes(randomNumber)) {
            break; // to check if the random number m4 mawgood fe el array of visited , lo ah b3ml break we ba5rog mn el for loop we ba7oto fe el visited indices, enma b2a lo mawgood fe el visited indices  bafdl aloop tany l7d ma ytl3 rkm m4 mawgood.
        }
    }

    visitedIndices.push(randomNumber);


    document.getElementById('quote').innerHTML = quotesArray[randomNumber].quote;
    document.getElementById('author').innerHTML = quotesArray[randomNumber].author;


    // document.getElementById('index').innerHTML = visitedIndices;
    //kont ba3ml check beeh 3la el indices , fa lo 7drtk 3yza t3mly check beeh na sebtholk hena we fe el html we eb2y 4ely el comment mn el html

}
//34an awl lma yft7, el quote myb2aa4 fady
getQuote();