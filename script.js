const dd = {
    Abnormal: [
        "Not conforming to standard. In matters of thought and conduct, to be independent is to be abnormal, to be abnormal is to be detested."
    ],
    Admiration: [
        "Our polite recognition of another's resemblance to ourselves."
    ],
    Absurdity: [
        "A statement or belief manifestly inconsistent with one's own opinion."
    ],
    Achievement: [
         "The death of endeavor and the birth of disgust. "
    ],
    Acknowledge: [
        "To confess. Acknowledgement of one another's faults is the highest duty imposed by our love of truth."
    ],
    Beauty: [
        "The power by which a woman charms a lover and terrifies a husband. "
    ],
    Belladonna: [
        "In Italian a beautiful lady; in English a deadly poison. A striking example of the essential identity of the two tongues."
    ],
    Birth: [
        "The first and direst of all disasters."
    ],
    Bore: [
        "A person who talks when you wish him to listen."
    ],
    Boundary: [
        "In political geography, an imaginary line between two nations, separating the imaginary rights of one from the imaginary rights of the other."
    ],
    Clock: [
        "A machine of great moral value to man, allaying his concern for the future by reminding him what a lot of time remains to him."
    ],
    Corporation: [
        "An ingenious device for obtaining individual profit without individual responsibility."
    ],
    Day: [
        "A period of twenty-four hours, mostly misspent."
    ],
    Debt: [
        "An ingenious substitute for the chain and whip of the slave-driver."
    ],
    Defame: [
        "To lie about another. To tell the truth about another."
    ],
    Diary: [
        "A daily record of that part of one's life, which he can relate to himself without blushing."
    ],
    Egotist: [
        "A person of low taste, more interested in himself than in me."
    ],
    Lawyer: [
        "One skilled in circumvention of the law."
    ],
    Politeness: [
        "The most acceptable hypocrisy."
    ],
    Rumor: [
        "A favorite weapon of the assassins of character."
    ],
    Wedding: [
        "A ceremony at which two persons undertake to become one, one undertakes to become nothing, and nothing undertakes to become supportable."
    ],
    Yankee: [
        "In Europe, an American. In the Northern States of our Union, a New Englander. In the Southern States the word is unknown."
    ]
};

const randomWord = arr => {
    const randomIndex = Math.floor(Math.random() * (arr.length));
    /*const yourWord = arr[randomIndex];
    return yourWord;*/
    document.getElementById('displayWord').innerhtml = dd[randomIndex];
    const theComputer = randomWord(dd)
    console.log(`Your word is ${theComputer}, enojy!`)
}