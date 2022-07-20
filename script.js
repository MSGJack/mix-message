
let displayWord = document.getElementById('displayWord');


const words = ['Abnormal', 'Admiration', 'Absurdity', 'Achievement', 'Acknowledge', 'Beauty', 'Belladonna', 'Birth', 'Bore', 'Boundary', 'Clock', 'Corporation,', 'Day', 'Debt', 'Defame', 'Diary', 'Egotist', 'Lawyer', 'Rumor', 'Wedding', 'Yankee'];

const someWord = Math.floor(Math.random() * words.length);

let randomWord = words[someWord];

switch (randomWord) {
    case 'Abnormal' : 
        def ="Not conforming to standard. In matters of thought and conduct, to be independent is to be abnormal, to be abnormal is to be detested.";
        break;
    case 'Admiration' : 
        "Our polite recognition of another's resemblance to ourselves.";
        break;
    case 'Absurdity' : 
        def = "A statement or belief manifestly inconsistent with one's own opinion.";
        break;
    case 'Achievement' :
         "The death of endeavor and the birth of disgust.";
         break;
    case 'Acknowledge' : 
        def = "To confess. Acknowledgement of one another's faults is the highest duty imposed by our love of truth.";
        break;
    case 'Beauty' : 
        def = "The power by which a woman charms a lover and terrifies a husband.";
        break;
    case 'Belladonna' : 
        def = "In Italian a beautiful lady; in English a deadly poison. A striking example of the essential identity of the two tongues.";
        break;
    case 'Birth' : 
        def = "The first and direst of all disasters.";
        break;
    case 'Bore' :
        def = "A person who talks when you wish him to listen.";
        break;
    case 'Boundary' : 
        def = "In political geography, an imaginary line between two nations, separating the imaginary rights of one from the imaginary rights of the other.";
        break;
    case 'Clock' : 
        def = "A machine of great moral value to man, allaying his concern for the future by reminding him what a lot of time remains to him.";
        break;
    case 'Corporation' : 
        def = "An ingenious device for obtaining individual profit without individual responsibility.";
        break;
    case 'Day' : 
        def = "A period of twenty-four hours, mostly misspent."
        break;
    case 'Debt' : 
        def ="An ingenious substitute for the chain and whip of the slave-driver.";
        break;
    case 'Defame' : 
        def = "To lie about another. To tell the truth about another.";
        break;
    case 'Diary' : 
        def = "A daily record of that part of one's life, which he can relate to himself without blushing.";
        break;
    case 'Egotist' :
        def = "A person of low taste, more interested in himself than in me.";
        break;
    case 'Lawyer' : 
        def = "One skilled in circumvention of the law.";
        break;
    case 'Rumor' : 
        def = "A favorite weapon of the assassins of character.";
        break;
    case 'Wedding' : 
        def = "A ceremony at which two persons undertake to become one, one undertakes to become nothing, and nothing undertakes to become supportable.";
        break;
    case 'Yankee' : 
        def = "In Europe, an American. In the Northern States of our Union, a New Englander. In the Southern States the word is unknown.";
        break;

};

document.getElementById("displayWord").innerHTML = words[someWord];