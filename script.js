const transformationExercises = [
    // ----------------------------
    // Existing 200 Exercises (IDs 0 through 200)
    // ----------------------------
    {
        id: 0, // Example exercise
        sentence1: "Do you mind if I watch you while you paint?",
        givenWord: "objection",
        prefix: "Do you ",
        suffix: " you while you paint?",
        correctAnswer: [
            "have any objection to my watching",
            "have any objection to me watching"
        ],
        minWords: 3,
        maxWords: 8,
        isExample: true,
        status: 'pending'
    },
    {
        id: 1,
        sentence1: "It’s unnecessary for you to apologise.",
        givenWord: "need",
        prefix: "You ",
        suffix: " apologise.",
        correctAnswer: ["don't need to"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 2,
        sentence1: "I regret not buying that car when I had the chance.",
        givenWord: "wish",
        prefix: "I ",
        suffix: " bought that car when I had the chance.",
        correctAnswer: ["wish I had"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 3,
        sentence1: "“I’ll help you with your homework,” said Tom to me.",
        givenWord: "offered",
        prefix: "Tom ",
        suffix: " me with my homework.",
        correctAnswer: ["offered to help"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 4,
        sentence1: "She started working here two years ago.",
        givenWord: "since",
        prefix: "She ",
        suffix: " two years ago.",
        correctAnswer: ["has worked here"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 5,
        sentence1: "The painting was so good that everyone admired it.",
        givenWord: "such",
        prefix: "It ",
        suffix: " painting that everyone admired it.",
        correctAnswer: ["was such a good"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 6,
        sentence1: "I’m certain that John didn’t steal the money.",
        givenWord: "must",
        prefix: "John ",
        suffix: " the money.",
        correctAnswer: ["must not have stolen"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 7,
        sentence1: "I can’t manage to finish this report by tomorrow.",
        givenWord: "able",
        prefix: "I ",
        suffix: " finish this report by tomorrow.",
        correctAnswer: ["won't be able to"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 8,
        sentence1: "“Did you see Martin at the party?” asked Jane.",
        givenWord: "if",
        prefix: "Jane asked me ",
        suffix: " Martin at the party.",
        correctAnswer: ["if I had seen"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 9,
        sentence1: "It began to rain, so we stopped playing football.",
        givenWord: "had",
        prefix: "We stopped playing football ",
        suffix: " to rain.",
        correctAnswer: ["as it had started"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 10,
        sentence1: "They can’t have lost the tickets – they were here a minute ago.",
        givenWord: "must",
        prefix: "They ",
        suffix: " the tickets.",
        correctAnswer: ["must have not lost"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 11,
        sentence1: "It’s important that everyone is on time for the meeting.",
        givenWord: "essential",
        prefix: "It’s ",
        suffix: " everyone is on time for the meeting.",
        correctAnswer: ["essential that"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 12,
        sentence1: "Peter finished painting the house last week.",
        givenWord: "been",
        prefix: "Peter ",
        suffix: " the house for a week before he finished.",
        correctAnswer: ["had been painting"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 13,
        sentence1: "I haven’t seen Laura since she went to Paris.",
        givenWord: "last",
        prefix: "The last time ",
        suffix: " Laura was in Paris.",
        correctAnswer: ["I saw"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 14,
        sentence1: "“You should apologize to her,” said my mother.",
        givenWord: "advised",
        prefix: "My mother ",
        suffix: " to her.",
        correctAnswer: ["advised me to apologize"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 15,
        sentence1: "It was too dark to drive safely.",
        givenWord: "enough",
        prefix: "It ",
        suffix: " drive safely.",
        correctAnswer: ["wasn't light enough to"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 16,
        sentence1: "We would rather go to the cinema than stay at home.",
        givenWord: "prefer",
        prefix: "We ",
        suffix: " to the cinema than stay at home.",
        correctAnswer: ["prefer going"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 17,
        sentence1: "There’s no need to remind me again.",
        givenWord: "let",
        prefix: "",
        suffix: " remind me again.",
        correctAnswer: ["don't let me"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 18,
        sentence1: "I regret telling her the secret.",
        givenWord: "should",
        prefix: "I ",
        suffix: " her the secret.",
        correctAnswer: ["shouldn't have told"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 19,
        sentence1: "I haven’t got enough money to buy a new laptop.",
        givenWord: "too",
        prefix: "The laptop is ",
        suffix: " expensive for me to buy.",
        correctAnswer: ["too"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 20,
        sentence1: "“Why don’t we go to the beach?” suggested Mark.",
        givenWord: "proposed",
        prefix: "Mark ",
        suffix: " to the beach.",
        correctAnswer: ["proposed going"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 21,
        sentence1: "She has the ability to speak five languages.",
        givenWord: "capable",
        prefix: "She ",
        suffix: " speak five languages.",
        correctAnswer: ["is capable of"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 22,
        sentence1: "They didn’t allow me to park there.",
        givenWord: "let",
        prefix: "I ",
        suffix: " park there.",
        correctAnswer: ["wasn't let to"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 23,
        sentence1: "I regret that I didn’t travel more when I was younger.",
        givenWord: "wish",
        prefix: "I ",
        suffix: " more when I was younger.",
        correctAnswer: ["wish I had traveled"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 24,
        sentence1: "They started renovating the house last month.",
        givenWord: "been",
        prefix: "They ",
        suffix: " the house since last month.",
        correctAnswer: ["have been renovating"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 25,
        sentence1: "I prefer tea to coffee.",
        givenWord: "rather",
        prefix: "I ",
        suffix: " tea than coffee.",
        correctAnswer: ["would rather have"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 26,
        sentence1: "“I’ve never been to New York,” said Emma.",
        givenWord: "had",
        prefix: "Emma said she ",
        suffix: " to New York.",
        correctAnswer: ["had never been"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 27,
        sentence1: "It’s unwise to invest all your savings in one company.",
        givenWord: "risk",
        prefix: "You ",
        suffix: " all your savings in one company.",
        correctAnswer: ["run the risk of losing"],
        minWords: 3,
        maxWords: 5,
        status: 'pending'
    },
    {
        id: 28,
        sentence1: "He didn’t speak a word during the presentation.",
        givenWord: "not",
        prefix: "He ",
        suffix: " a word during the presentation.",
        correctAnswer: ["did not utter"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 29,
        sentence1: "I’m sure David will remember to call you.",
        givenWord: "bound",
        prefix: "David ",
        suffix: " to call you.",
        correctAnswer: ["is bound"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 30,
        sentence1: "She finished reading the book last night.",
        givenWord: "done",
        prefix: "By last night, she ",
        suffix: " with the book.",
        correctAnswer: ["had done reading"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 31,
        sentence1: "It’s impossible for him to finish this project alone.",
        givenWord: "able",
        prefix: "He ",
        suffix: " finish this project alone.",
        correctAnswer: ["won't be able to"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 32,
        sentence1: "“I can’t believe you ate all the cake,” she said to me.",
        givenWord: "accused",
        prefix: "She ",
        suffix: " all the cake.",
        correctAnswer: ["accused me of eating"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 33,
        sentence1: "He began working here in January 2020.",
        givenWord: "since",
        prefix: "He ",
        suffix: " January 2020.",
        correctAnswer: ["has worked here since"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 34,
        sentence1: "They underestimated how long the journey would take.",
        givenWord: "did",
        prefix: "They ",
        suffix: " how long the journey would take.",
        correctAnswer: ["did not realise"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 35,
        sentence1: "It’s not necessary to bring your own drinks.",
        givenWord: "need",
        prefix: "You ",
        suffix: " bring your own drinks.",
        correctAnswer: ["don't need to"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 36,
        sentence1: "I regret giving him my credit card details.",
        givenWord: "wish",
        prefix: "I ",
        suffix: " him my credit card details.",
        correctAnswer: ["wish I hadn't given"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 37,
        sentence1: "I last saw Anna two months ago.",
        givenWord: "since",
        prefix: "I ",
        suffix: " Anna.",
        correctAnswer: ["haven't seen"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 38,
        sentence1: "“Are you coming to the party?” asked John.",
        givenWord: "if",
        prefix: "John asked me ",
        suffix: " to the party.",
        correctAnswer: ["if I was coming"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 39,
        sentence1: "The movie was so boring that we left early.",
        givenWord: "such",
        prefix: "It ",
        suffix: " movie that we left early.",
        correctAnswer: ["was such a boring"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 40,
        sentence1: "It’s essential that you read this document carefully.",
        givenWord: "important",
        prefix: "It’s ",
        suffix: " this document carefully.",
        correctAnswer: ["important that you read"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 41,
        sentence1: "She managed to complete the marathon despite the injury.",
        givenWord: "victory",
        prefix: "She ",
        suffix: " complete the marathon despite the injury.",
        correctAnswer: ["was victorious in"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 42,
        sentence1: "I’m certain that they didn’t break the rules.",
        givenWord: "can't",
        prefix: "They ",
        suffix: " the rules.",
        correctAnswer: ["can't have broken"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 43,
        sentence1: "I don’t have much experience in marketing.",
        givenWord: "little",
        prefix: "I ",
        suffix: " experience in marketing.",
        correctAnswer: ["have little"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 44,
        sentence1: "“Please tell me where the station is,” she said.",
        givenWord: "want",
        prefix: "She ",
        suffix: " where the station was.",
        correctAnswer: ["wanted to know"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 45,
        sentence1: "He started learning German two years ago.",
        givenWord: "been",
        prefix: "He ",
        suffix: " German for two years.",
        correctAnswer: ["has been learning"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 46,
        sentence1: "It’s a pity that we missed the train.",
        givenWord: "wish",
        prefix: "I ",
        suffix: " the train.",
        correctAnswer: ["wish we hadn't missed"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 47,
        sentence1: "You don’t need to come if you don’t want to.",
        givenWord: "have",
        prefix: "You ",
        suffix: " come if you don’t want to.",
        correctAnswer: ["don't have to"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 48,
        sentence1: "They are likely to finish the work by tonight.",
        givenWord: "bound",
        prefix: "They ",
        suffix: " finish the work by tonight.",
        correctAnswer: ["are bound to"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 49,
        sentence1: "It’s not allowed to smoke in here.",
        givenWord: "must",
        prefix: "You ",
        suffix: " smoke in here.",
        correctAnswer: ["must not"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 50,
        sentence1: "“Have you sent the email?” asked Sarah.",
        givenWord: "whether",
        prefix: "Sarah asked me ",
        suffix: " the email.",
        correctAnswer: ["whether I had sent"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 51,
        sentence1: "He didn’t remember to lock the door.",
        givenWord: "forgot",
        prefix: "He ",
        suffix: " the door.",
        correctAnswer: ["forgot to lock"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 52,
        sentence1: "She hasn’t finished writing the report yet.",
        givenWord: "still",
        prefix: "She ",
        suffix: " writing the report.",
        correctAnswer: ["is still"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 53,
        sentence1: "It surprises me that he missed the exam.",
        givenWord: "amazed",
        prefix: "I ",
        suffix: " that he missed the exam.",
        correctAnswer: ["am amazed"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 54,
        sentence1: "I regret not studying harder for the test.",
        givenWord: "wish",
        prefix: "I ",
        suffix: " harder for the test.",
        correctAnswer: ["wish I had studied"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 55,
        sentence1: "I last played tennis ten years ago.",
        givenWord: "since",
        prefix: "I ",
        suffix: " tennis.",
        correctAnswer: ["haven't played"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 56,
        sentence1: "“Don’t forget to lock the door,” said Mum.",
        givenWord: "reminded",
        prefix: "Mum ",
        suffix: " to lock the door.",
        correctAnswer: ["reminded me"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 57,
        sentence1: "He can’t be serious about moving to Antarctica.",
        givenWord: "must",
        prefix: "He ",
        suffix: " moving to Antarctica.",
        correctAnswer: ["must not be serious"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 58,
        sentence1: "The concert was so amazing that I cried.",
        givenWord: "such",
        prefix: "It ",
        suffix: " concert that I cried.",
        correctAnswer: ["was such an amazing"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 59,
        sentence1: "I’d rather go for a walk than watch TV.",
        givenWord: "prefer",
        prefix: "I ",
        suffix: " for a walk than watch TV.",
        correctAnswer: ["prefer going"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 60,
        sentence1: "They started building the bridge in 2018.",
        givenWord: "been",
        prefix: "They ",
        suffix: " the bridge since 2018.",
        correctAnswer: ["have been building"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 61,
        sentence1: "It’s impossible to fix the car without a mechanic.",
        givenWord: "able",
        prefix: "I ",
        suffix: " fix the car without a mechanic.",
        correctAnswer: ["won't be able to"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 62,
        sentence1: "“Can you tell me the time?” I asked.",
        givenWord: "wondered",
        prefix: "I ",
        suffix: " the time.",
        correctAnswer: ["wondered what"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 63,
        sentence1: "She regrets not applying for that job.",
        givenWord: "wish",
        prefix: "She ",
        suffix: " for that job.",
        correctAnswer: ["wishes she had applied"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 64,
        sentence1: "He almost missed the bus this morning.",
        givenWord: "nearly",
        prefix: "He ",
        suffix: " the bus this morning.",
        correctAnswer: ["nearly missed"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 65,
        sentence1: "It’s essential that you attend the meeting on Friday.",
        givenWord: "important",
        prefix: "It’s ",
        suffix: " you attend the meeting on Friday.",
        correctAnswer: ["important that"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 66,
        sentence1: "They didn’t realise how late it was.",
        givenWord: "too",
        prefix: "It ",
        suffix: " late for them to realise.",
        correctAnswer: ["was too"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 67,
        sentence1: "I haven’t heard from them since last year.",
        givenWord: "last",
        prefix: "The last time ",
        suffix: " from them was last year.",
        correctAnswer: ["I heard"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 68,
        sentence1: "“Please explain why you’re late,” said my boss.",
        givenWord: "asked",
        prefix: "My boss ",
        suffix: " why I was late.",
        correctAnswer: ["asked me to explain"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 69,
        sentence1: "She started playing the piano at age five.",
        givenWord: "been",
        prefix: "She ",
        suffix: " the piano since age five.",
        correctAnswer: ["has been playing"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 70,
        sentence1: "It annoys me when people arrive late.",
        givenWord: "get",
        prefix: "I ",
        suffix: " when people arrive late.",
        correctAnswer: ["get annoyed"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 71,
        sentence1: "I prefer working in the mornings.",
        givenWord: "rather",
        prefix: "I ",
        suffix: " working in the mornings.",
        correctAnswer: ["would rather"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 72,
        sentence1: "They must complete the project by Friday.",
        givenWord: "have",
        prefix: "They ",
        suffix: " complete the project by Friday.",
        correctAnswer: ["have to"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 73,
        sentence1: "It’s not necessary for you to come if you’re busy.",
        givenWord: "need",
        prefix: "You ",
        suffix: " come if you’re busy.",
        correctAnswer: ["don't need to"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 74,
        sentence1: "“Do you know where the bank is?” asked Alice.",
        givenWord: "if",
        prefix: "Alice asked me ",
        suffix: " where the bank was.",
        correctAnswer: ["if I knew"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 75,
        sentence1: "He didn’t like being treated unfairly.",
        givenWord: "minded",
        prefix: "He ",
        suffix: " being treated unfairly.",
        correctAnswer: ["didn't mind"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 76,
        sentence1: "She regrets selling her old house.",
        givenWord: "wish",
        prefix: "She ",
        suffix: " her old house.",
        correctAnswer: ["wishes she hadn't sold"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 77,
        sentence1: "It was such a difficult exam that many students failed.",
        givenWord: "so",
        prefix: "The exam ",
        suffix: " difficult that many students failed.",
        correctAnswer: ["was so"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 78,
        sentence1: "They began speaking English only after moving to London.",
        givenWord: "since",
        prefix: "They ",
        suffix: " moving to London.",
        correctAnswer: ["have spoken English since"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 79,
        sentence1: "I last met him three years ago.",
        givenWord: "since",
        prefix: "I ",
        suffix: " him.",
        correctAnswer: ["haven't met"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 80,
        sentence1: "“I drove to work because I missed the bus,” he said.",
        givenWord: "explained",
        prefix: "He ",
        suffix: " to work because he missed the bus.",
        correctAnswer: ["explained that he drove"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 81,
        sentence1: "It’s impossible to finish so much work in one day.",
        givenWord: "able",
        prefix: "I ",
        suffix: " finish so much work in one day.",
        correctAnswer: ["won't be able to"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 82,
        sentence1: "The movie was too loud for me to enjoy.",
        givenWord: "enough",
        prefix: "It ",
        suffix: " loud for me to enjoy.",
        correctAnswer: ["wasn't quiet enough"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 83,
        sentence1: "I prefer reading books to watching films.",
        givenWord: "rather",
        prefix: "I ",
        suffix: " reading books than watching films.",
        correctAnswer: ["would rather go"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 84,
        sentence1: "They started digging the tunnel last month.",
        givenWord: "been",
        prefix: "They ",
        suffix: " the tunnel since last month.",
        correctAnswer: ["have been digging"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 85,
        sentence1: "It wasn’t necessary for you to bring your own food.",
        givenWord: "needed",
        prefix: "You ",
        suffix: " your own food.",
        correctAnswer: ["didn't need to bring"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 86,
        sentence1: "“Can you tell me your name?” he asked.",
        givenWord: "asked",  
        prefix: "He ",
        suffix: " my name.",
        correctAnswer: ["asked me for"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 87,
        sentence1: "She regretted not joining the debate club.",
        givenWord: "wish",
        prefix: "She ",
        suffix: " the debate club.",
        correctAnswer: ["wishes she had joined"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 88,
        sentence1: "He almost fell off the ladder.",
        givenWord: "nearly",
        prefix: "He ",
        suffix: " off the ladder.",
        correctAnswer: ["nearly fell"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 89,
        sentence1: "It’s essential that we leave on time.",
        givenWord: "important",
        prefix: "It’s ",
        suffix: " we leave on time.",
        correctAnswer: ["important that"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 90,
        sentence1: "They can’t have forgotten about the appointment.",
        givenWord: "must",
        prefix: "They ",
        suffix: " about the appointment.",
        correctAnswer: ["must not have forgotten"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 91,
        sentence1: "I haven’t visited Paris since 2018.",
        givenWord: "since",
        prefix: "I ",
        suffix: " Paris.",
        correctAnswer: ["haven't visited"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 92,
        sentence1: "“Don’t spend all your money,” warned Dad.",
        givenWord: "advised",
        prefix: "Dad ",
        suffix: " all my money.",
        correctAnswer: ["advised me not to spend"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 93,
        sentence1: "She started working on the project last week.",
        givenWord: "been",
        prefix: "She ",
        suffix: " on the project since last week.",
        correctAnswer: ["has been working"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 94,
        sentence1: "It’s regrettable that they lost the match.",
        givenWord: "wish",
        prefix: "I ",
        suffix: " the match.",
        correctAnswer: ["wish they hadn't lost"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 95,
        sentence1: "I prefer walking to taking the bus.",
        givenWord: "rather",
        prefix: "I ",
        suffix: " walking than taking the bus.",
        correctAnswer: ["would rather"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 96,
        sentence1: "They must pay the rent by the end of the month.",
        givenWord: "have",
        prefix: "They ",
        suffix: " pay the rent by the end of the month.",
        correctAnswer: ["have to"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 97,
        sentence1: "It’s not necessary to reply to every email.",
        givenWord: "need",
        prefix: "You ",
        suffix: " to every email.",
        correctAnswer: ["don't need to reply"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 98,
        sentence1: "“Are you going to attend the meeting?” she asked.",
        givenWord: "if",
        prefix: "She asked me ",
        suffix: " the meeting.",
        correctAnswer: ["if I was attending"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 99,
        sentence1: "He regretted not asking for help sooner.",
        givenWord: "wish",
        prefix: "He ",
        suffix: " for help sooner.",
        correctAnswer: ["wishes he had asked"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 100,
        sentence1: "It was such a long journey that everyone was exhausted.",
        givenWord: "so",
        prefix: "The journey ",
        suffix: " long that everyone was exhausted.",
        correctAnswer: ["was so"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 101,
        sentence1: "I prefer jogging in the morning to exercising at night.",
        givenWord: "rather",
        prefix: "I ",
        suffix: " jogging in the morning than exercising at night.",
        correctAnswer: ["would rather go"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 102,
        sentence1: "They began discussing the issue after the meeting started.",
        givenWord: "been",
        prefix: "They ",
        suffix: " the issue since the meeting started.",
        correctAnswer: ["have been discussing"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 103,
        sentence1: "I can’t afford to buy a new car.",
        givenWord: "able",
        prefix: "I ",
        suffix: " afford to buy a new car.",
        correctAnswer: ["am not able to"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 104,
        sentence1: "“Tell me when you finish this,” said Carol.",
        givenWord: "asked",
        prefix: "Carol ",
        suffix: " when I finished that.",
        correctAnswer: ["asked me to tell"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 105,
        sentence1: "She started watching the series in January.",
        givenWord: "been",
        prefix: "She ",
        suffix: " the series since January.",
        correctAnswer: ["has been watching"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 106,
        sentence1: "It’s a shame that we didn’t win the competition.",
        givenWord: "wish",
        prefix: "I ",
        suffix: " the competition.",
        correctAnswer: ["wish we had won"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 107,
        sentence1: "I’d rather stay at home tonight.",
        givenWord: "prefer",
        prefix: "I ",
        suffix: " staying at home tonight.",
        correctAnswer: ["prefer"],
        minWords: 1,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 108,
        sentence1: "They must follow the new regulations from next month.",
        givenWord: "have",
        prefix: "They ",
        suffix: " follow the new regulations from next month.",
        correctAnswer: ["have to"],
        minWords: 2,
        maxWords: 3,
        status: 'pending'
    },
    {
        id: 109,
        sentence1: "I haven’t spoken to my sister since last Christmas.",
        givenWord: "since",
        prefix: "I ",
        suffix: " my sister.",
        correctAnswer: ["haven't spoken to"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 110,
        sentence1: "“Can you explain this problem?” asked the teacher.",
        givenWord: "wanted",
        prefix: "The teacher ",
        suffix: " this problem.",
        correctAnswer: ["wanted me to explain"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 111,
        sentence1: "He regrets selling his car so cheaply.",
        givenWord: "wish",
        prefix: "He ",
        suffix: " his car so cheaply.",
        correctAnswer: ["wishes he hadn't sold"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 112,
        sentence1: "It was too cold to go swimming.",
        givenWord: "enough",
        prefix: "It ",
        suffix: " go swimming.",
        correctAnswer: ["wasn't warm enough to"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 113,
        sentence1: "I’d rather read a book than watch TV.",
        givenWord: "prefer",
        prefix: "I ",
        suffix: " reading a book than watch TV.",
        correctAnswer: ["prefer"],
        minWords: 1,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 114,
        sentence1: "They started renovating the kitchen last Monday.",
        givenWord: "been",
        prefix: "They ",
        suffix: " the kitchen since last Monday.",
        correctAnswer: ["have been renovating"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 115,
        sentence1: "It’s not necessary for you to attend the meeting.",
        givenWord: "need",
        prefix: "You ",
        suffix: " attend the meeting.",
        correctAnswer: ["don't need to"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 116,
        sentence1: "“Did you see Alex at the concert?” asked Mike.",
        givenWord: "if",
        prefix: "Mike asked me ",
        suffix: " Alex at the concert.",
        correctAnswer: ["if I had seen"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 117,
        sentence1: "She began learning Spanish at school.",
        givenWord: "been",
        prefix: "She ",
        suffix: " Spanish since school.",
        correctAnswer: ["has been learning"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 118,
        sentence1: "It was such a boring lecture that many students fell asleep.",
        givenWord: "so",
        prefix: "The lecture ",
        suffix: " boring that many students fell asleep.",
        correctAnswer: ["was so"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 119,
        sentence1: "I prefer jogging in the morning to exercising at night.",
        givenWord: "rather",
        prefix: "I ",
        suffix: " jogging in the morning than exercising at night.",
        correctAnswer: ["would rather go"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 120,
        sentence1: "They must submit the report by Friday.",
        givenWord: "have",
        prefix: "They ",
        suffix: " submit the report by Friday.",
        correctAnswer: ["have to"],
        minWords: 3,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 121,
        sentence1: "Someone stole my car last night.",
        givenWord: "had",
        prefix: "My car ",
        suffix: " last night.",
        correctAnswer: ["had been stolen"],
        minWords: 3,
        maxWords: 5,
        status: 'pending'
    },
    {
        id: 122,
        sentence1: "‘Work harder,’ the manager said.",
        givenWord: "demanded",
        prefix: "The manager ",
        suffix: " we work harder.",
        correctAnswer: ["demanded that we work harder"],
        minWords: 5,
        maxWords: 5,
        status: 'pending'
    },
    {
        id: 123,
        sentence1: "She was too tired to continue working.",
        givenWord: "enough",
        prefix: "She ",
        suffix: " continue working.",
        correctAnswer: ["wasn't well enough to"],
        minWords: 4,
        maxWords: 5,
        status: 'pending'
    },
    {
        id: 124,
        sentence1: "They refused to take any action to fix the leak.",
        givenWord: "refused",
        prefix: "They ",
        suffix: " to take any action to fix the leak.",
        correctAnswer: ["refused"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 125,
        sentence1: "It’s a shame we can’t attend the wedding.",
        givenWord: "regret",
        prefix: "I ",
        suffix: " attending the wedding.",
        correctAnswer: ["regret not"],
        minWords: 2,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 126,
        sentence1: "You must clean your room before you leave.",
        givenWord: "have",
        prefix: "You ",
        suffix: " your room before you leave.",
        correctAnswer: ["have to clean"],
        minWords: 3,
        maxWords: 3,
        status: 'pending'
    },
    {
        id: 127,
        sentence1: "Don’t forget to lock the door.",
        givenWord: "remind",
        prefix: "She ",
        suffix: " to lock the door.",
        correctAnswer: ["reminded me"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 128,
        sentence1: "They allowed me to park here.",
        givenWord: "let",
        prefix: "I ",
        suffix: " park here.",
        correctAnswer: ["was let to"],
        minWords: 3,
        maxWords: 3,
        status: 'pending'
    },
    {
        id: 129,
        sentence1: "Mary succeeded in passing the exam.",
        givenWord: "manage",
        prefix: "Mary ",
        suffix: " to pass the exam.",
        correctAnswer: ["managed to"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 130,
        sentence1: "‘I don’t know the answer,’ she said.",
        givenWord: "admit",
        prefix: "She ",
        suffix: " that she didn't know the answer.",
        correctAnswer: ["admitted"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 131,
        sentence1: "I’m certain they’ll refuse the offer.",
        givenWord: "bound",
        prefix: "They ",
        suffix: " to refuse the offer.",
        correctAnswer: ["are bound"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 132,
        sentence1: "Somebody has eaten all the cake.",
        givenWord: "must",
        prefix: "The cake ",
        suffix: " by someone.",
        correctAnswer: ["must have been eaten"],
        minWords: 4,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 133,
        sentence1: "We haven’t received any news since Monday.",
        givenWord: "heard",
        prefix: "We ",
        suffix: " anything since Monday.",
        correctAnswer: ["haven't heard"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 134,
        sentence1: "Don’t stay out late or you’ll catch a cold.",
        givenWord: "lest",
        prefix: "Don't stay out late ",
        suffix: " catch a cold.",
        correctAnswer: ["lest you"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 135,
        sentence1: "I don't think it’s necessary for us to go today.",
        givenWord: "need",
        prefix: "We ",
        suffix: " to go today.",
        correctAnswer: ["don't need"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 136,
        sentence1: "My mother said, ‘Be home by midnight.’",
        givenWord: "warn",
        prefix: "My mother ",
        suffix: " me to be home by midnight.",
        correctAnswer: ["warned"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 137,
        sentence1: "I can’t stand noisy neighbors.",
        givenWord: "hate",
        prefix: "I ",
        suffix: " noisy neighbors.",
        correctAnswer: ["hate"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 138,
        sentence1: "Sam had eaten all the cookies before we arrived.",
        givenWord: "already",
        prefix: "Sam had ",
        suffix: " all the cookies before we arrived.",
        correctAnswer: ["already eaten"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 139,
        sentence1: "No one in the office speaks French.",
        givenWord: "able",
        prefix: "No one in the office ",
        suffix: " speak French.",
        correctAnswer: ["is able to"],
        minWords: 3,
        maxWords: 3,
        status: 'pending'
    },
    {
        id: 140,
        sentence1: "She didn’t break the vase; her brother did.",
        givenWord: "instead",
        prefix: "Her brother ",
        suffix: " the vase.",
        correctAnswer: ["broke it instead"],
        minWords: 3,
        maxWords: 3,
        status: 'pending'
    },
    {
        id: 141,
        sentence1: "He rarely goes to bed early.",
        givenWord: "seldom",
        prefix: "He ",
        suffix: " goes to bed early.",
        correctAnswer: ["seldom"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 142,
        sentence1: "It’s too late to apologize now.",
        givenWord: "point",
        prefix: "There’s ",
        suffix: " in apologizing now.",
        correctAnswer: ["no point"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 143,
        sentence1: "We couldn’t find anyone to fix the car.",
        givenWord: "unable",
        prefix: "We ",
        suffix: " to find anyone to fix the car.",
        correctAnswer: ["were unable"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 144,
        sentence1: "He forgot to lock the window before leaving.",
        givenWord: "failed",
        prefix: "He ",
        suffix: " to lock the window before leaving.",
        correctAnswer: ["failed"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 145,
        sentence1: "They will have completed the project by noon.",
        givenWord: "by",
        prefix: "They will have completed the project ",
        suffix: ".",
        correctAnswer: ["by noon"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 146,
        sentence1: "I don’t think we will meet him again.",
        givenWord: "unlikely",
        prefix: "We ",
        suffix: " meet him again.",
        correctAnswer: ["are unlikely to"],
        minWords: 3,
        maxWords: 3,
        status: 'pending'
    },
    {
        id: 147,
        sentence1: "José smashed the window with a ball.",
        givenWord: "broken",
        prefix: "The window ",
        suffix: " by José with a ball.",
        correctAnswer: ["was broken"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 148,
        sentence1: "I have never visited Rome before.",
        givenWord: "first",
        prefix: "This is the first time ",
        suffix: " Rome.",
        correctAnswer: ["I have visited"],
        minWords: 3,
        maxWords: 3,
        status: 'pending'
    },
    {
        id: 149,
        sentence1: "Sarah lasted only ten minutes on the treadmill.",
        givenWord: "manage",
        prefix: "Sarah could only ",
        suffix: " ten minutes on the treadmill.",
        correctAnswer: ["manage to run"],
        minWords: 3,
        maxWords: 3,
        status: 'pending'
    },
    {
        id: 150,
        sentence1: "They will have been living here for five years by next June.",
        givenWord: "since",
        prefix: "They have lived here ",
        suffix: " next June.",
        correctAnswer: ["since 2020"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 151,
        sentence1: "He didn’t pay attention, so he missed all the details.",
        givenWord: "because",
        prefix: "He missed all the details ",
        suffix: ".",
        correctAnswer: ["because he didn't pay attention"],
        minWords: 5,
        maxWords: 5,
        status: 'pending'
    },
    {
        id: 152,
        sentence1: "No one will believe his story.",
        givenWord: "unlikely",
        prefix: "His story ",
        suffix: " by anyone.",
        correctAnswer: ["is unlikely to be believed"],
        minWords: 5,
        maxWords: 5,
        status: 'pending'
    },
    {
        id: 153,
        sentence1: "You’re not old enough to drive a car.",
        givenWord: "too",
        prefix: "You are ",
        suffix: " to drive a car.",
        correctAnswer: ["too young"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 154,
        sentence1: "He was so impressed that he forgot to speak.",
        givenWord: "under",
        prefix: "He was ",
        suffix: " that he forgot to speak.",
        correctAnswer: ["under such an impression"],
        minWords: 4,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 155,
        sentence1: "They rescued the cat from the burning building.",
        givenWord: "saved",
        prefix: "The cat ",
        suffix: " from the burning building.",
        correctAnswer: ["was saved"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 156,
        sentence1: "I couldn’t resist the temptation to open it.",
        givenWord: "able",
        prefix: "I ",
        suffix: " resist the temptation to open it.",
        correctAnswer: ["wasn't able to"],
        minWords: 3,
        maxWords: 3,
        status: 'pending'
    },
    {
        id: 157,
        sentence1: "She smiled so happily that everyone felt better.",
        givenWord: "such",
        prefix: "She had ",
        suffix: " a happy smile that everyone felt better.",
        correctAnswer: ["such a happy"],
        minWords: 3,
        maxWords: 3,
        status: 'pending'
    },
    {
        id: 158,
        sentence1: "He didn’t notice me, although I waved my hand.",
        givenWord: "despite",
        prefix: "He didn't notice me ",
        suffix: ".",
        correctAnswer: ["despite my waving"],
        minWords: 3,
        maxWords: 3,
        status: 'pending'
    },
    {
        id: 159,
        sentence1: "The new system will cost more than expected.",
        givenWord: "in",
        prefix: "The new system ",
        suffix: " the expected cost.",
        correctAnswer: ["is in excess of"],
        minWords: 4,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 160,
        sentence1: "I’m looking forward to seeing you again.",
        givenWord: "eager",
        prefix: "I am ",
        suffix: " to see you again.",
        correctAnswer: ["eager"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 161,
        sentence1: "No one told him that the meeting was canceled.",
        givenWord: "left",
        prefix: "He ",
        suffix: " in ignorance of the meeting’s cancellation.",
        correctAnswer: ["was left"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 162,
        sentence1: "He prefers playing chess to watching TV.",
        givenWord: "rather",
        prefix: "He would ",
        suffix: " playing chess than watch TV.",
        correctAnswer: ["rather play"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 163,
        sentence1: "We should start now or we’ll be late.",
        givenWord: "unless",
        prefix: "We should start now ",
        suffix: " we’ll be late.",
        correctAnswer: ["unless we want to"],
        minWords: 4,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 164,
        sentence1: "She’s too shy to speak in public.",
        givenWord: "enough",
        prefix: "She ",
        suffix: " to speak in public.",
        correctAnswer: ["isn't brave enough"],
        minWords: 3,
        maxWords: 3,
        status: 'pending'
    },
    {
        id: 165,
        sentence1: "They enjoy watching movies on weekends.",
        givenWord: "fond",
        prefix: "They are ",
        suffix: " of watching movies on weekends.",
        correctAnswer: ["fond"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 166,
        sentence1: "I don’t want to go unless you come too.",
        givenWord: "unless",
        prefix: "I won't go ",
        suffix: " you come too.",
        correctAnswer: ["unless"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 167,
        sentence1: "It’s not certain whether she’ll accept the offer.",
        givenWord: "unclear",
        prefix: "It is ",
        suffix: " she’ll accept the offer.",
        correctAnswer: ["unclear if"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 168,
        sentence1: "He asked, ‘Do you like coffee or tea?’",
        givenWord: "wondered",
        prefix: "He ",
        suffix: " whether I liked coffee or tea.",
        correctAnswer: ["wondered"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 169,
        sentence1: "I only realized my mistake after it was too late.",
        givenWord: "realized",
        prefix: "I ",
        suffix: " my mistake too late.",
        correctAnswer: ["realized"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 170,
        sentence1: "I can’t hear you because it’s too noisy.",
        givenWord: "unable",
        prefix: "I am ",
        suffix: " hear you.",
        correctAnswer: ["unable to"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 171,
        sentence1: "He suggested that we leave early.",
        givenWord: "proposed",
        prefix: "He ",
        suffix: " leaving early.",
        correctAnswer: ["proposed"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 172,
        sentence1: "Jake borrowed my book without asking.",
        givenWord: "took",
        prefix: "My book ",
        suffix: " by Jake without asking.",
        correctAnswer: ["was taken"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 173,
        sentence1: "She writes in her journal every night.",
        givenWord: "habit",
        prefix: "It is her ",
        suffix: " to write in her journal every night.",
        correctAnswer: ["habit"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 174,
        sentence1: "It’s likely they’ve already left.",
        givenWord: "probably",
        prefix: "They ",
        suffix: " left.",
        correctAnswer: ["have probably"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 175,
        sentence1: "He attends every lecture, even when he’s tired.",
        givenWord: "despite",
        prefix: "He attends every lecture ",
        suffix: " being tired.",
        correctAnswer: ["despite"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 176,
        sentence1: "It’s unnecessary for us to hurry; the train is delayed.",
        givenWord: "no",
        prefix: "There is ",
        suffix: " to hurry.",
        correctAnswer: ["no need"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 177,
        sentence1: "I was surprised that she didn’t recognize me.",
        givenWord: "surprise",
        prefix: "It ",
        suffix: " her not recognizing me.",
        correctAnswer: ["surprised me"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 178,
        sentence1: "She hardly ever eats dessert after dinner.",
        givenWord: "rarely",
        prefix: "She ",
        suffix: " eats dessert after dinner.",
        correctAnswer: ["rarely"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 179,
        sentence1: "He won’t agree unless we offer him more money.",
        givenWord: "unless",
        prefix: "He ",
        suffix: " more money.",
        correctAnswer: ["won't agree unless we offer"],
        minWords: 5,
        maxWords: 5,
        status: 'pending'
    },
    {
        id: 180,
        sentence1: "There’s no point in arguing any further.",
        givenWord: "worth",
        prefix: "It’s not ",
        suffix: " arguing any further.",
        correctAnswer: ["worth"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 181,
        sentence1: "They delayed the meeting until next week.",
        givenWord: "postpone",
        prefix: "They ",
        suffix: " the meeting until next week.",
        correctAnswer: ["postponed"],
        monwords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 182,
        sentence1: "He refused to participate in the discussion.",
        givenWord: "declined",
        prefix: "He ",
        suffix: " to participate in the discussion.",
        correctAnswer: ["declined"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 183,
        sentence1: "She’s interested in learning Japanese.",
        givenWord: "keen",
        prefix: "She’s ",
        suffix: " on learning Japanese.",
        correctAnswer: ["keen"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 184,
        sentence1: "I must remember to call her tomorrow.",
        givenWord: "ought",
        prefix: "I ",
        suffix: " to call her tomorrow.",
        correctAnswer: ["ought"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 185,
        sentence1: "We regretted not taking the earlier train.",
        givenWord: "wish",
        prefix: "We ",
        suffix: " we had taken the earlier train.",
        correctAnswer: ["wish"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 186,
        sentence1: "He ran very fast, so he arrived first.",
        givenWord: "so",
        prefix: "He ran ",
        suffix: " that he arrived first.",
        correctAnswer: ["so fast"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 187,
        sentence1: "I’m certain that they won’t forget to call.",
        givenWord: "sure",
        prefix: "I’m ",
        suffix: " they won’t forget to call.",
        correctAnswer: ["sure"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 188,
        sentence1: "It’s very unlikely that he’ll arrive on time.",
        givenWord: "unlikely",
        prefix: "He ",
        suffix: " arrive on time.",
        correctAnswer: ["is unlikely to"],
        minWords: 3,
        maxWords: 3,
        status: 'pending'
    },
    {
        id: 189,
        sentence1: "They refused to help us with the project.",
        givenWord: "declined",
        prefix: "They ",
        suffix: " to help us with the project.",
        correctAnswer: ["declined"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 190,
        sentence1: "He admitted making a mistake in judgment.",
        givenWord: "confess",
        prefix: "He ",
        suffix: " making a mistake in judgment.",
        correctAnswer: ["confessed to"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 191,
        sentence1: "She’s determined to succeed in her career.",
        givenWord: "set",
        prefix: "She’s ",
        suffix: " on succeeding in her career.",
        correctAnswer: ["set"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 192,
        sentence1: "I’m not old enough to vote.",
        givenWord: "too",
        prefix: "I am ",
        suffix: " to vote.",
        correctAnswer: ["too young"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 193,
        sentence1: "The book was so interesting that I couldn’t put it down.",
        givenWord: "such",
        prefix: "It ",
        suffix: " book that I couldn’t put it down.",
        correctAnswer: ["was such a"],
        minWords: 3,
        maxWords: 3,
        status: 'pending'
    },
    {
        id: 194,
        sentence1: "He didn’t arrive in time, so we started without him.",
        givenWord: "because",
        prefix: "We started without him ",
        suffix: ".",
        correctAnswer: ["because he didn’t arrive"],
        minWords: 4,
        maxWords: 4,
        status: 'pending'
    },
    {
        id: 195,
        sentence1: "She’s likely to be promoted next month.",
        givenWord: "bound",
        prefix: "She ",
        suffix: " to be promoted next month.",
        correctAnswer: ["is bound"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 196,
        sentence1: "They should have told us earlier.",
        givenWord: "ought",
        prefix: "They ",
        suffix: " to have told us earlier.",
        correctAnswer: ["ought"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    {
        id: 197,
        sentence1: "I don’t see any reason for complaining.",
        givenWord: "point",
        prefix: "There’s ",
        suffix: " in complaining.",
        correctAnswer: ["no point"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 198,
        sentence1: "He’s too busy to attend the meeting.",
        givenWord: "enough",
        prefix: "He ",
        suffix: " to attend the meeting.",
        correctAnswer: ["isn't free enough"],
        minWords: 3,
        maxWords: 3,
        status: 'pending'
    },
    {
        id: 199,
        sentence1: "They continued working until they had finished.",
        givenWord: "keep",
        prefix: "They ",
        suffix: " working until finished.",
        correctAnswer: ["kept on"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    {
        id: 200,
        sentence1: "I’m certain that she’ll accept the invitation.",
        givenWord: "positive",
        prefix: "I’m ",
        suffix: " she’ll accept the invitation.",
        correctAnswer: ["positive"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },

    // ----------------------------
    // 100 New Exercises (IDs 201 through 300)
    // Covering various B2 grammar & syntax aspects
    // ----------------------------

    // 201
    {
        id: 201,
        sentence1: "They will finish the work by Friday.",
        givenWord: "be",
        prefix: "The work will ",
        suffix: " by Friday.",
        correctAnswer: ["be finished"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 202
    {
        id: 202,
        sentence1: "I didn’t see him leave the room.",
        givenWord: "watch",
        prefix: "I ",
        suffix: " him leave the room.",
        correctAnswer: ["didn't watch"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 203
    {
        id: 203,
        sentence1: "She hopes that you will come to her party.",
        givenWord: "hope",
        prefix: "She ",
        suffix: " that you will come to her party.",
        correctAnswer: ["hopes"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 204
    {
        id: 204,
        sentence1: "He admits that he made a mistake.",
        givenWord: "own",
        prefix: "He ",
        suffix: " having made a mistake.",
        correctAnswer: ["owns up to"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 205
    {
        id: 205,
        sentence1: "They completed the project despite many problems.",
        givenWord: "in",
        prefix: "They completed the project ",
        suffix: ".",
        correctAnswer: ["in spite of"],
        minWords: 3,
        maxWords: 3,
        status: 'pending'
    },
    // 206
    {
        id: 206,
        sentence1: "No one warned us about the traffic.",
        givenWord: "left",
        prefix: "We ",
        suffix: " in ignorance of the traffic.",
        correctAnswer: ["were left"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 207
    {
        id: 207,
        sentence1: "I must study hard, otherwise I will fail.",
        givenWord: "or",
        prefix: "I must study hard ",
        suffix: " I will fail.",
        correctAnswer: ["or else"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 208
    {
        id: 208,
        sentence1: "It started to rain while we were walking.",
        givenWord: "began",
        prefix: "It ",
        suffix: " to rain while we were walking.",
        correctAnswer: ["began"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 209
    {
        id: 209,
        sentence1: "He was so tired that he could barely walk.",
        givenWord: "such",
        prefix: "He was ",
        suffix: " that he could barely walk.",
        correctAnswer: ["such a"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 210
    {
        id: 210,
        sentence1: "She couldn’t finish the test because she ran out of time.",
        givenWord: "unable",
        prefix: "She was ",
        suffix: " to finish the test due to time.",
        correctAnswer: ["unable"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 211
    {
        id: 211,
        sentence1: "He’s too young to drive a car.",
        givenWord: "too",
        prefix: "He is ",
        suffix: " to drive a car.",
        correctAnswer: ["too young"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 212
    {
        id: 212,
        sentence1: "She asked, ‘Where did you buy that dress?’",
        givenWord: "inquired",
        prefix: "She ",
        suffix: " where I had bought that dress.",
        correctAnswer: ["inquired"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 213
    {
        id: 213,
        sentence1: "They were delayed because of the heavy traffic.",
        givenWord: "due",
        prefix: "They were delayed ",
        suffix: " the heavy traffic.",
        correctAnswer: ["due to"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 214
    {
        id: 214,
        sentence1: "Everyone in the class knows him.",
        givenWord: "known",
        prefix: "He is ",
        suffix: " by everyone in the class.",
        correctAnswer: ["known"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 215
    {
        id: 215,
        sentence1: "You should see a doctor if you feel unwell.",
        givenWord: "ought",
        prefix: "You ",
        suffix: " to see a doctor if you feel unwell.",
        correctAnswer: ["ought"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 216
    {
        id: 216,
        sentence1: "He must finish his work before he goes out.",
        givenWord: "has",
        prefix: "He ",
        suffix: " to finish his work before he goes out.",
        correctAnswer: ["has"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 217
    {
        id: 217,
        sentence1: "She prefers tea to coffee.",
        givenWord: "rather",
        prefix: "She would ",
        suffix: " tea than coffee.",
        correctAnswer: ["rather have"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 218
    {
        id: 218,
        sentence1: "They decided to postpone the meeting until Monday.",
        givenWord: "postpone",
        prefix: "They ",
        suffix: " the meeting until Monday.",
        correctAnswer: ["postponed"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 219
    {
        id: 219,
        sentence1: "He nearly missed the train.",
        givenWord: "almost",
        prefix: "He ",
        suffix: " the train.",
        correctAnswer: ["almost missed"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 220
    {
        id: 220,
        sentence1: "I’m certain she won’t be late.",
        givenWord: "sure",
        prefix: "I’m ",
        suffix: " she won’t be late.",
        correctAnswer: ["sure"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 221
    {
        id: 221,
        sentence1: "He was surprised to see her at the party.",
        givenWord: "astonished",
        prefix: "He was ",
        suffix: " to see her at the party.",
        correctAnswer: ["astonished"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 222
    {
        id: 222,
        sentence1: "She didn’t want to stay, so she left early.",
        givenWord: "rather",
        prefix: "She would ",
        suffix: " stay and left early.",
        correctAnswer: ["rather not"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 223
    {
        id: 223,
        sentence1: "It was too dark to read the map.",
        givenWord: "enough",
        prefix: "It ",
        suffix: " to read the map.",
        correctAnswer: ["wasn't light enough"],
        minWords: 3,
        maxWords: 3,
        status: 'pending'
    },
    // 224
    {
        id: 224,
        sentence1: "I didn’t know that she was married.",
        givenWord: "realize",
        prefix: "I didn't ",
        suffix: " she was married.",
        correctAnswer: ["realize"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 225
    {
        id: 225,
        sentence1: "They insisted that he should apologize.",
        givenWord: "demanded",
        prefix: "They ",
        suffix: " that he should apologize.",
        correctAnswer: ["demanded"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 226
    {
        id: 226,
        sentence1: "He doesn’t seem to have enough money.",
        givenWord: "appear",
        prefix: "He ",
        suffix: " not to have enough money.",
        correctAnswer: ["appears"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 227
    {
        id: 227,
        sentence1: "She regrets not studying for the exam.",
        givenWord: "wish",
        prefix: "She ",
        suffix: " she had studied for the exam.",
        correctAnswer: ["wishes"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 228
    {
        id: 228,
        sentence1: "They built the house in 1990.",
        givenWord: "was",
        prefix: "The house ",
        suffix: " built in 1990.",
        correctAnswer: ["was built"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 229
    {
        id: 229,
        sentence1: "She saw him cross the street.",
        givenWord: "witness",
        prefix: "She ",
        suffix: " him cross the street.",
        correctAnswer: ["witnessed"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 230
    {
        id: 230,
        sentence1: "I didn’t expect him to arrive so early.",
        givenWord: "surprised",
        prefix: "I was ",
        suffix: " him to arrive so early.",
        correctAnswer: ["surprised that"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 231
    {
        id: 231,
        sentence1: "He always arrives on time.",
        givenWord: "keeps",
        prefix: "He ",
        suffix: " arrival on time.",
        correctAnswer: ["keeps up his"],
        minWords: 3,
        maxWords: 3,
        status: 'pending'
    },
    // 232
    {
        id: 232,
        sentence1: "She’s fond of playing tennis.",
        givenWord: "keen",
        prefix: "She’s ",
        suffix: " on playing tennis.",
        correctAnswer: ["keen"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 233
    {
        id: 233,
        sentence1: "It’s unnecessary for him to come early.",
        givenWord: "need",
        prefix: "He ",
        suffix: " to come early.",
        correctAnswer: ["doesn’t need"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 234
    {
        id: 234,
        sentence1: "They proposed going to the beach.",
        givenWord: "suggested",
        prefix: "They ",
        suffix: " going to the beach.",
        correctAnswer: ["suggested"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 235
    {
        id: 235,
        sentence1: "He couldn’t remember her name.",
        givenWord: "forgot",
        prefix: "He ",
        suffix: " her name.",
        correctAnswer: ["forgot"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 236
    {
        id: 236,
        sentence1: "She’ll complete the project by next week.",
        givenWord: "due",
        prefix: "The project is ",
        suffix: " next week.",
        correctAnswer: ["due to be completed"],
        minWords: 3,
        maxWords: 3,
        status: 'pending'
    },
    // 237
    {
        id: 237,
        sentence1: "I’m certain they will win the match.",
        givenWord: "positive",
        prefix: "I’m ",
        suffix: " they will win the match.",
        correctAnswer: ["positive"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 238
    {
        id: 238,
        sentence1: "It’s too expensive to buy now.",
        givenWord: "afford",
        prefix: "I can't ",
        suffix: " to buy now.",
        correctAnswer: ["afford it"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 239
    {
        id: 239,
        sentence1: "She promised to help me with my homework.",
        givenWord: "assured",
        prefix: "She ",
        suffix: " me that she would help with my homework.",
        correctAnswer: ["assured"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 240
    {
        id: 240,
        sentence1: "He regrets not attending the meeting.",
        givenWord: "wish",
        prefix: "He ",
        suffix: " he had attended the meeting.",
        correctAnswer: ["wishes"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 241
    {
        id: 241,
        sentence1: "It annoys me when people interrupt me.",
        givenWord: "bothers",
        prefix: "It ",
        suffix: " me when people interrupt me.",
        correctAnswer: ["bothers"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 242
    {
        id: 242,
        sentence1: "They almost won the match.",
        givenWord: "nearly",
        prefix: "They ",
        suffix: " won the match.",
        correctAnswer: ["nearly"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 243
    {
        id: 243,
        sentence1: "She’s sure he will call tomorrow.",
        givenWord: "positive",
        prefix: "She’s ",
        suffix: " he will call tomorrow.",
        correctAnswer: ["positive"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 244
    {
        id: 244,
        sentence1: "He won’t succeed unless he studies harder.",
        givenWord: "unless",
        prefix: "He ",
        suffix: " he studies harder.",
        correctAnswer: ["won't succeed unless"],
        minWords: 3,
        maxWords: 3,
        status: 'pending'
    },
    // 245
    {
        id: 245,
        sentence1: "She refused to answer my question.",
        givenWord: "declined",
        prefix: "She ",
        suffix: " to answer my question.",
        correctAnswer: ["declined"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 246
    {
        id: 246,
        sentence1: "I have never felt so happy.",
        givenWord: "till",
        prefix: "I ",
        suffix: " I ever felt so happy.",
        correctAnswer: ["hadn't felt"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 247
    {
        id: 247,
        sentence1: "They constructed the building last year.",
        givenWord: "built",
        prefix: "The building was ",
        suffix: " last year.",
        correctAnswer: ["built"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 248
    {
        id: 248,
        sentence1: "She said, ‘I will help you.’",
        givenWord: "promised",
        prefix: "She ",
        suffix: " to help me.",
        correctAnswer: ["promised"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 249
    {
        id: 249,
        sentence1: "He must be at home by now.",
        givenWord: "sure",
        prefix: "He’s ",
        suffix: " at home by now.",
        correctAnswer: ["sure to be"],
        minWords: 3,
        maxWords: 3,
        status: 'pending'
    },
    // 250
    {
        id: 250,
        sentence1: "They succeeded in solving the problem.",
        givenWord: "managed",
        prefix: "They ",
        suffix: " to solve the problem.",
        correctAnswer: ["managed"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 251
    {
        id: 251,
        sentence1: "She spends too much money on clothes.",
        givenWord: "spends",
        prefix: "She ",
        suffix: " too much money on clothes.",
        correctAnswer: ["spends"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 252
    {
        id: 252,
        sentence1: "He couldn’t explain the reason for his absence.",
        givenWord: "account",
        prefix: "He couldn’t ",
        suffix: " for his absence.",
        correctAnswer: ["give an account"],
        minWords: 3,
        maxWords: 3,
        status: 'pending'
    },
    // 253
    {
        id: 253,
        sentence1: "It annoyed me that he kept interrupting.",
        givenWord: "bothered",
        prefix: "I was ",
        suffix: " that he kept interrupting.",
        correctAnswer: ["bothered"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 254
    {
        id: 254,
        sentence1: "She refused to participate in the survey.",
        givenWord: "declined",
        prefix: "She ",
        suffix: " to take part in the survey.",
        correctAnswer: ["declined"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 255
    {
        id: 255,
        sentence1: "He always complains about the weather.",
        givenWord: "keeps",
        prefix: "He ",
        suffix: " complaining about the weather.",
        correctAnswer: ["keeps on"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 256
    {
        id: 256,
        sentence1: "They decided not to go on holiday.",
        givenWord: "opted",
        prefix: "They ",
        suffix: " out of going on holiday.",
        correctAnswer: ["opted"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 257
    {
        id: 257,
        sentence1: "She was too busy to answer the phone.",
        givenWord: "busy",
        prefix: "She was ",
        suffix: " to answer the phone.",
        correctAnswer: ["too busy"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 258
    {
        id: 258,
        sentence1: "He mustn’t be allowed to drive drunk.",
        givenWord: "prohibited",
        prefix: "He is ",
        suffix: " from driving drunk.",
        correctAnswer: ["prohibited"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 259
    {
        id: 259,
        sentence1: "They recycled all the old newspapers.",
        givenWord: "were",
        prefix: "All the old newspapers ",
        suffix: " recycled.",
        correctAnswer: ["were recycled"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 260
    {
        id: 260,
        sentence1: "I don’t suppose he’ll come on time.",
        givenWord: "doubt",
        prefix: "I ",
        suffix: " that he’ll come on time.",
        correctAnswer: ["doubt"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 261
    {
        id: 261,
        sentence1: "She’s likely to receive a promotion soon.",
        givenWord: "bound",
        prefix: "She’s ",
        suffix: " to receive a promotion soon.",
        correctAnswer: ["bound"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 262
    {
        id: 262,
        sentence1: "He insisted that he had seen her before.",
        givenWord: "claim",
        prefix: "He ",
        suffix: " that he had seen her before.",
        correctAnswer: ["claimed"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 263
    {
        id: 263,
        sentence1: "They’d rather stay home than go out.",
        givenWord: "prefer",
        prefix: "They ",
        suffix: " staying home rather than going out.",
        correctAnswer: ["prefer"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 264
    {
        id: 264,
        sentence1: "I can’t imagine living without my phone.",
        givenWord: "impossible",
        prefix: "It is ",
        suffix: " for me to live without my phone.",
        correctAnswer: ["impossible"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 265
    {
        id: 265,
        sentence1: "She apologized for being late.",
        givenWord: "sorry",
        prefix: "She ",
        suffix: " for being late.",
        correctAnswer: ["was sorry"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 266
    {
        id: 266,
        sentence1: "They let the cat out before leaving.",
        givenWord: "allowed",
        prefix: "The cat was ",
        suffix: " before leaving.",
        correctAnswer: ["allowed out"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 267
    {
        id: 267,
        sentence1: "I don’t think I’ll finish on time.",
        givenWord: "unlikely",
        prefix: "I’m ",
        suffix: " to finish on time.",
        correctAnswer: ["unlikely"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 268
    {
        id: 268,
        sentence1: "She made me apologize to him.",
        givenWord: "forced",
        prefix: "I was ",
        suffix: " to apologize to him.",
        correctAnswer: ["forced"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 269
    {
        id: 269,
        sentence1: "He’s familiar with the new system.",
        givenWord: "used",
        prefix: "He is ",
        suffix: " to the new system.",
        correctAnswer: ["used"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 270
    {
        id: 270,
        sentence1: "They arrived early so they could help.",
        givenWord: "in",
        prefix: "They arrived early ",
        suffix: " order to help.",
        correctAnswer: ["in order to"],
        minWords: 3,
        maxWords: 3,
        status: 'pending'
    },
    // 271
    {
        id: 271,
        sentence1: "She failed to notice the mistake.",
        givenWord: "missed",
        prefix: "She ",
        suffix: " the mistake.",
        correctAnswer: ["missed"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 272
    {
        id: 272,
        sentence1: "It’s not certain whether he will come.",
        givenWord: "uncertain",
        prefix: "It is ",
        suffix: " whether he will come.",
        correctAnswer: ["uncertain"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 273
    {
        id: 273,
        sentence1: "She considers herself lucky.",
        givenWord: "reckon",
        prefix: "She ",
        suffix: " herself lucky.",
        correctAnswer: ["reckons"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 274
    {
        id: 274,
        sentence1: "He didn’t want to go by himself.",
        givenWord: "afraid",
        prefix: "He was ",
        suffix: " to go by himself.",
        correctAnswer: ["afraid"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 275
    {
        id: 275,
        sentence1: "They promised they would be careful.",
        givenWord: "assure",
        prefix: "They ",
        suffix: " that they would be careful.",
        correctAnswer: ["assured"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 276
    {
        id: 276,
        sentence1: "She hopes to visit Paris next year.",
        givenWord: "eager",
        prefix: "She is ",
        suffix: " to visit Paris next year.",
        correctAnswer: ["eager"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 277
    {
        id: 277,
        sentence1: "He refused to help me with that task.",
        givenWord: "declined",
        prefix: "He ",
        suffix: " to help me with that task.",
        correctAnswer: ["declined"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 278
    {
        id: 278,
        sentence1: "It’s impossible to complete in one day.",
        givenWord: "unable",
        prefix: "I am ",
        suffix: " to complete it in one day.",
        correctAnswer: ["unable"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 279
    {
        id: 279,
        sentence1: "She spends hours reading every evening.",
        givenWord: "devotes",
        prefix: "She ",
        suffix: " hours to reading every evening.",
        correctAnswer: ["devotes"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 280
    {
        id: 280,
        sentence1: "They agreed to help us move tomorrow.",
        givenWord: "offered",
        prefix: "They ",
        suffix: " to help us move tomorrow.",
        correctAnswer: ["offered"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 281
    {
        id: 281,
        sentence1: "He nearly missed his flight.",
        givenWord: "almost",
        prefix: "He ",
        suffix: " his flight.",
        correctAnswer: ["almost missed"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 282
    {
        id: 282,
        sentence1: "I can’t recall where I left my keys.",
        givenWord: "remember",
        prefix: "I can't ",
        suffix: " where I left my keys.",
        correctAnswer: ["remember"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 283
    {
        id: 283,
        sentence1: "She’s likely to accept our invitation.",
        givenWord: "bound",
        prefix: "She’s ",
        suffix: " to accept our invitation.",
        correctAnswer: ["bound"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 284
    {
        id: 284,
        sentence1: "He suggested going for a walk instead.",
        givenWord: "proposed",
        prefix: "He ",
        suffix: " going for a walk instead.",
        correctAnswer: ["proposed"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 285
    {
        id: 285,
        sentence1: "They’ll have finished by the time we arrive.",
        givenWord: "finished",
        prefix: "They will have ",
        suffix: " by the time we arrive.",
        correctAnswer: ["finished"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 286
    {
        id: 286,
        sentence1: "She regrets not calling her friend sooner.",
        givenWord: "wish",
        prefix: "She ",
        suffix: " she had called her friend sooner.",
        correctAnswer: ["wishes"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 287
    {
        id: 287,
        sentence1: "He forgot to send the email on time.",
        givenWord: "neglect",
        prefix: "He ",
        suffix: " to send the email on time.",
        correctAnswer: ["neglected"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 288
    {
        id: 288,
        sentence1: "It’s not necessary for you to apologize.",
        givenWord: "need",
        prefix: "You ",
        suffix: " to apologize.",
        correctAnswer: ["don't need"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 289
    {
        id: 289,
        sentence1: "She’s too proud to ask for help.",
        givenWord: "too",
        prefix: "She’s ",
        suffix: " to ask for help.",
        correctAnswer: ["too proud"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 290
    {
        id: 290,
        sentence1: "He managed to finish the marathon despite injury.",
        givenWord: "succeeded",
        prefix: "He ",
        suffix: " to finish the marathon despite injury.",
        correctAnswer: ["succeeded"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 291
    {
        id: 291,
        sentence1: "They failed to complete the assignment on time.",
        givenWord: "unable",
        prefix: "They were ",
        suffix: " to complete the assignment on time.",
        correctAnswer: ["unable"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 292
    {
        id: 292,
        sentence1: "She asked, ‘Could you lend me some money?’",
        givenWord: "requested",
        prefix: "She ",
        suffix: " that I lend her some money.",
        correctAnswer: ["requested"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 293
    {
        id: 293,
        sentence1: "I’m certain they won’t forget the appointment.",
        givenWord: "confident",
        prefix: "I am ",
        suffix: " they won’t forget the appointment.",
        correctAnswer: ["confident"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 294
    {
        id: 294,
        sentence1: "You mustn’t swim in this lake.",
        givenWord: "forbidden",
        prefix: "Swimming in this lake is ",
        suffix: ".",
        correctAnswer: ["forbidden"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 295
    {
        id: 295,
        sentence1: "She’s looking forward to meeting him.",
        givenWord: "eager",
        prefix: "She’s ",
        suffix: " to meet him.",
        correctAnswer: ["eager"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 296
    {
        id: 296,
        sentence1: "They insisted that we leave at once.",
        givenWord: "demanded",
        prefix: "They ",
        suffix: " that we leave at once.",
        correctAnswer: ["demanded"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 297
    {
        id: 297,
        sentence1: "He practically lives at the office.",
        givenWord: "almost",
        prefix: "He ",
        suffix: " at the office.",
        correctAnswer: ["almost lives"],
        minWords: 2,
        maxWords: 2,
        status: 'pending'
    },
    // 298
    {
        id: 298,
        sentence1: "It’s surprising that he passed the exam.",
        givenWord: "astonished",
        prefix: "I am ",
        suffix: " that he passed the exam.",
        correctAnswer: ["astonished"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    },
    // 299
    {
        id: 299,
        sentence1: "She explained why she was late.",
        givenWord: "account",
        prefix: "She ",
        suffix: " for her lateness.",
        correctAnswer: ["gave an account"],
        minWords: 3,
        maxWords: 3,
        status: 'pending'
    },
    // 300
    {
        id: 300,
        sentence1: "They managed to finish despite the difficulties.",
        givenWord: "succeeded",
        prefix: "They ",
        suffix: " to finish despite the difficulties.",
        correctAnswer: ["succeeded"],
        minWords: 1,
        maxWords: 1,
        status: 'pending'
    }
];

let currentExerciseIndex = 0;
let score = 0;
let exercisesCompleted = 0;

const questionsContainer = document.getElementById('questionsContainer');
const checkAnswersBtn = document.getElementById('checkAnswersBtn');
const skipExerciseBtn = document.getElementById('skipExerciseBtn');
const nextExerciseBtn = document.getElementById('nextExerciseBtn');
const exerciseFeedback = document.getElementById('exerciseFeedback');
const currentScoreSpan = document.getElementById('currentScore');
const exercisesCompletedSpan = document.getElementById('exercisesCompleted');
const totalExercisesSpan = document.getElementById('totalExercises');
const exerciseProgressList = document.getElementById('exerciseProgressList');
const failSound = document.getElementById('failSound');
const successSound = document.getElementById('successSound');
const externalWordLookupInput = document.getElementById('externalWordLookupInput');
const searchExternalDictionaryBtn = document.getElementById('searchExternalDictionaryBtn');
const dictionaryIframe = document.getElementById('dictionaryIframe');
const showExampleAnswerBtn = document.getElementById('showExampleAnswerBtn');

// Set total exercises count, excluding the example (id: 0)
totalExercisesSpan.textContent = transformationExercises.length - 1;

function updateWordCount(inputId, countSpanId) {
    const inputField = document.getElementById(inputId);
    const countSpan = document.getElementById(countSpanId);
    if (inputField && countSpan) {
        const text = inputField.value.trim();
        const words = text === "" ? 0 : text.split(/\s+/).length;
        countSpan.textContent = `${words} words`;
    }
}

function updateExerciseProgress(exerciseId, newStatus) {
    let listItem = document.getElementById(`progress-q${exerciseId}`);
    const exercise = transformationExercises.find(ex => ex.id === exerciseId);

    if (exercise) {
        if (newStatus === 'correct' || exercise.status === 'pending' || exercise.status === 'incorrect' || exercise.status === 'skipped') {
            exercise.status = newStatus;
        }
    }

    if (!listItem) {
        listItem = document.createElement('li');
        listItem.id = `progress-q${exerciseId}`;
        exerciseProgressList.appendChild(listItem);
    }

    switch (exercise.status) {
        case 'correct':
            listItem.textContent = `Question ${exerciseId}: ✔`;
            listItem.className = 'correct-progress';
            break;
        case 'incorrect':
            listItem.textContent = `Question ${exerciseId}: ✖`;
            listItem.className = 'incorrect-progress';
            break;
        case 'skipped':
            listItem.textContent = `Question ${exerciseId}: ↷ (Skipped)`;
            listItem.className = 'skipped-progress';
            break;
        case 'pending':
        default:
            listItem.textContent = `Question ${exerciseId}: Pending`;
            listItem.className = '';
            break;
    }
}

function loadExercise() {
    // Handle the example exercise first (ID 0)
    const example = transformationExercises[0];
    const exampleInput = document.getElementById('exampleInput');
    const exampleFeedback = document.getElementById('exampleFeedback');

    if (exampleInput) {
        exampleInput.value = "";
        exampleInput.disabled = false;
    }
    if (exampleFeedback) {
        exampleFeedback.style.display = 'none';
        exampleFeedback.classList.remove('correct', 'incorrect');
    }
    updateWordCount('exampleInput', 'exampleWordCount');
    if (showExampleAnswerBtn) {
        showExampleAnswerBtn.style.display = 'inline-block';
    }

    // Determine which exercise to load:
    if (currentExerciseIndex === 0) {
        currentExerciseIndex = 1;
    }

    const exercise = transformationExercises[currentExerciseIndex];

    if (!exercise) {
        questionsContainer.innerHTML = "<p>All exercises completed! Great job!</p>";
        checkAnswersBtn.style.display = 'none';
        skipExerciseBtn.style.display = 'none';
        nextExerciseBtn.style.display = 'none';
        exerciseFeedback.textContent = "You've finished all exercises!";
        exerciseFeedback.className = 'feedback-message correct';
        exerciseFeedback.style.display = 'block';
        return;
    }

    questionsContainer.innerHTML = `
        <div class="transformation-question" data-id="${exercise.id}">
            <p>${exercise.id}. ${exercise.sentence1}</p>
            <p class="given-word">Word Given: ${exercise.givenWord}</p>
            <p>
                <span class="input-sentence-part">${exercise.prefix}</span>
                <input type="text" id="q${exercise.id}Input" class="transformation-input" placeholder="Enter your answer"
                    onkeyup="updateWordCount('q${exercise.id}Input', 'q${exercise.id}WordCount')">
                <span class="input-sentence-part">${exercise.suffix}</span>
            </p>
            <span class="word-count" id="q${exercise.id}WordCount">0 words</span>
            <div class="feedback-line" id="q${exercise.id}Feedback"></div>
        </div>
    `;

    updateWordCount(`q${exercise.id}Input`, `q${exercise.id}WordCount`);

    exerciseFeedback.style.display = 'none';
    checkAnswersBtn.style.display = 'inline-block';
    skipExerciseBtn.style.display = 'inline-block';
    nextExerciseBtn.style.display = 'none';
}

function checkAnswers() {
    // Check the example first
    const exampleInput = document.getElementById('exampleInput');
    const exampleFeedback = document.getElementById('exampleFeedback');
    const example = transformationExercises[0];
    const exampleUserAnswer = exampleInput.value.trim().toLowerCase();
    const exampleUserWords = exampleUserAnswer.split(/\s+/).filter(w => w !== '');

    exampleFeedback.style.display = 'block';

    let isExampleCorrect = false;
    const exampleWordCount = exampleUserWords.length;
    if (exampleWordCount >= example.minWords && exampleWordCount <= example.maxWords) {
        for (const correctOpt of example.correctAnswer) {
            if (exampleUserAnswer === correctOpt.toLowerCase() &&
                exampleUserAnswer.includes(example.givenWord.toLowerCase())) {
                isExampleCorrect = true;
                break;
            }
        }
    }

    if (isExampleCorrect) {
        exampleFeedback.textContent = `Correct! (${exampleWordCount} words)`;
        exampleFeedback.className = 'feedback-line correct';
        exampleInput.disabled = true;
        showExampleAnswerBtn.style.display = 'none';
        updateExerciseProgress(example.id, 'correct');
    } else {
        let msg = `Incorrect. `;
        if (exampleWordCount < example.minWords || exampleWordCount > example.maxWords) {
            msg += `You must use between ${example.minWords} and ${example.maxWords} words. You used ${exampleWordCount}. `;
        } else if (!exampleUserAnswer.includes(example.givenWord.toLowerCase())) {
            msg += `You must use the word "${example.givenWord}". `;
        }
        if (msg === `Incorrect. `) {
            msg += `Review instructions or use "Show Answer".`;
        }
        exampleFeedback.textContent = msg;
        exampleFeedback.className = 'feedback-line incorrect';
    }

    // Now check the current actual exercise
    const exercise = transformationExercises[currentExerciseIndex];
    if (!exercise) return;

    const inputField = document.getElementById(`q${exercise.id}Input`);
    const feedbackLine = document.getElementById(`q${exercise.id}Feedback`);

    const userAnswer = inputField.value.trim();
    const normalizedUserAnswer = userAnswer.toLowerCase();
    const givenWord = exercise.givenWord.toLowerCase();

    const userWords = userAnswer.split(/\s+/).filter(w => w !== '');
    const wordCount = userWords.length;

    feedbackLine.style.display = 'block';

    let isCurrentExerciseCorrect = false;
    let currentExerciseFeedbackMessage = '';

    if (wordCount >= exercise.minWords && wordCount <= exercise.maxWords) {
        for (const correctOpt of exercise.correctAnswer) {
            if (normalizedUserAnswer === correctOpt.toLowerCase() &&
                normalizedUserAnswer.includes(givenWord)) {
                isCurrentExerciseCorrect = true;
                break;
            }
        }
    }

    if (isCurrentExerciseCorrect) {
        currentExerciseFeedbackMessage = `Correct! (${wordCount} words)`;
        feedbackLine.className = 'feedback-line correct';
        failSound.pause();
        failSound.currentTime = 0;
        successSound.play();
        if (exercise.status !== 'correct') {
            score++;
            exercisesCompleted++;
            updateExerciseProgress(exercise.id, 'correct');
        }
    } else {
        currentExerciseFeedbackMessage = "Incorrect. ";
        if (wordCount < exercise.minWords || wordCount > exercise.maxWords) {
            currentExerciseFeedbackMessage += `You must use between ${exercise.minWords} and ${exercise.maxWords} words. You used ${wordCount}. `;
        } else if (!normalizedUserAnswer.includes(givenWord)) {
            currentExerciseFeedbackMessage += `You must use the word "${exercise.givenWord}". `;
        }
        if (currentExerciseFeedbackMessage === "Incorrect. ") {
            currentExerciseFeedbackMessage += `Please review the instructions and try again.`;
        }
        feedbackLine.className = 'feedback-line incorrect';
        successSound.pause();
        successSound.currentTime = 0;
        failSound.play();
        if (exercise.status !== 'correct') {
            updateExerciseProgress(exercise.id, 'incorrect');
        }
    }
    feedbackLine.textContent = currentExerciseFeedbackMessage;

    currentScoreSpan.textContent = score;
    exercisesCompletedSpan.textContent = exercisesCompleted;

    nextExerciseBtn.style.display = 'inline-block';
    checkAnswersBtn.style.display = isCurrentExerciseCorrect ? 'none' : 'inline-block';
    skipExerciseBtn.style.display = 'inline-block';
}

function showExampleAnswer() {
    const example = transformationExercises[0];
    const exampleInput = document.getElementById('exampleInput');
    const exampleFeedback = document.getElementById('exampleFeedback');

    if (exampleInput && exampleFeedback) {
        exampleInput.value = example.correctAnswer[0];
        updateWordCount('exampleInput', 'exampleWordCount');
        exampleFeedback.textContent = `Correct Answer: "${example.correctAnswer[0]}"`;
        exampleFeedback.className = 'feedback-line correct';
        exampleFeedback.style.display = 'block';
        exampleInput.disabled = true;
        showExampleAnswerBtn.style.display = 'none';
        updateExerciseProgress(example.id, 'correct');
    }
}

function skipExercise() {
    const exercise = transformationExercises[currentExerciseIndex];
    if (exercise && exercise.status !== 'correct') {
        updateExerciseProgress(exercise.id, 'skipped');
    }
    nextExercise();
}

function nextExercise() {
    currentExerciseIndex++;
    if (currentExerciseIndex < transformationExercises.length) {
        loadExercise();
    } else {
        questionsContainer.innerHTML = "<p>All exercises completed! Great job!</p>";
        checkAnswersBtn.style.display = 'none';
        skipExerciseBtn.style.display = 'none';
        nextExerciseBtn.style.display = 'none';
        exerciseFeedback.textContent = "You've finished all exercises!";
        exerciseFeedback.className = 'feedback-message correct';
        exerciseFeedback.style.display = 'block';
    }
}

// Event Listeners
checkAnswersBtn.addEventListener('click', checkAnswers);
skipExerciseBtn.addEventListener('click', skipExercise);
nextExerciseBtn.addEventListener('click', nextExercise);
showExampleAnswerBtn.addEventListener('click', showExampleAnswer);

searchExternalDictionaryBtn.addEventListener('click', () => {
    const word = externalWordLookupInput.value.trim();
    if (word) {
        dictionaryIframe.src = `https://www.merriam-webster.com/dictionary/${word}`;
    }
});

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    // Clear and initialize progress list
    exerciseProgressList.innerHTML = '';
    transformationExercises.forEach(exercise => {
        if (!exercise.status) {
            exercise.status = 'pending';
        }
        updateExerciseProgress(exercise.id, exercise.status);
    });

    loadExercise();
});
