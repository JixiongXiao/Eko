
const stories = [
  {
    id: 0,
    title: '"The Taxi Ride"',
    narrator: "Arthur",
    length: "20 mins",
    portrait: require("../assets/Image/John.png"),
    backgroundMusic:
        "https://annarezk.com/researchProj/taxiRide/backgroundTaxi1.mp3",
    content: [
      {
        index: 0,
        position: "Start",
        text:
            "Lana was the one of the last human taxi drivers in Los Angeles. The year was 2053, the time 8:34pm and the overcast sky forecasted another rainy afternoon. Lana knew she'd be busy again. Passengers were often surprised to see a human and often confided in her, asking for advice or simply telling her about their lives.\n" +
            "\n" +
            "\n" +
            "Over the years, Lana had come to realise that most people's issues gravitate around the same problems – that in fact, often weren't actually problems. So, she often gave the same advice.\n" +
            "\n" +
            "\n" +
            "Her phone rang twice. She received, almost simultaneously, two ride requests: Tom and Jack. They were both just about the same distance from where she was. Whose ride would she accept?",
        choiceA: "Accepts Tom's ride",
        choiceB: "Accept Jack's ride",
        aToward: 1,
        bToward: 2,
        uri: "https://annarezk.com/researchProj/taxiRide/startTaxi.mp3",
      },
      {
        index: 1,
        position: "Accept Tom's ride",
        text:
            "She accepted Tom's ride. She often imagined what the passengers would be like on her way to collect them. It's funny how many stereotypes and ideas a name can carry, she tried to remind herself.\n" +
            "\n" +
            "\n" +
            "Tom was 55. He'd always seen life as a game of numbers and levels, one with winners and losers. One where money and status determined the winners and one which he had never felt like losing. He was hardwired to do better than everyone else.\n" +
            "\n" +
            "\n" +
            "He had worked hard, made many sacrifices and had – as a consequence, achieved great financial success setting up his own financial consultancy firm.\n" +
            "\n" +
            "\n" +
            "This allowed him to live very comfortably in a loft in the heart of the wealthiest neighbourhood of Los Angeles. Tom exercised regularly, followed a strict personal hygiene and diet and was, as a result, astonishingly well preserved for a man of his age.\n" +
            "\n" +
            "\n" +
            "Women were often attracted to Tom, but they were rarely spotted spending longer than a night in his company. Indeed, Tom was often as difficult with others as he was with himself.\n" +
            "\n" +
            "\n" +
            "As a result, he never had a serious relationship and had very few friends. Lana pulled up in front of his building and Tom came out, dressed in an elegant, long Italian black trench-coat carrying a briefcase in his left hand.\n" +
            "\n" +
            "\n" +
            "“Pleasure to see a fellow human driving! I didn't think there were any left. To Saint-James' graveyard please madam,” said Tom, getting into the car. Tom's face was hard and Lana noticed the tear rolling down the side of his face as he gazed out of the window.\n" +
            "\n" +
            "\n" +
            "“What's the matter?” she asked. “Silly question,” she immediately thought to herself after confirming Saint-James' graveyard as the destination in the navigation system. She carried on, not expecting an answer. \n" +
            "\n" +
            "\n" +
            "“I am nervous,” he said. “My father has died, and I am nervous. I am going to the funeral ceremony and my brother will be there. Him and I haven't spoken for years. No matter what I did in life, how hard I worked to prove I was worthy, my father always preferred him. In fact, he once gave me a ring to give to him once he'd passed away.\n" +
            "\n" +
            "\n" +
            "I’ll never forget his words he said, ‘make sure you give this to the most valuable person in the world to me, your brother.’ So here I have it. He always got away effortlessly. He always had a beautiful wife, beautiful children and more friends than a man could ever wish for. And here I am, single, lonely as I've always been. I wish I was as popular like him.”\n" +
            "\n" +
            "\n" +
            "Lana wasn't surprised. She'd been a taxi driver for over 30 years. During this time, she learnt that nothing was ever as it seemed. That behind every face was a story that troubled the mind of every person. Some people were just better at overcoming that story than others.\n" +
            "\n" +
            "\n" +
            "She felt privileged to get an insight into some of these minds, but she knew that, often, her silence was more useful than words. She offered to turn on the radio.",
        choiceA: "Tom accepted",
        choiceB: "Tom declined",
        aToward: 3,
        bToward: 4,
        uri: "https://annarezk.com/researchProj/taxiRide/acceptTomRide.mp3",
      },
      {
        index: 2,
        position: "Accept Jack's ride",
        text:
            "Lana accepted Jack's ride. She often imagined what the passengers would be like on her way to collect them. It's funny how many stereotypes and ideas a name can carry, she tried to remind herself.\n" +
            "\n" +
            "\n" +
            "Jack had always seen life as a jolly ride made of sometimes good, other times bad encounters. He had always thought of himself as someone who cherished experiences more than material goods. Jack had always believed love and friendship would bring him greater satisfaction than financial success.\n" +
            "\n" +
            "\n" +
            "Accordingly, Jack had travelled for years throughout the world after barely graduating in history from an average university on the West Coast. He had met a young woman named Sarah while on a trip in India. They fell in love and got married. They have three beautiful children with whom they formed a happy family.\n" +
            "\n" +
            "\n" +
            "However, Jack struggled financially as a result of his lack of investment in a job that he never really enjoyed doing. As Sarah became pregnant with their fourth baby, Jack had no other choice but to sell the house they were in to move to a rougher neighbourhood downtown in a flat they could afford. Jack resented himself for his inability to provide for his family's needs.\n" +
            "\n" +
            "\n" +
            "Lana pulled up in front of this building and Jack came out of the building, dressed in a beaten-up black suit that looked like it came straight out of a village rom-com. He carried a brief-case in his left hand.\n" +
            "\n" +
            "\n" +
            "“To Saint-James' graveyard please madam,” said Jack, getting into the car. Jack's face was hard, and Lana noticed the tear rolling down the side of his face as he gazed out the window.\n" +
            "\n" +
            "\n" +
            "“What's the matter?” she asked. “Silly question,” she immediately thought to herself after confirming Saint-James' graveyard as the destination in the navigation system. She carried on, not expecting an answer.\n" +
            "\n" +
            "“Oh nothing, don’t worry. I don’t mean to bother you with my problems,” he said.\n" +
            "\n" +
            "\n" +
            "“I’m sorry for your loss,” replied Lana, connecting the dots.\n" +
            "\n" +
            "\n" +
            "“Oh, thank you,” replied Jack, “yes, it was my father. Funny thing though, that I'm more frightened about the idea of seeing my brother for the first time in years than attending my own father’s funeral. Him and I haven't spoken in years. No matter what I did in life, get married, have children, however hard I tried, I was never good enough.\n" +
            "\n" +
            "\n" +
            "He's handsome, rich and always surrounded by beautiful women. He eats in fancy restaurants, travels to luxurious hotel resorts, knows famous people. He has it all. My father always preferred him; in fact, he once gave me a ring to give to him once he'd passed away. I’ll never forget his words he said, 'make sure you give this to the most valuable person in the world to me, your brother.' \n" +
            "\n" +
            "\n" +
            "Anyway...here I am, on a steady slope towards being overweight from all the junk food I eat, losing my hair and absolutely broke. The idea of him asking me where I'm at life makes my stomach clench. Come to think of it he won't even need to ask, he just needs to look at me, that will be enough...”\n" +
            "\n" +
            "\n" +
            "Lana wasn't surprised. She'd been a taxi driver for over 30 years. During that time, she learnt that nothing was ever as it seemed. That behind every face was a story that troubled the mind of every person. Some people were just better at forgetting that story than others.\n" +
            "\n" +
            "\n" +
            "She felt privileged to get an insight into some of those minds but knew that very often her silence was more useful than any words. She offered to turn on the radio.",
        choiceA: "Jack accepted",
        choiceB: "Jack declined",
        aToward: 5,
        bToward: 6,
        uri: "https://annarezk.com/researchProj/taxiRide/acceptJackRide.mp3",
      },

      {
        index: 3,
        position: "Tom accepted",
        text:
            "Lana turned on the radio to the local news broadcast.\n" +
            "\n" +
            "\n" +
            "“...Thank you for sharing this with us, our show is over for today. Next up is Jerry for the 5 o'clock news. But...before that, I've just been told that a terrible explosion happened only a few moments ago in the Oxfall Tower in downtown LA. Police and fire brigades are on their way. Please stay safe and avoid that area if you can. More details to come.”\n" +
            "\n" +
            "\n" +
            "Lana and Tom's eyes met in the rear mirror. “That's right on the way to Saint-James'. I guess we won't be going the usual way!” she said. “Great, that's all I needed today,” he replied, ironically as she calculated a new itinerary. The new route made them take a large loop around to avoid the congested area and crossed a part of town known for its parks and playgrounds.\n" +
            "\n" +
            "\n" +
            "Tom's anxiety only increased as he gazed out of the car's window at the playgrounds. He saw the families getting ready to spend an afternoon picnicking in the parks. The children playing and smiling only reminded him how lonely and pathetic he felt. He pictured his brother, surrounded by his wife, his perfect children spending a simple moment in the park together.\n" +
            "\n" +
            "\n" +
            "That's life, he thought, far from the bling, the shallow glamour and the fake smiles - but I'll never be like that. It made him feel all more apprehensive about their meeting. He felt a deep sense of oppression – panic taking over.\n" +
            "\n" +
            "\n" +
            "He began frantically tapping his fingers against his briefcase until its side pocket released open without him noticing. Tom’s phone slid out of the pocket and landed on the car's floor, underneath the front seat.\n" +
            "\n" +
            "\n" +
            "They were only a few minutes' walk away from the park and Tom couldn't bear to stay sitting down. A few cars in front of him came to a short standstill.",
        choiceA: "Tom asked to get out",
        choiceB: "Tom stayed in the car",
        aToward: 7,
        bToward: 8,
        uri: "https://annarezk.com/researchProj/taxiRide/tomAccepted.mp3",
      },
      {
        index: 4,
        position: "Tom declined",
        text:
            "Tom preferred to remain in silence. He wasn't really in the mood to listen to the radio, nor to do anything as a matter of fact.\n" +
            "\n" +
            "\n" +
            "He felt a sense of shame for having admitted, only minutes earlier, his deepest vulnerability to a complete stranger. His thoughts spiralled in his head and gradually taking over, began to make him feel terribly anxious. They drove past a part of town known for its parks and playgrounds.\n" +
            "\n" +
            "\n" +
            "Tom's anxiety only increased as he gazed out of the car's window at the playgrounds. He saw the families getting ready to spend an afternoon picnicking in the park. The children playing and smiling only reminded him how lonely and pathetic he felt himself. He could picture his brother, surrounded by his wife and perfect children spending a simple moment in the park.\n" +
            "\n" +
            "\n" +
            "That's life, he thought – but I'll never be like that. It made him feel even more apprehensive of their meeting. He felt a deep sense of oppression and panic taking over.\n" +
            "\n" +
            "\n" +
            "He began frantically tapping his fingers against his briefcase until its side pocket released open without him noticing. Tom’s phone slid out of the pocket and landed on the car's floor, underneath the front seat.\n" +
            "\n" +
            "\n" +
            "They were only a few minutes' walk away from the park and Tom couldn't bear to stay sitting down. A few cars in front of him came to a standstill – the road ahead was blocked. Lana received a news notification on her smartphone. “Important: Explosion at Oxfall Tower in downtown LA. Area shut down.”\n" +
            "\n" +
            "\n" +
            "“Great,” said Tom. “That’s right where we’re heading, isn’t it?”. Lana nodded.",
        choiceA: "Tom asked to get out",
        choiceB: "Tom stayed in the car",
        aToward: 7,
        bToward: 8,
        uri: "https://annarezk.com/researchProj/taxiRide/tomDeclined.mp3",
      },
      {
        index: 5,
        position: "Jack accepted",
        text:
            "Lana turned on the radio to the local news broadcast.\n" +
            "\n" +
            "\n" +
            "“...Thank you for sharing this with us, our show is over for today. Next up: Jerry for the 5 o'clock news. But before that, I've just been told that a terrible explosion happened only a few minutes ago in the Oxfall Tower in downtown LA. Police and fire brigades are on their way. Please stay safe and avoid that area if you can. More details to come.”\n" +
            "\n" +
            "\n" +
            "Lana and Jack's eyes met in the rear mirror. “That's right on the way to Saint-James'. I guess we won't be going the usual way!” she said. “Fantastic...all I needed,” he replied, ironically as she calculated a new itinerary. The new route made them take a large loop around to avoid the congested area and crossed a very wealthy part of town.\n" +
            "\n" +
            "\n" +
            "Jack's shame and sadness only increased as he gazed out of the car's window at the amazing houses and loft apartments on the way. He could only imagine his brother pulling up in front of one of these perfectly manicured front house lawns, in a cabriolet in the company of a young lady.\n" +
            "\n" +
            "\n" +
            "He knew he would never be able to afford living here. It made him feel even more apprehensive about their meeting. He felt a sense of oppression and panic taking over.\n" +
            "\n" +
            "\n" +
            "He began frantically tapping his fingers against his briefcase until its side pocket released, opening without him noticing. Jack's phone slid out of the pocket and landed on the car's floor, underneath the front seat.\n" +
            "\n" +
            "\n" +
            "They were only a few minutes away from the park and Jack couldn't bear to stay sitting down. A few cars in front of him came to a short standstill.",
        choiceA: "He asked to get out",
        choiceB: "He stayed in the car",
        aToward: 9,
        bToward: 10,
        uri: "https://annarezk.com/researchProj/taxiRide/jackAccept.mp3",
      },
      {
        index: 6,
        position: "Jack declined",
        text:
            "Jack preferred to remain in silence. He wasn't really in the mood to listen to the radio, nor to anything as a matter of fact.\n" +
            "\n" +
            "\n" +
            "He felt a sense of shame for having admitted, only a few minutes earlier, his deepest vulnerability to a complete stranger. The thoughts spiralled in his head and gradually taking over, began to make him feel terribly anxious. They drove past a very wealthy part of town.\n" +
            "\n" +
            "\n" +
            "Jack's anxiety only increased as he gazed out the car's window at the amazing houses and loft apartments on the way. He could imagine his brother pulling up in front of one of those perfectly manicured front house lawns, in a cabriolet in the company of a young lady.\n" +
            "\n" +
            "\n" +
            "He knew he would never be able to afford living here. It made him feel even more apprehensive of their meeting. He felt a deep sense of oppression and panic taking over.\n" +
            "\n" +
            "\n" +
            "He began frantically tapping his fingers against his briefcase until its side pocket released, opening without him noticing. Jack's phone slid out of the pocket and landed on the car's floor, underneath the front seat.\n" +
            "\n" +
            "\n" +
            "They were only a few minutes' walk away from the park and Jack couldn't bear to stay sitting down. A few cars in front of him came to a standstill – the road ahead was blocked.\n" +
            "\n" +
            "\n" +
            "Lana received a news notification on her smartphone. “Important: Explosion at Oxfall Tower in downtown LA. Area shut down.”\n" +
            "\n" +
            "\n" +
            "“Great,” said Jack that’s right where we are heading isn't it?”. Lana nodded.",
        choiceA: "He asked to get out",
        choiceB: "He stayed in the car",
        aToward: 9,
        bToward: 10,
        uri: "https://annarezk.com/researchProj/taxiRide/jackDeclined.mp3",
      },
      {
        index: 7,
        position: "Tom asked to get out",
        text:
            "“Just drop me off here please, I'll walk the rest of the way,” he said. “Are you sure?” replied Lana, politely. “Yeah, I need a walk.”\n" +
            "\n" +
            "\n" +
            "Tom got out of the car without noticing he'd left his phone behind. Luckily, he knew the way and made it to the ceremony with an hour to spare.\n" +
            "\n" +
            "\n" +
            "Lana's phone rang once again. “Funny,” she thought, “it's the same name that came up earlier, Jack.” I guess I should take him, she thought. She accepts Jack's ride.\n" +
            "\n" +
            "\n" +
            "Lana does a U-turn, the pick-up address is in the family-friendly part of town she crossed a few minutes ago.\n" +
            "\n" +
            "\n" +
            "Jack was 48. He had always seen life as a jolly ride made of sometimes good, other times bad encounters. He cherished experiences more than material goods. Jack had always believed love and friendship would bring him greater satisfaction than financial success.\n" +
            "\n" +
            "\n" +
            "Accordingly, Jack had travelled for years throughout the world after barely graduating in history from an average university on the West Coast.\n" +
            "\n" +
            "\n" +
            "He met a young woman named Sarah while on a trip in India. He fell in love, they got married. They had three beautiful children and they formed a happy family. However, Jack struggled financially as a result of his lack of investment in a job that he never really enjoyed doing.\n" +
            "\n" +
            "\n" +
            "As Sarah became pregnant with their fourth baby, Jack had no other choice but to sell the house they were in and to move to a rougher neighbourhood downtown in an apartment they could afford. Jack resented himself for his inability to provide for his family's needs.\n" +
            "\n" +
            "\n" +
            "Lana greets her new passenger with the same usual smile and a quick look in her rear-view mirror. She couldn't help but notice Jack had the exact same strikingly blue eyes as her previous customer. She also noticed he had the same tear flowing down the side of his face.\n" +
            "\n" +
            "\n" +
            "“What's the matter?” she asked.\n" +
            "\n" +
            "\n" +
            "“I'm nervous,” he said, “my father has died, I'm nervous. I'm going to the funeral ceremony and my brother will be there. He and I haven't spoken for years. No matter what I did in life, how hard I worked to prove I was worthy, my father always preferred him. He always got through effortlessly. He had great jobs, great apartments, great salaries and a great lifestyle. Women fall over themselves to be with him. I wish I was as successful as he is.” \n" +
            "\n" +
            "\n" +
            "Lana remained silent for what seemed to be an eternity. She looked at the destination on her GPS, it read “Saint-James' graveyard”. She laughed at the absurdity of the situation. “That had never happened,” she thought to herself, amused.\n" +
            "\n" +
            "\n" +
            "She paused as she began thinking about the best words to share with her passenger. Meanwhile, Jack nervously took out his phone to make the first phone call to his brother in almost a decade. They had to arrange the seating at the ceremony.\n" +
            "\n" +
            "\n" +
            "A phone rang. “I think your phone is ringing, madam,” said Jack. “Mine is right here,” replied Lana.\n" +
            "\n" +
            "\n" +
            "Confused, Jack heard the phone ringing under the seat in front of him. He bent down and picked up a smartphone on which he could read “Jack”. His name was saved in the contacts with a heart next to it. As he hung up, the message “missed call from Jack” appeared on the screen. The background was a picture of himself and his brother Tom as young kids playing baseball in the backyard.\n" +
            "\n" +
            "\n" +
            "Jack paused for a long moment and remembered the simplicity of their bond as young kids. Before the weight of achievements and competition had driven them apart.",
        choiceA: "Conclusion", //Tom in taxi first
        choiceB: null,
        aToward: 11,
        bToward: null,
        uri: "https://annarezk.com/researchProj/taxiRide/tomAskedGetOut.mp3",
      },
      {
        index: 8,
        position: "Tom stayed in the car",
        text:
            "Tom thought he might as well stay in the car. He tried to clear his mind by looking out the window. He noticed a tall man riding a bicycle rather frantically through the traffic, heading straight towards the closed off area.\n" +
            "\n" +
            "\n" +
            "At first, he couldn’t help but judge his imprudent cycling. But as he cycled past them, Tom realised he recognised the man’s briefcase, he had the same. No doubt, it was Jack, his brother. Tom sprang out of the car and yelled at the top of his voice for his brother to stop.\n" +
            "\n" +
            "\n" +
            "After all, no one really knew how serious the explosion had been, or even whether it was over. One loss in the family is enough he thought.\n" +
            "\n" +
            "\n" +
            "Jack heard his name in the distance with a tone of alarm that usually signals danger. He pressed as hard as he could on the breaks. When he turned around, he saw Tom, his brother running towards him through the traffic.\n" +
            "\n" +
            "\n" +
            "“Jack, Jack! Don’t go that way!” cried Tom, “there’s been an explosion, they won’t let you past.” Surprised by this coincidence, Jack remained stunned for a moment. “Come with me, I’m in a cab, we’ll find a way around it,” said Tom.\n" +
            "\n" +
            "\n" +
            "Jack put the hire bike back on a nearby station and followed his brother into Lana’s car. Both of them looked at each other, rather awkwardly.\n" +
            "\n" +
            "\n" +
            "“I tried to call you,” said Jack, “I was having trouble with booking my taxi, so I took a bike.” Tom replied that he hadn’t heard the calls. Jack tried calling again.\n" +
            "\n" +
            "\n" +
            "A fuzzy vibration was heard under the front seat. Jack bent over and seized Tom’s phone. “That might be why!” he said. As he unlocked the phone, he read “4 missed calls by Jack” with a big heart emoji next to the name. The locked screen was a picture of both of them riding their bikes as children, with large smiles on their faces.\n" +
            "\n" +
            "\n" +
            "A mix of embarrassment and relief filled both of them.",
        choiceA: "Conclusion", //Tom saw Jack cycle by
        choiceB: null,
        aToward: 12,
        bToward: null,
        uri: "https://annarezk.com/researchProj/taxiRide/tomStayed.mp3",
      },
      {
        index: 9,
        position: "He asked to get out",
        text:
            "“Just drop me off here please, I'll walk the rest of the way,” he said. “Are you sure?” replied Lana, politely. “Yeah, I need a walk.”\n" +
            "\n" +
            "\n" +
            "Jack got out of the car without noticing he'd left his phone behind. Luckily, he knew the way and made it to the ceremony with an hour to spare.\n" +
            "\n" +
            "\n" +
            "Lana's phone rang once more. “Funny,” she thought, “it's the same name that came up earlier, Tom.” I guess I should take him, she thought. She accepts Tom's ride.\n" +
            "\n" +
            "\n" +
            "Lana does a U-turn, the pick-up address is in the nice part of town she crossed a few minutes ago.\n" +
            "\n" +
            "\n" +
            "Tom was 55. He had always seen life as a game of numbers and levels, one with winners and losers. One where money and status determined the winners and one which he had never felt like losing. He was hardwired to do better than everyone else.\n" +
            "\n" +
            "\n" +
            "He had worked hard, made many sacrifices and had - as a consequence, achieved great financial success setting up his own finance consultancy firm.\n" +
            "\n" +
            "\n" +
            "This allowed him to live very comfortably in a loft in the heart of the wealthiest neighbourhood of Los Angeles. Tom exercised regularly, followed a strict personal hygiene and diet and was, as a result, astonishingly well preserved for a man his age.\n" +
            "\n" +
            "\n" +
            "Women were often attracted to Tom, but they were rarely seen spending longer than one night in his company.\n" +
            "\n" +
            "\n" +
            "Indeed, Tom was often as difficult with others as he was with himself. As a result, he had never had a serious relationship and had very few friends.\n" +
            "\n" +
            "\n" +
            "Lana pulled up in front of his building and Tom came out, dressed in an elegant, long Italian black trench-coat, carrying a briefcase in his left hand.\n" +
            "\n" +
            "\n" +
            "Lana greeted her new passenger with a smile and a quick look in her rear-view mirror. She couldn't help but notice Tom had exactly same strikingly blue eyes as her previous customer. She also noticed he had the same tear flowing down the side of his cheek.\n" +
            "\n" +
            "\n" +
            "“What's the matter?” she asked.\n" +
            "\n" +
            "\n" +
            "“I'm nervous,” he said, “my father has died, I'm nervous. I am going to the funeral ceremony and my brother will be there. He and I haven't spoken for years. No matter what I did in life, how hard I worked to prove I was worthy, my father always preferred him. He always got away with everything effortlessly. He always had a beautiful wife, beautiful children and more friends than a man could wish for. And here am I, single, lonely as I've always been. I wish I was as popular as him.”\n" +
            "\n" +
            "\n" +
            "Lana remained silent for what seemed to be forever. She looked at the destination on her GPS, it read “Saint-James' graveyard”. She laughed at the absurdity of the situation. That had never happened, she thought to herself, amused.\n" +
            "\n" +
            "\n" +
            "She paused as she began thinking about the best words to share with her passenger. Meanwhile, Tom nervously took out his phone to make the first phone call to his brother in almost a decade. They had to arrange seating at the ceremony.\n" +
            "\n" +
            "\n" +
            "A phone rang. “I think your telephone is ringing, madam,” said Tom. “Mine is right here,” replied Lana. Confused, Tom heard the phone ringing under the seat in front of him. He bent down and picked up a smartphone on which he could read “Tom”. His name was saved in the contacts with a heart next to it.\n" +
            "\n" +
            "\n" +
            "As he hung up, the message “missed call from Tom” appeared on the screen. The background was a picture of himself and his brother Jack as young kids playing baseball in their backyard.\n" +
            "\n" +
            "\n" +
            "Tom paused for a long moment and remembered the simplicity of their bond as young kids. Before the weight of achievements and competition set them apart.",
        choiceA: "Conclusion", //Jack in taxi first
        choiceB: null,
        aToward: 13,
        bToward: null,
        uri: "https://annarezk.com/researchProj/taxiRide/jackAskedGetOut.mp3",
      },
      {
        index: 10,
        position: "He stayed in the car",
        text:
            "Jack thought he might as well stay in the car. After all, of an optimistic temperament, Jack didn’t think this would take too long. He tried to clear his mind by looking out of the window. He noticed a tall elegant man riding a bicycle rather frantically through the traffic, heading straight towards the closed off area.\n" +
            "\n" +
            "\n" +
            "At first, he couldn’t help but judge him for his imprudent cycling. But as the man cycled past them, Jack realised he recognised the man’s briefcase, he had the same one. No doubt, it was Tom, his brother.\n" +
            "\n" +
            "\n" +
            "Jack sprang out of the car and yelled at the top of his voice for his brother to stop. After all, no one really knew how serious the explosion had been, or if it was even over for that matter. One loss in the family is enough, he thought.\n" +
            "\n" +
            "\n" +
            "Tom heard his name being called in an alarming tone that usually signals danger. He pressed as hard as he could on the breaks. When he turned around, he saw Jack, his brother running towards him through the traffic.\n" +
            "\n" +
            "\n" +
            "“Tom, Tom! Don’t go that way!” cried Jack, “there’s been an explosion, they won’t let you past.” Rather surprised by this coincidence, Tom remained stunned for a moment. “Come with me, I’m in a cab, we’ll find a way around it,” said Jack.\n" +
            "\n" +
            "\n" +
            "Tom put his bike on a nearby station and followed his brother in Lana’s car. Both of them looked at each other, rather awkwardly.\n" +
            "\n" +
            "\n" +
            "“I tried to call you,” said Tom, “I was having trouble with booking my taxi, so I took a bike”. Jack replied that he hadn’t heard the calls. Tom tried calling again.\n" +
            "\n" +
            "\n" +
            "A fuzzy vibration was heard under the front seat. Tom bent over and picked up Jack’s phone. “That might be why!” he said. As he unlocked the phone, he read “4 missed calls by Tom” with a big heart emoji next to the name. The locked screen was a picture of both of them riding their bikes as kids, with large smiles on their faces.\n" +
            "\n" +
            "\n" +
            "A mixture of embarrassment and relief filled both of them.",
        choiceA: "Conclusion", //conclusion Jack picked up tom who was cycling past
        choiceB: null,
        aToward: 14,
        bToward: null,
        uri: "https://annarezk.com/researchProj/taxiRide/jackStayed.mp3",
      },
      {
        index: 11,
        position: "Conclusion", //Tom in taxi first
        text:
            "They made it to the ceremony in time. Jack came up to his brother and handed him his phone with the background image showing.\n" +
            "\n" +
            "\n" +
            "Looking into his eyes, Jack saw no perfection, no money, no success, no fame or status. He saw his brother, another human being with his insecurities and fears. Slightly embarrassed at first Tom looked away, and then into his brother’s eyes. Jack hugged Tom and paused before saying:\n" +
            "\n" +
            "\n" +
            "“Here, before he died, dad gave me this ring to give to 'the most valuable person to me in the world.' That’s you. So here it is ...” And before he had the time to take it out of his briefcase, Tom pulled the exact same ring-box out of his case.\n" +
            "\n" +
            "\n" +
            "They suddenly realised what their father had done. He had given them both the same ring in the hope they would realise how important they were both to him and to each other.",
        choiceA: "Meta",
        choiceB: null,
        aToward: 15,
        bToward: null,
        uri:
            "https://annarezk.com/researchProj/taxiRide/conclusionTomFirstThenJack.mp3",
      },
      {
        index: 12,
        position: "Conclusion", //Tom saw Jack cycle by
        text:
            "Jack and Tom made the ceremony in time and felt a deep sense of nostalgia and a connection they'd feared might not happen. The picture had stirred many memories and reminded them of how important their bond was. Looking into his brother’s eyes, Tom saw no beautiful family, no beautiful kids, no beautiful life.\n" +
            "\n" +
            "\n" +
            "He saw his brother, another human being with his own insecurities and fears.\n" +
            "\n" +
            "\n" +
            "Slightly embarrassed at first Jack looked away, and then into his brother’s eyes. Tom hugged Jack and paused before saying: “Here, before he died, dad gave me this ring to give to 'the most valuable person to me in the world.' That’s you Jack. So here it is ...” And before he had time to take it out of his briefcase, Jack pulled the same ring-box out of his case.\n" +
            "\n" +
            "\n" +
            "They suddenly realised what their father had done. He had given them both the same ring in the hope they would realise how important they both were to him and to each other.",
        choiceA: "Meta",
        choiceB: null,
        aToward: 15,
        bToward: null,
        uri:
            "https://annarezk.com/researchProj/taxiRide/conclusionTomPickUpJackCycling.mp3",
      },
      {
        index: 13,
        position: "Conclusion", //Jack in taxi first
        text:
            "Tom made it to the ceremony in time and felt a sense of nostalgia and connection to his brother whom he had feared to see. The picture had stirred many memories and reminded him how important their bond was. He came up to his brother and handed him his phone with the background image showing.\n" +
            "\n" +
            "\n" +
            "Looking into his brother’s eyes, Tom saw no perfection, no air of superiority for being the head of a family and no judgement either. He saw his brother, another human being with his own insecurities and fears.\n" +
            "\n" +
            "\n" +
            "Slightly embarrassed at first Jack looked all over, but then in his brother’s eyes. Tom hugged Jack and paused before saying: “Here, before he died, dad gave me this ring to give to the most valuable person to him in the world, you. So here it is ...” And before he had the time to take it out of his briefcase, Jack pulled out the exact same ring-box from his brief-case.\n" +
            "\n" +
            "\n" +
            "They suddenly realised what their father had done. He had given them both the same ring in the hope that they would realise how important they both were to him and to each other.",
        choiceA: "Meta",
        choiceB: null,
        aToward: 15,
        bToward: null,
        uri:
            "https://annarezk.com/researchProj/taxiRide/conclusionJackFirstThenTom.mp3",
      },
      {
        index: 14,
        position: "Conclusion", //conclusion Jack picked up tom who was cycling past
        text:
            "Jack and Tom made the ceremony in time and felt a deep sense of nostalgia and a connection they’d feared they might not have. The picture had stirred memories and reminded them how important their bond was. Looking into his brother’s eyes, Jack saw no perfection, money, success, fame or status.\n" +
            "\n" +
            "\n" +
            "He saw his brother, another human being with insecurities and his own fears. Slightly embarrassed at first Tom looked away, and then into his brother’s eyes. Jack hugged Tom, before saying. “Here, before he died, dad gave me this ring to give to the most valuable person to him in the world, that’s you.\n" +
            "\n" +
            "\n" +
            "So here it is ...” And before he had the time to take it out of his briefcase, Jack pulled the exact same ring out of his briefcase. They suddenly realised what their father had done. He had given them both the same ring in the hope that they would realise how important they both were to him.",
        choiceA: "Meta",
        choiceB: null,
        aToward: 15,
        bToward: null,
        uri:
            "https://annarezk.com/researchProj/taxiRide/conclusionJackPickUpTomCycling.mp3",
      },
      {
        index: 15,
        position: "Meta",
        text:
            "The feeling of being deeply unsatisfied with your life is an easy but slippery slope to slide down. It's easy to compare yourself with close friends, relatives and envy their apparent success. They may seem to be wealthier, better looking, have a more important job or even have more friends.\n" +
            "\n" +
            "\n" +
            "Often such comparisons are an illusion and this illusion brings on a level of anxiety, guilt and pressure that is hard to satisfy. It leads to an unnecessary and never ending need to achieve higher and higher levels of things regardless of what is good for us or what we truly want to do with our lives.\n" +
            "\n" +
            "\n" +
            "This doesn't imply that we should just give up and do nothing. No, what it implies is that instead of comparing and measuring our lives against the lives of others we should simply concentrate on what is important to us, the values we cherish and live life according to those values.",
        choiceA: "Replay Meta",
        choiceB: null,
        aToward: 15,
        bToward: null,
        uri: "https://annarezk.com/researchProj/taxiRide/metaTaxi.mp3",
      },
    ],
  },
  {
    id: 1,
    title: '"The Three Questions"',
    narrator: "Kathryn",
    length: "10 mins",
    portrait: require("../assets/Image/Mary.png"),
    backgroundMusic:
      "https://annarezk.com/researchProj/threeQuestions/backgroundThreeQuestions1.mp3",
    content: [
      {
        index: 0,
        text:
          "It once occurred to a certain King that if he always knew the right time to begin everything; if he knew who were the right people to listen to, and whom to avoid; and, above all, if he always knew what was the most important thing to do, he would never fail in anything he might undertake.\n" +
          "\n" +
          "\n" +
          "And this thought having occurred to him, he had it proclaimed throughout his kingdom that he would give a great reward to anyone who would teach him what was the right time for every action, and who were the most necessary people, and how he might know what was the most important thing to do.\n" +
          "\n" +
          "\n" +
          "And learned men came to the King, but they all answered his questions differently. All the answers being different, the King agreed with none of them, and gave the reward to none.\n" +
          "\n" +
          "\n" +
          "But still wishing to find the right answers to his questions, he decided to consult a Hermit, widely renowned for his wisdom.\n" +
          "\n" +
          "\n" +
          "The Hermit lived in a wood which he never quitted, and he received none but common folk. So, the King put on simple clothes and, before reaching the Hermit’s cell, dismounted from his horse.\n" +
          "\n" +
          "\n" +
          "When the King approached, the Hermit was digging the ground in front of his hut. Seeing the King, he greeted him and went on digging. The Hermit was frail and weak, and each time he stuck his spade into the ground and turned a little earth, he breathed heavily.\n" +
          "\n" +
          "\n" +
          "The King went up to him and said: “I have come to you, wise Hermit, to ask you to answer three questions: How can I learn to do the right thing at the right time? Who are the people I most need, and to whom should I, therefore, pay more attention than to the rest? And, what affairs are the most important and need my first attention?”\n" +
          "\n" +
          "\n" +
          "The Hermit listened to the King but answered nothing. He just spat on his hand and recommenced digging.",
        choiceA: "Help the Hermit",
        choiceB: "Ask again",
        aToward: 1,
        bToward: 2,
        uri:
          "https://annarezk.com/researchProj/threeQuestions/startThreeQuestions.mp3",
      },
      {
        index: 1,
        position: "Help the Hermit",
        text:
          "“Alright, let me take the spade and work awhile for you.”\n" +
          "\n" +
          "\n" +
          "“Thanks,” said the Hermit, and, giving the spade to the King, he sat down on the ground.\n" +
          "\n" +
          "\n" +
          "When he had dug two beds, the King stopped and repeated his questions. The Hermit again gave no answer, but rose, stretched out his hand for the spade, and said:\n" +
          "\n" +
          "\n" +
          "“Now rest awhile – and let me work a bit.”\n" +
          "\n" +
          "\n" +
          "But the King did not give him the spade and continued to dig. One hour passed, and another. The sun began to sink behind the trees, and the King at last stuck the spade into the ground, and said:\n" +
          "\n" +
          "\n" +
          "“I came to you, wise man, for an answer to my questions. If you can give me none, tell me so, and I will return home.”\n" +
          "\n" +
          "\n" +
          "“Here comes someone running,” said the Hermit. “Let us see who it is.”\n" +
          "\n" +
          "\n" +
          "The King turned around and saw a bearded man come running out of the wood. The man held his hands pressed against his stomach, and blood was flowing from under them. He wore a long sharp sword attached to his belt.\n" +
          "\n" +
          "\n" +
          "When he reached the King, he fell fainting on the ground, moaning feebly. The King and the Hermit unfastened the man’s clothing. There was a large wound in his stomach. He mumbled in a haze of confusion:\n" +
          "\n" +
          "“The King...I must...kill...the...”",
        choiceA: "Help the wounded man",
        choiceB: "Chase him away",
        aToward: 3,
        bToward: 4,
        uri: "https://annarezk.com/researchProj/threeQuestions/helpHermit.mp3",
      },
      {
        index: 2,
        position: "Ask again",
        text:
          "The King lost patience and pushed back the Hermit's spade.\n" +
          "\n" +
          "\n" +
          "“Look at me. I am your King. Answer my questions!”\n" +
          "\n" +
          "\n" +
          "The Hermit looked up to the King and said:\n" +
          "\n" +
          "\n" +
          "“My dear King, one cannot merely be told who are the right people to listen to, whom to avoid and above all, what is the most important thing to do. One must experience these things by himself. Stay with me tonight - but first, please help me with making these beds.”",
        choiceA: "Help the Hermit",
        choiceB: "Refuse",
        aToward: 1,
        bToward: 5,
        uri: "https://annarezk.com/researchProj/threeQuestions/askAgain.mp3",
      },
      {
        index: 3,
        position: "Help wounded man",
        text:
          "The King washed the wound as best he could and bandaged it with his handkerchief and with a towel the Hermit had. But the blood would not stop flowing, and the King again and again removed the bandage soaked with warm blood and washed and re-bandaged the wound.\n" +
          "\n" +
          "\n" +
          "When at last the blood ceased flowing, the man revived and asked for something to drink. The King brought fresh water and gave it to him.\n" +
          "\n" +
          "\n" +
          "Meanwhile the sun had set, and it had become cool. So the King, with the Hermit’s help, carried the wounded man into the hut and laid him on the bed.\n" +
          "\n" +
          "\n" +
          "Lying on the bed, the man closed his eyes and was quiet; but the King was so tired from his walk and from the work he had done that he crouched down on the threshold, and also fell asleep – so soundly that he slept all through the short summer night.\n" +
          "\n" +
          "\n" +
          "When he awoke in the morning, it was long before he could remember where he was, or who was the strange bearded man lying on the bed and gazing intently at him with shining eyes.\n" +
          "\n" +
          "\n" +
          "“Forgive me!” said the bearded man in a weak voice, when he saw that the King was awake and was looking at him.\n" +
          "\n" +
          "\n" +
          "“I do not know you, and have nothing to forgive you for,” said the King.\n" +
          "\n" +
          "\n" +
          "“You do not know me, but I know you. I am that enemy of yours who swore to revenge himself on you, because you executed his brother and seized his property. I knew you had gone alone to see the Hermit, and I resolved to kill you on your way back.\n" +
          "\n" +
          "\n" +
          "But the day passed, and you did not return. So, I came out from my ambush to find you, and came upon your bodyguard, and they recognized me, and wounded me. I escaped from them but should have bled to death had you not dressed my wound. I wished to kill you, and you have saved my life.\n" +
          "\n" +
          "\n" +
          "Now, if I live, and if you wish it, I will serve you as your most faithful slave, and will bid my sons do the same. Forgive me!”",
        choiceA: "Forgive him",
        choiceB: "Attack him",
        aToward: 6,
        bToward: 7,
        uri:
          "https://annarezk.com/researchProj/threeQuestions/helpWoundedMan.mp3",
      },
      {
        index: 4,
        position: "Chase him away",
        text:
          "The King, in no mood to be helping strangers, decided:\n" +
          "\n" +
          "\n" +
          "“What did he say? Kill who? March on, brave man you seem rather confused and we are dealing with more important affairs, we have no time for your matters.”\n" +
          "\n" +
          "\n" +
          "To these words, the wounded man, unconscious, did not react. The King stood still, confused for a few moments until he realised this man was, in fact, in quite a predicament. His guilt pushed him to examine the man more closely. As he looked at the man's stomach, it appeared that he had been stabbed and was, indeed, severely wounded.\n" +
          "\n" +
          "\n" +
          "The King washed the wound as best he could and bandaged it with his handkerchief and with a towel the Hermit had. But the blood would not stop flowing, and the King again and again removed the bandage soaked with warm blood and washed and re-bandaged the wound.\n" +
          "\n" +
          "\n" +
          "When at last the blood ceased flowing, the man revived and asked for something to drink. The King brought fresh water and gave it to him.\n" +
          "\n" +
          "\n" +
          "Meanwhile the sun had set, and it had become cool. So, the King, with the Hermit’s help, carried the wounded man into the hut and laid him on the bed he had just finished making.\n" +
          "\n" +
          "\n" +
          "Lying on the bed, the man closed his eyes and was quiet; but the King was so tired from his walk and from the work he had done that he crouched down on the threshold, and also fell asleep – so soundly that he slept all through the short summer night.\n" +
          "\n" +
          "\n" +
          "When he awoke in the morning, it was long before he could remember where he was, or who was the strange bearded man lying on the bed and gazing intently at him with shining eyes.\n" +
          "\n" +
          "\n" +
          "“Forgive me!” said the bearded man in a weak voice, when he saw that the King was awake and was looking at him.\n" +
          "\n" +
          "\n" +
          "“I do not know you, and have nothing to forgive you for,” said the King.\n" +
          "\n" +
          "\n" +
          "“You do not know me, but I know you. I am that enemy of yours who swore to revenge himself on you, because you executed his brother and seized his property. I knew you had gone alone to see the Hermit, and I resolved to kill you on your way back.\n" +
          "\n" +
          "\n" +
          "But the day passed, and you did not return. So, I came out from my ambush to find you, and came upon your bodyguard, and they recognized me and wounded me. I escaped from them but should have bled to death had you not dressed my wound. I wished to kill you, and you have saved my life.\n" +
          "\n" +
          "\n" +
          "Now, if I live, and if you wish it, I will serve you as your most faithful slave, and will bid my sons do the same. Forgive me!”",
        choiceA: "Forgive him",
        choiceB: "Attack him",
        aToward: 6,
        bToward: 7,
        uri: "https://annarezk.com/researchProj/threeQuestions/chaseMan.mp3",
      },
      {
        index: 5,
        position: "Refuse",
        text:
          "“To help you make beds? Who do you think you are talking to? I am no man to be doing such activities. I am on a quest to answer greater questions, the three most important questions that will allow me to be the best King this kingdom shall ever have known,” cried the King.\n" +
          "\n" +
          "\n" +
          "The Hermit looked up at the King and laughed before returning to his task in silence.\n" +
          "\n" +
          "\n" +
          "The King understood that this Hermit could not be impressed by his titles and that the best way to go was probably to do what he said.\n" +
          "\n" +
          "\n" +
          "“Alright, let me take the spade and work awhile for you.”\n" +
          "\n" +
          "\n" +
          "“Thanks,” said the Hermit, and, giving the spade to the King, he sat down on the ground.\n" +
          "\n" +
          "\n" +
          "When he had dug two beds, the King stopped and repeated his questions. The Hermit again gave no answer, but rose, stretched out his hand for the spade, and said:\n" +
          "\n" +
          "\n" +
          "“Now rest awhile – and let me work a bit.”\n" +
          "\n" +
          "\n" +
          "But the King did not give him the spade and continued to dig. One hour passed, and another. The sun began to sink behind the trees, and the King at last stuck the spade into the ground, and said:\n" +
          "\n" +
          "\n" +
          "“I came to you, wise man, for an answer to my questions. If you can give me none, tell me so, and I will return home.”\n" +
          "\n" +
          "\n" +
          "“Here comes someone running,” said the Hermit. “Let us see who it is.”\n" +
          "\n" +
          "\n" +
          "The King turned around and saw a bearded man come running out of the wood. The man held his hands pressed against his stomach, and blood was flowing from under them. He wore a long sharp sword attached to his belt.\n" +
          "\n" +
          "\n" +
          "When he reached the King, he fell fainting on the ground, moaning feebly. The King and the Hermit unfastened the man’s clothing. There was a large wound in his stomach. He mumbled in a haze of confusion:\n" +
          "\n" +
          "\n" +
          "“The King...I must...kill...the...”",
        choiceA: "Help him",
        choiceB: "Chase him away",
        aToward: 3,
        bToward: 4,
        uri: "https://annarezk.com/researchProj/threeQuestions/refuse.mp3",
      },
      {
        index: 6,
        position: "Forgive",
        text:
          "The King was very glad to have made peace with his enemy so easily, and to have gained him for a friend, and he not only forgave him, but said he would send his servants and his own physician to attend him, and promised to restore his property.\n" +
          "\n" +
          "\n" +
          "Having taken leave of the wounded man, the King went out into the porch and looked around for the Hermit. Before going away he wished once more to beg an answer to the questions he had put. The Hermit was outside, on his knees, sowing seeds in the beds that had been dug the day before.",
        choiceA: "Ask Hermit last time",
        choiceB: "Leave",
        aToward: 8,
        bToward: 9,
        uri: "https://annarezk.com/researchProj/threeQuestions/forgive.mp3",
      },
      {
        index: 7,
        position: "Attack",
        text:
          "“A traitor! I will have you thrown into prison, but before - let me teach you a lesson you shall not forget!” said the King as he prepared to attack his enemy.\n" +
          "\n" +
          "\n" +
          "As he said this, thieves appeared outside the Hermit's home with daggers and swords. Having heard that the King had ventured alone in this isolated part of the kingdom, they saw the perfect opportunity to steal his gold and all his belongings. Perhaps even to keep him for ransom...\n" +
          "\n" +
          "\n" +
          "The wounded man suddenly rose to his feet and carried by the strength of vengeance, charged towards the group of thieves with such confidence and rage that they instantly fled with fear. Both the King and the Hermit were in shock - afraid the wounded man would turn to them next. Instead, he turned graciously and kneeled to the ground before the King.\n" +
          "\n" +
          "\n" +
          "“My King, I beg you once more to forgive me. I am forever grateful for your help and wish only to serve you from now on.”\n" +
          "\n" +
          "\n" +
          "The King finally agreed to make peace with his enemy. He was glad to have gained him for a friend for he respected the courage and strength he had demonstrated. He not only forgave him, but said he would send his servants and his own physician to attend him, and promised to restore his property.\n" +
          "\n" +
          "\n" +
          "Having taken leave of the wounded man, the King went out into the porch and looked around for the Hermit. Before going away he wished once more to beg an answer to the questions he had put. The Hermit was outside, on his knees, sowing seeds in the beds that had been dug the day before.\n",
        choiceA: "Ask Hermit last time",
        choiceB: "Leave",
        aToward: 8,
        bToward: 9,
        uri: "https://annarezk.com/researchProj/threeQuestions/attackMan.mp3",
      },
      {
        index: 8,
        position: "Ask Hermit last time",
        text:
          "The King approached him and said, “For the last time, I pray you to answer my questions, wise man.”\n" +
          "\n" +
          "\n" +
          "“You have already been answered!” said the Hermit, looking up at the King, who stood before him\n" +
          "\n" +
          "\n" +
          "“How answered? What do you mean?” asked the King\n" +
          "\n" +
          "\n" +
          "“Do you not see?” replied the Hermit.\n" +
          "\n" +
          "\n" +
          "“If you had not pitied my weakness yesterday, and had not dug these beds for me, but had gone your way, that man would have attacked you, and you would have repented of not having stayed with me. So, the most important time was when you were digging the beds; and I was the most important man; and to do me good was the most important business.\n" +
          "\n" +
          "\n" +
          "Afterwards, when that man ran to us, the most important time was when you were attending to him, for if you had not bound up his wounds, he would have died without having made peace with you. So, he was the most important man, and what you did for him was your most important business.\n" +
          "\n" +
          "\n" +
          "Remember then: there is only one time that is important – now!\n" +
          "\n" +
          "\n" +
          "It is the most important time because it is the only time when we have any power. The most necessary person is the one with whom you are, for no man knows whether he will ever have dealings with anyone else: And the most important affair is to do that person good, because for that purpose alone was man sent into this life.”\n",
        choiceA: "Meta",
        choiceB: null,
        aToward: 10,
        bToward: null,
        uri: "https://annarezk.com/researchProj/threeQuestions/askLastTime.mp3",
      },
      {
        index: 9,
        position: "Leave",
        text:
          "The King left with an odd sensation of frustration. He felt like he had both gained a lot from his encounter with the Hermit and his new friend yet was still unsure of what to make out of the series of events.\n" +
          "\n" +
          "\n" +
          "He returned to his castle and by the time he was home, he felt the need to rest.\n" +
          "\n" +
          "\n" +
          "He closed his eyes and gently fell into dreamland. Suddenly, the Hermit appeared to him once more in his dream. He appeared, like a giant figure that would barely hear the King repeating:\n" +
          "\n" +
          "\n" +
          "“Answer me, answer me please...”\n" +
          "\n" +
          "\n" +
          "When the King went silent, the Hermit looked down to the King and said:\n" +
          "\n" +
          "\n" +
          "“Your questions have already been answered!” said the Hermit, looking down at the King who stood before him.\n" +
          "\n" +
          "\n" +
          "“How answered? What do you mean?” asked the King\n" +
          "\n" +
          "\n" +
          "“Do you not see?” replied the Hermit.\n" +
          "\n" +
          "\n" +
          "“If you had not pitied my weakness yesterday, and had not dug these beds for me, but had gone your way, that man would have attacked you, and you would have repented of not having stayed with me. So, the most important time was when you were digging the beds; and I was the most important man; and to do me good was your most important business.\n" +
          "\n" +
          "\n" +
          "Afterwards, when that man ran to us, the most important time was when you were attending to him, for if you had not bound up his wounds, he would have died without having made peace with you. So, he was the most important man, and what you did for him was your most important business.\n" +
          "\n" +
          "\n" +
          "Remember then: there is only one time that is important – now!\n" +
          "\n" +
          "\n" +
          "It is the most important time because it is the only time when we have any power. The most necessary person is the one with whom you are, for no man knows whether he will ever have dealings with anyone else: And the most important affair is to do that person good, because for that purpose alone was man sent into this life.”\n",
        choiceA: "Meta",
        choiceB: null,
        aToward: 10,
        bToward: null,
        uri: "https://annarezk.com/researchProj/threeQuestions/leave.mp3",
      },
      {
        index: 10,
        position: "Meta",
        text:
          "Well done, you've reached the end of the story.\n" +
          "\n" +
          "\n" +
          "Just like the King, remember that everything happens for a reason and these are often out of our control. There's no such thing as a possibility to know who to be with, where to be or what to do at every given moment.\n" +
          "\n" +
          "\n" +
          "You can't always be in control and that's okay. Instead, focus your energy on acting the best way you can in the present - good things might happen as a result!",
        choiceA: "Replay Meta",
        choiceB: null,
        aToward: 10,
        bToward: null,
        uri:
          "https://annarezk.com/researchProj/threeQuestions/metaThreeQuestions.mp3",
      },
    ],
  },
  {
    id: 2,
    title: '"The Prince"',
    narrator: "Arthur",
    length: "10 mins",
    portrait: require("../assets/Image/John.png"),
    backgroundMusic:
      "https://annarezk.com/researchProj/prince/backgroundPrince1.mp3",
    content: [
      {
        index: 0,
        position: "Start",
        text:
          "Once upon a time in the city of Barbat a young and handsome Prince married a princess. He was known throughout the entire kingdom as being kind yet occasionally angry and ill tempered. His young wife loved him very much.\n" +
          "\n" +
          "\n" +
          "In the sixth month of their marriage the princess met an old friend of hers whom she had known before she met the Prince. Free, for a moment from the royal way of living she laughed and enjoyed herself in her friend’s company.\n" +
          "\n" +
          "\n" +
          "Looking down from his bedroom, the Prince saw what was happening and although he is normally calm, the Prince suddenly found himself painfully jealous. That night, in their royal bedroom, a terrible argument broke out.\n" +
          "\n" +
          "\n" +
          "The Prince accused his wife of cheating on him. He could not bear the idea of being betrayed and humiliated. So, he announced she would be executed within one month.\n" +
          "\n" +
          "\n" +
          "The Princess cried all day and all night until the Prince's chief guard came to the Prince and said “My Lord, I hate to contradict you, but I must warn you. I am afraid you're making a terrible mistake.\n" +
          "\n" +
          "\n" +
          "I was guarding her Majesty every second and she was in her friend's company, I can assure you, no cheating ever happened. In fact, the Princess repeatedly said how much she loved you.”\n" +
          "\n" +
          "\n" +
          "Embarrassed, the Prince returned to his wife and apologised. “Oh, please forgive me my love, what can I do to make it up to you?”\n" +
          "\n" +
          "\n" +
          "The Princess replied “I have never been so hurt. I can no longer bear the sight of your face. If you wish to be with me, you must go away for one month, travel our kingdom and only return once you deem yourself worthy of my forgiveness.\n" +
          "\n" +
          "\n" +
          "On your journey, you will face three tests. If you come through them, you may return and perhaps we will live together. If you fail, I will leave and you will live forever as the lonely Prince.”\n" +
          "\n" +
          "\n" +
          "The Prince set off on his journey and soon arrived in the dark wood forest where a fork in the path forced him to make a choice. Should he go right, or should he go left?",
        choiceA: "Go right",
        choiceB: "Go left",
        aToward: 1,
        bToward: 2,
        uri: "https://annarezk.com/researchProj/prince/startPrince.mp3",
      },
      {
        index: 1,
        position: "Go right",
        text:
          "As he makes the decision to go right, a terrible flash of thunder hits the ground in front of him. The Prince shutters, he’s split in half. One side, another side. One of the Prince goes down the right-hand path. His double, his image sets down the left-hand side. Will they ever see each other again?\n" +
          "\n" +
          "\n" +
          "The Prince who took the right-hand path arrives at a clearing in the forest. There, he comes across a beautiful young girl tied to a tree. In front of her is an evil-looking old woman holding a knife.\n" +
          "\n" +
          "\n" +
          "The young girl cried out to him for help. “Young Prince, come to my rescue, I beg you. Can't you see the evil witch has set out to kill me and destroy the entire village...please don't let me die!”\n" +
          "\n" +
          "\n" +
          "The old woman replies that she is not a witch. Although she’s rather unlucky in appearance, she explains calmly and reasonably that the prince must not be fooled by the young ladies’ speech. The young lady is in fact the witch and setting her free would be a disastrous mistake. “Help me get rid of her or the village will suffer terrible losses!” says the old lady.\n" +
          "\n" +
          "\n" +
          "The Prince, confused, takes a last glance at both of the women. He decides to trust the beautiful young lady and grabs a stick with which he attacks the evil old crone.\n" +
          "\n" +
          "\n" +
          "As he strikes, a second lightning bolt lands right between the three of them. The Prince falls to the ground and when he opens his eyes, he sees the two women, whose appearance has been swapped. They are laughing at him.\n" +
          "\n" +
          "\n" +
          "“Wrong choice,” they said in a single voice. “Looks like you've failed your first test! Beware of making your choices based simply on appearances. What pleases the eye does not always please the soul!” \n" +
          "\n" +
          "\n" +
          "“Oh no,” says the Prince, “how can I make up for my mistakes?”\n" +
          "\n" +
          "\n" +
          "“You cannot,” replied the two women. “We will let you carry on your journey, but as a punishment, we will cast a spell on you!” The Prince continued on his way and the spell made him look ten years younger than he was. His clothes were too big, and his sword and armour were heavy for his adolescent body. \n" +
          "\n" +
          "\n" +
          "The Prince left the forest, at the end of the path, he came across his double, looking old and wrinkly. Together they walk for some time and as they share their experiences, each of them slowly returns close to their normal appearance.\n" +
          "\n" +
          "\n" +
          "After days of walking and talking, they find themselves in a large desert. A major sandstorm breaks out and they get separated again at the time of sunrise.\n" +
          "\n" +
          "\n" +
          "The Prince continues his journey until he meets a nomad walking with his camel. The nomad approaches the Prince and asks him to indicate the way North. The Prince was a proud man and although he did not have the slightest clue of where the North was, he offered to show him the way.\n" +
          "\n" +
          "\n" +
          "As he set off pointing his arm to the sky, the Prince failed to notice a patch of quicksand into which he fell. The Prince was being swallowed by the desert when the nomad offered to help.",
        choiceA: "Accept help",
        choiceB: "Refuse help",
        aToward: 3,
        bToward: 4,
        uri: "https://annarezk.com/researchProj/prince/goRightPrince.mp3",
      },
      {
        index: 2,
        position: "Go left",
        text:
          "As he makes the decision to go left, a massive thunderbolt comes from the sky. The Prince is split in half and while he goes down the left path, his other half sets off down the right-hand side. Will they ever see each other again?\n" +
          "\n" +
          "\n" +
          "To the left he went. The Prince soon arrived at a clearing in the forest. There, he came across a beautiful young girl tied to a tree. In front of her was an evil-looking old woman holding a knife.\n" +
          "\n" +
          "\n" +
          "The young girl cried out to him for help. “Young Prince, come to my rescue, I beg you. Can't you see that the evil witch has set out to kill me and wipe out the entire village...please don't let me die!”\n" +
          "\n" +
          "\n" +
          "The old woman replied that she is not a witch. Instead, although she might have a rather unfortunate appearance, she explains calmly and reasonably that the Prince must not be fooled by the young lady's speech. In fact, the young lady is the witch and that setting her free would be a disastrous mistake says the old lady. “Help me get rid of her or the village will suffer most terrible losses!”\n" +
          "\n" +
          "\n" +
          "The Prince, confused, takes a last glance at both of the women. He decides to trust the old woman, grabs a stick and he launches to attack the young girl. As he is about to reach her, a second bolt of lightning lands between the three of them. The Prince falls back and when he opens his eyes, he sees the two women, whose appearance had been swapped. They are laughing at him.\n" +
          "\n" +
          "\n" +
          "“Well done, Prince. You made the right choice!” they said in a single voice. “It looks like you have successfully passed your first test. Beware of making choices based only on appearances. What pleases the eye does not always please the soul!”\n" +
          "\n" +
          "\n" +
          "“We will let you carry on your journey my Prince – but first...” The two women cast a spell on the Prince that made him age terribly. The previously young and handsome Prince now looks old and wrinkly. “How will I win my wife back if I look like this?” thought the Prince. “What a curse...”\n" +
          "\n" +
          "\n" +
          "The Prince left the forest and at the end of the path, he came across his double, who is on the right-hand side, he looked younger than when he'd left him hours before. Together they walk some time and as they share their experiences, each of them slowly returns close to their normal.\n" +
          "\n" +
          "\n" +
          "After days of walking, they find themselves in a large desert. A major sandstorm breaks out and once again as sunrise comes, they are separated.\n" +
          "\n" +
          "\n" +
          "The Prince continues his journey until he meets a nomad walking his camel. The nomad comes up to the Prince and asks him to indicate the way North. The Prince was a proud man and although he did not have the slightest clue of where the North was, he offered to show the nomad the way.\n" +
          "\n" +
          "\n" +
          "As he set off pointing his arm to the sky, the Prince failed to notice a patch of quicksand into which he fell. The Prince was been swallowed by the desert when the nomad offered to help.",
        choiceA: "Accept help",
        choiceB: "Refuse help",
        aToward: 3,
        bToward: 4,
        previous: 0,
        uri: "https://annarezk.com/researchProj/prince/goLeftPrince.mp3",
      },

      {
        index: 3,
        position: "Accept help",
        text:
          "The Prince felt his body being slowly swallowed by the quicksand.\n" +
          "\n" +
          "\n" +
          "“Nomad,” said the Prince, “save me! After all, I am your Prince and you are a simple nomad. It may be risky for you to come and help me but I deserve it.”\n" +
          "\n" +
          "\n" +
          "With these words, another lightning bolt crossed the sky, the nomad laughed as he stuck a long and solid stick into the quicksand it caught onto the Prince's belt, the nomad lifted him out in a flash.\n" +
          "\n" +
          "\n" +
          "“You saved me! Dear nomad, how can I repay you?” said the Prince.\n" +
          "\n" +
          "\n" +
          "“Poor prince. You have failed your second test. Indeed, not only did you make a mistake by pretending you knew the desert better than me, a nomad, but you are also willing to sacrifice my life in order to make up for your mistake.\n" +
          "\n" +
          "\n" +
          "That was not worthy of an honourable Prince. An honourable Prince knows how to recognise when they don’t know something. And an honourable Prince does not bring others down just to save them from their own mistakes...\n" +
          "\n" +
          "\n" +
          "You are free to continue your journey my Prince!” With these words, the nomad gave the Prince a sip of his water. As he drank, the Prince felt himself get younger, and younger until he was only about ten years old.\n" +
          "\n" +
          "\n" +
          "He yelped in young boy's voice as he saw his reflection in the nomad's jewellery. “I am a little boy! What has happened to me?” said the Prince. “Carry on, dear Prince. Everything happens for a reason!”\n" +
          "\n" +
          "\n" +
          "So, the Prince set off towards the lake, the last part of his journey. He reached the small fisherman's port by the side of the lake, the Prince saw his double, looking like an old man walking very slowly and crouched over. “Follow me,” said the Prince, so they hopped on a tiny boat together to cross the lake.\n" +
          "\n" +
          "\n" +
          "They shared their experiences and as they did so both of them gradually returned to their normal appearance.\n" +
          "\n" +
          "\n" +
          "After a few days on the lake, a terrible storm broke out. Water lashed down, thunder, lightning and hail made the sky dark and threatening. The Princes were soon too heavy for the tiny boat that was filled with water. They tried to drain it, but their weight was making the boat sink, slowly.",
        choiceA: "Jump out",
        choiceB: "Push other Prince out",
        aToward: 5,
        bToward: 6,
        uri: "https://annarezk.com/researchProj/prince/acceptHelpPrince.mp3",
      },
      {
        index: 4,
        position: "Refuse help",
        text:
          "The Prince felt his body being slowly swallowed by the quicksand.\n" +
          "\n" +
          "\n" +
          "“Nomad,” said the Prince, “I cannot accept your help.\n" +
          "\n" +
          "\n" +
          "Indeed, it is my fault, for having pretended I knew the way when I am a stranger in this land. I was too busy gazing at the sky to notice the quicksand that is so common around here. Please do not try to save me or we will both perish. Tell the Princess I'm sorry and that I love her.”\n" +
          "\n" +
          "\n" +
          "After these words, another lightning bolt crossed the sky. The nomad laughed as he stuck a long and solid stick into the quicksand. It caught onto the Prince's belt and lifted him out in a flash.\n" +
          "\n" +
          "\n" +
          "“You saved me! Dear nomad, how can I repay you?” said the Prince. “Congratulations, Prince. You have successfully passed the second test. Indeed, not only did you recognise your mistake, but you also chose to sacrifice yourself to avoid hurting me.\n" +
          "\n" +
          "\n" +
          "This was an honourable choice my Prince. You are free to continue your journey!” With these words, the nomad gave the Prince a sip of his water. As he drank the Prince felt himself age terribly.\n" +
          "\n" +
          "\n" +
          "He yelped as he saw his reflection in the nomad's jewellery. “I am an old man. What has happened to me?” said the Prince. “Carry on, Prince. Everything happens for a reason!”\n" +
          "\n" +
          "\n" +
          "So, the Prince set off towards the lake, the last part of his journey. As he reached the small fisherman's port by the side of the lake, the Prince saw his double, looking like a small child, completely drowned in the royal garments. “Follow me, said the Prince.” So, they hopped on a tiny boat together to cross the lake.\n" +
          "\n" +
          "\n" +
          "They shared their experiences and as they did so, both of them gradually returned to their normal appearance.\n" +
          "\n" +
          "\n" +
          "After a few days on the lake, a terrible storm broke out. Water was lashing down. Thunder, lightning, hail made the sky dark and threatening. The Princes were soon too heavy for the tiny boat that was getting drenched in water. They tried to drain the boat, but their weight was making it slowly sink...",
        choiceA: "Jump out",
        choiceB: "Push other Prince out",
        aToward: 5,
        bToward: 6,
        previous: 1,
        uri: "https://annarezk.com/researchProj/prince/refuseHelpPrince.mp3",
      },
      {
        index: 5,
        position: "Jump out",
        text:
          "The Prince realised that both of them wouldn't make it to the shore. They were simply too heavy. So, the Prince decided to jump out of the boat, leaving the other Prince to reach the shore via the boat and to reunite with the Princess.\n" +
          "\n" +
          "\n" +
          "As he did so, the sky turned black and the largest lightning bolts of them all struck the mast of the boat. It made such a big wave that the Prince was catapulted to land.\n" +
          "\n" +
          "\n" +
          "He lay there, unconscious for a few days. When he woke, he realised with delight that he was only a stone's throw away from his castle. He had made it. He had completed his voyage.\n" +
          "\n" +
          "\n" +
          "But he felt terribly old, more than ever before. His back was aching, and his skin looked wrinkled. “I'll never please the Princess,” said the Prince.\n" +
          "\n" +
          "\n" +
          "And so, he decided to put himself in exile in the woods, close enough to the castle to see his love, but not close enough for her to be frightened by his appearance.\n" +
          "\n" +
          "\n" +
          "On his way to exile, the Prince came across the royal chariot. It was his wife, the Princess. She jumped out and ran towards the Prince. “Congratulations, my Prince, you’ve made it through the final test.”\n" +
          "\n" +
          "\n" +
          "“But I am old and wrinkly, how can you want to be with me?” said the Prince.\n" +
          "\n" +
          "\n" +
          "“Oh dear, your appearance is only a result of the spell, I asked our people to put on you to prove your wisdom. The older you look, the wiser I know you have been on your journey. So, let me tell you, I love you just the way you are right now,” replied the Princess as she kissed the Prince.\n" +
          "\n" +
          "\n" +
          "The Prince returned to his normal appearance and they both lived, as the saying goes, lived happily ever after.",
        choiceA: "Meta",
        choiceB: null,
        aToward: 7,
        bToward: null,
        uri: "https://annarezk.com/researchProj/prince/jumpOutPrince.mp3",
      },
      {
        index: 6,
        position: "Push other Prince out",
        text:
          "The Prince realised that the both of them wouldn't make it to the shore with such heavy rain. They were simply too heavy. So, he decided to push the other Prince out of the boat so that he could reach the other shore.\n" +
          "\n" +
          "\n" +
          "As he did, the sky turned black and the biggest lightning bolts of all hit the boat's mast. It made such a big wave that the Prince was catapulted to land.\n" +
          "\n" +
          "\n" +
          "He lay there, unconscious for a few days. When he woke up the sky had cleared, and he realised with despair that he was on the farthest side of the lake. The farthest from the castle, he could possibly be. All the boats had been destroyed by the storm and he had no way to make it to the other side of the lake, near his castle.\n" +
          "\n" +
          "\n" +
          "So, the Prince set off to walk around to the shore. But he got so tired that eventually he fell asleep. When he awoke, the Princess, as well as four other members of the court were standing above his childish body. He jumped up to his feet and realised with despair that he only reached the Princess's waist.\n" +
          "\n" +
          "\n" +
          "“My Princess, my dear! At last I find you! I have travelled the kingdom and crossed many obstacles to reach you. Will you please forgive me now?” said the Prince.\n" +
          "\n" +
          "\n" +
          "“Absolutely not,” replied the Princess, “you have failed the final test. You chose to sacrifice your double to reach your own goal. That is unwise and unworthy of a true Prince.\n" +
          "\n" +
          "\n" +
          "I asked the people in the kingdom to cast a spell on you every time you failed the test making your appearance return to that of a child. Judging by your childish looks, it seems like this trip has not made you think enough.\n" +
          "\n" +
          "\n" +
          "I am sorry my Prince, but I must leave you now. You will be now and forever the lonely Prince.”",
        choiceA: "Meta",
        choiceB: null,
        aToward: 7,
        bToward: null,
        uri:
          "https://annarezk.com/researchProj/prince/pushOtherPrincePrince.mp3",
      },
      {
        index: 7,
        position: "Meta",
        text:
          "So, what did the Prince learn? Appearances aren’t always what they seem to be. You aren’t always the most important person around. It’s fine to make a mistake if you acknowledge it. And it’s not the greatest idea to sacrifice others to achieve your own goals.",
        choiceA: "Replay Meta",
        choiceB: null,
        aToward: 7,
        bToward: null,
        uri: "https://annarezk.com/researchProj/prince/metaPrince.mp3",
      },
    ],
  },
  {
    id: 3,
    title: '"Memnon"',
    narrator: "Kathryn",
    length: "15 mins",
    portrait: require("../assets/Image/Mary.png"),
    backgroundMusic:
        "https://annarezk.com/researchProj/memnon/backgroundMemnon1.mp3",
    content: [
      {
        index: 0,
        position: "Start",
        text:
            "One day, Memnon decided to become a great philosopher. “Easy! To be perfectly happy,” he said to himself, “I have nothing to do but to deprive myself entirely of passions; and nothing is more easy, as everybody knows.\n" +
            "\n" +
            "\n" +
            "First, I will never be in love. When I see a beautiful woman, I will say to myself, these cheeks will one day grow sallow and wrinkled. This way, I will avoid all the sufferings of a lost love.”\n" +
            "\n" +
            "\n" +
            "“In the second place, I will always be temperate. It will be in vain to tempt me with large banquets, with delicious wines, or the charms of society, I will have only to keep in mind the consequences of excess - an aching head, a loathing stomach, the loss of reason, of health, and of time:\n" +
            "\n" +
            "\n" +
            "I will then only eat enough to keep myself healthy; my health will be always equal, my ideas pure and clear. All this is so easy!”\n" +
            "\n" +
            "\n" +
            "“Also,” says Memnon, “I must regulate my fortune. I wish to live an independent life and never to be in cruel necessity. Nobody will envy me, but I shall not envy anybody either. This way, I will keep my friendships and stay away from arguments. Easy!”\n" +
            "\n" +
            "\n" +
            "Having elaborated his little plan of philosophy from his bedroom, Memnon put his head out of the window when he heard a lady cry outside. He saw a woman sitting down in front of his house, her face buried in her delicate hands. She sighed, she wept, and seemed on that account still more beautiful.\n" +
            "\n" +
            "\n" +
            "Our philosopher was touched, not, to be sure, with the lady, but with the distress which he saw in her. Yet, he felt uneasy as he'd only just decided to stay away from the charms of the ladies.",
        choiceA: "Help the lady",
        choiceB: "Go for a walk",
        aToward: 1,
        bToward: 2,
        uri: "https://annarezk.com/researchProj/memnon/startMemnon.mp3",
      },
      {
        index: 1,
        position: "Help the lady",
        text:
            "He came downstairs, and accosted the young lady, designing to console her with philosophy. She explained that her terribly mean uncle had deprived her from her propriety and that she feared he would send her away.\n" +
            "\n" +
            "\n" +
            "“Memnon, you seem to be,” said she, “a man of such wisdom, that if you will come to my house and examine my affairs, I am sure you will be able to relieve me from the cruel situation I am in.”\n" +
            "\n" +
            "\n" +
            "The afflicted lady led him into a perfumed chamber, and politely made him sit down with her on a large sofa, where they both placed themselves opposite to each other, in the attitude of conversation; the one eager in telling her story, the other listening with devout attention.\n" +
            "\n" +
            "\n" +
            "By degrees, in the warmth of conversation they grew nearer. Memnon felt himself falling under the spell of this charming young lady. She leaned closer and closer to Memnon, their lips almost touching.\n" +
            "\n" +
            "\n" +
            "Suddenly, the uncle barged into the room! He was armed from head to foot, and the first thing he said was that he would immediately sacrifice, as was just, both Memnon and his niece for partaking in such conduct outside of marriage.\n" +
            "\n" +
            "\n" +
            "The niece, who made her escape, knew that her uncle was disposed to forgive Memnon provided a good round sum of gold was offered to him. Memnon was applied to purchase his safety with all he had on him. As he rounded his gold, he heard the young niece and her uncle jangle in the other room. Memnon understood he had been scammed...\n" +
            "\n" +
            "\n" +
            "Covered with shame and confusion, Memnon returned to his own house. He there found a card inviting him to dinner with some of his intimate friends.\n" +
            "\n" +
            "\n" +
            "“What a bad start...I'm confused,” said he, “I shouldn't stay alone, if I do, I'll have my mind so occupied with what has just happened, that I won't be able to eat or sleep, it might even bring disease upon me...I think it's safer to go visit my good friends and partake with them of a frugal dinner.”",
        choiceA: "Accept invitation",
        choiceB: "Decline invitation",
        aToward: 3,
        bToward: 4,
        uri: "https://annarezk.com/researchProj/memnon/helpLady.mp3",
      },

      {
        index: 2,
        position: "Go for a walk",
        text:
            "The desire to help the young lady was strong, but Memnon's determination to follow his strict rules was even greater. No woman shall any longer seduce him by her looks or by her tears.\n" +
            "\n" +
            "\n" +
            "Proud of his determination, Memnon went downstairs and walked straight past the weeping young lady, whistling. As he crossed the bridge leading to the town's market, a tall grey-haired man who'd witnessed the scene launched an aggressive frown upon Memnon.\n" +
            "\n" +
            "\n" +
            "“What kind of gentleman ignores the cries of a young lady? Your chivalry is as fragile as a house of cards my dear man. I wonder what the village would think of such poor conduct? Of course, no man is without knowing that a few coins are the best gatekeepers to our darkest secrets...” said the old man.\n" +
            "\n" +
            "\n" +
            "Memnon felt guilty and delved into his pocket to give the man all the coins he was carrying that day.\n" +
            "\n" +
            "\n" +
            "Covered with shame and confusion, Memnon returned to his own house. He there found a card inviting him to dinner with some of his intimate friends.\n" +
            "\n" +
            "\n" +
            "“What a bad start...I'm confused,” said he, “I shouldn't stay alone, if I do, I'll have my mind so occupied with what has just happened, that I won't be able to eat or sleep, it might even bring disease upon me...I think it's safer to go visit my good friends and partake with them of a frugal dinner.”",
        choiceA: "Accept invitation",
        choiceB: "Decline invitation",
        aToward: 3,
        bToward: 4,
        uri: "https://annarezk.com/researchProj/memnon/goForWalk.mp3",
      },
      {
        index: 3,
        position: "Accept invitation",
        text:
            "Accordingly, he accepts the invitation. As he arrives, he feels uneasy, and he is urged to drink to relax.\n" +
            "\n" +
            "\n" +
            "“A little wine, drunk in moderation, comforts the heart,” so reasoned Memnon the philosopher, and he became intoxicated. After the feast, a game of cards and dice is proposed.\n" +
            "\n" +
            "\n" +
            "“A little play, with one's good friends, is a harmless pastime.”",
        choiceA: "Play",
        choiceB: "Decline the game",
        aToward: 5,
        bToward: 6,
        uri: "https://annarezk.com/researchProj/memnon/acceptInvite.mp3",
      },
      {
        index: 4,
        position: "Decline invitation",
        text:
            "Despite his concerns, Memnon decides to decline the invitation. However, as the evening goes by and his mind runs through the events of the morning over and over again, he is urged to drink.\n" +
            "\n" +
            "\n" +
            "“A little wine, drunk in moderation, comforts the heart,” so reasoned Memnon the philosopher, and he became intoxicated.\n" +
            "\n" +
            "\n" +
            "Memnon put on his boots and decided to take a walk around the dark streets of his village. His vision was blurred but he could spot the warm lights of the village tavern at a distance.\n" +
            "\n" +
            "\n" +
            "“One more drink will comfort the heart and clear my mind from this spiral of remorse,” Memnon says to himself, conveniently forgetting about the concept of moderation.\n" +
            "\n" +
            "\n" +
            "Memnon stumbled into the tavern where he saw a good friend who invited him to play cards.\n" +
            "\n" +
            "\n" +
            "“A little play, with one's good friends, is a harmless pastime.”",
        choiceA: "Play",
        choiceB: "Decline the game",
        aToward: 5,
        bToward: 6,
        uri: "https://annarezk.com/researchProj/memnon/declineInvite.mp3",
      },
      {
        index: 5,
        position: "Play",
        text:
            "He plays and loses all in his purse, and four times as much on his word. A dispute arises on some circumstance in the game. One of his intimate friends throws a dice-box at his head and strikes Memnon. The philosopher Memnon is carried home drunk and penniless, with a terrible wound to his face.\n" +
            "\n" +
            "\n" +
            "He sleeps out his debauch, and, when his head becomes clear, he sends his servant to the Receiver General of the finances of Nineveh, to draw a little money to pay his debt of honour to his intimate friends.\n" +
            "\n" +
            "\n" +
            "The servant returns and informs him that the Receiver General had that morning been declared a fraudulent bankrupt, and that by this means a hundred families are reduced to poverty and despair. Memnon was now poor.",
        choiceA: "Conclusion",
        choiceB: null,
        aToward: 7,
        bToward: null,
        uri: "https://annarezk.com/researchProj/memnon/play.mp3",
      },
      {
        index: 6,
        position: "Decline the game",
        text:
            "Tempted, Memnon considered joining the game for a few minutes. However, he declines the offer and decides to drink a few more glasses of wine before going back home.\n" +
            "\n" +
            "\n" +
            "Memnon's vision became increasingly blurry and his rationale was proportionally affected by the amount of wine he had consumed. The tavern was closing, and Memnon was asked to leave.\n" +
            "\n" +
            "\n" +
            "In an effort to walk back to his house faster, Memnon began to run and soon got lost. He came across a narrow, gloomy, winding backstreet where the slippery stones of the pavement made him slip and fall spectacularly. Memnon was alone, inebriated and had a terrible wound to his face. Suddenly, a mysterious man appeared from the shadows.\n" +
            "\n" +
            "\n" +
            "“I have a stone that will cure all your wounds. Only, this stone is worth a thousand coins,” says the man.\n" +
            "\n" +
            "\n" +
            "“I have no coins my dear...I...spent...” replies Memnon unclearly.\n" +
            "\n" +
            "\n" +
            "At this precise moment, his friend whom he had refused to play with hours before walked past. Having won the game, he felt generous enough to help Memnon. His friend lent Memnon a thousand coins, Memnon got the stone and returned home.\n" +
            "\n" +
            "\n" +
            "He sleeps out his debauch, and, when his head becomes clear, he sends his servant to the Receiver General of the finances of Nineveh, to draw a little money to pay his debt of honour to his intimate friend.\n" +
            "\n" +
            "\n" +
            "The servant returns and informs him that the Receiver General had that morning been declared a fraudulent bankrupt, and that by this means a hundred families are reduced to poverty and despair. Memnon was now poor.",
        choiceA: "Conclusion",
        choiceB: null,
        aToward: 7,
        bToward: null,
        uri: "https://annarezk.com/researchProj/memnon/declineGame.mp3",
      },
      {
        index: 7,
        position: "Conclusion",
        text:
            "Memnon having thus, in his closet, resolved to renounce women, the excess of the table, play, and quarreling, but especially having determined never to go to court, had been in the short space of four-and-twenty hours duped and robbed, had got drunk, had got his face wounded, and had lost all his money.\n" +
            "\n" +
            "\n" +
            "While Memnon was beginning to lose faith, a spirit appeared to him.\n" +
            "\n" +
            "\n" +
            "It was all resplendent with light: It had six beautiful wings, but neither feet, nor head, and could be likened to nothing.\n" +
            "\n" +
            "\n" +
            "“Who art thou?” said Memnon.\n" +
            "\n" +
            "\n" +
            "“Thy good genius,” replied the spirit.\n" +
            "\n" +
            "\n" +
            "“Restore me then my face, my health, my fortune, my reason,” said Memnon; and he related how he had lost them all in one day. “These are adventures which never happen to us in the world we inhabit,” said the spirit.\n" +
            "\n" +
            "\n" +
            "“And what world do you inhabit?” said the man of affliction.\n" +
            "\n" +
            "\n" +
            "“My native country,” replied the other, “is five hundred millions of leagues distant from the sun, in a little star near Sirius, which you see from hence.”\n" +
            "\n" +
            "\n" +
            "“Charming country!” said Memnon.\n" +
            "\n" +
            "\n" +
            "“We are never duped by women, because we have none among us; we never commit excesses at table, because we neither eat nor drink; we have no bankrupts, because with us there is neither silver nor gold; our faces cannot be wounded, because we have not bodies in the form of yours; and satraps never do us injustice, because in our world we are all equal,” said the inhabitant of the star.\n" +
            "\n" +
            "\n" +
            "“Pray my lord,” said Memnon, “without women and without eating how do you spend your time?”\n" +
            "\n" +
            "\n" +
            "“In watching, over the other worlds that are entrusted to us; and I am now come to give you consolation.”\n" +
            "\n" +
            "\n" +
            "“Alas!” said Memnon, “why did you not come yesterday to hinder me from committing so many indiscretions?”\n" +
            "\n" +
            "\n" +
            "“I was with your elder brother Hassan,” said the celestial being. “He is still more to be pitied than you are. His most gracious majesty, the sultan of the Indies, in whose court he has the honour to serve, has caused both his eyes to be put out for some small indiscretion; and he is now in a dungeon, his hands and feet loaded with chains.”\n" +
            "\n" +
            "\n" +
            "“This a happy thing, truly,” said Memnon, “to have a good genius in one's family, when out of two brothers, one is wounded of the face, the other blind of both eyes; one stretched upon straw, the other in a dungeon.”\n" +
            "\n" +
            "\n" +
            "“Your fate will soon change,” said the spirit of the star. “It is true you will never recover your face; but, except that, you may be sufficiently happy if you never again take it into your head to be a perfect philosopher.”\n" +
            "\n" +
            "\n" +
            "“Is it then impossible?” said Memnon.\n" +
            "\n" +
            "\n" +
            "“As impossible as to be perfectly wise, perfectly strong, perfectly powerful, perfectly happy. We ourselves are very far from it.\n" +
            "\n" +
            "\n" +
            "There is a world indeed where all this takes place; but, in the hundred thousand millions of worlds dispersed over the regions of space, everything goes on by degrees. There is less philosophy and less enjoyment in the second than in the first, less in the third than in the second, and so forth till the last in the scale, where all are completely fools.”\n" +
            "\n" +
            "\n" +
            "“I am afraid,” said Memnon, “that our little terraqueous globe here is the madhouse of those hundred thousand millions of worlds, of which your lordship does me the honor to speak.”\n" +
            "\n" +
            "\n" +
            "“Not quite,” said the spirit, “but very nearly; everything must be in its proper place.”\n" +
            "\n" +
            "\n" +
            "“But are those poets and philosophers wrong, then, who tell us that everything is for the best?”\n" +
            "\n" +
            "“No, they are right, when we consider things in relation to the gradation of the whole universe.”",
        choiceA: "Meta",
        choiceB: null,
        aToward: 8,
        bToward: null,
        uri: "https://annarezk.com/researchProj/memnon/conclusionMemnon.mp3",
      },
      {
        index: 8,
        position: "Meta",
        text:
            "Congratulations, you've reached the end of the story!\n" +
            "\n" +
            "\n" +
            "When Voltaire wrote this short story, he meant to criticise religious institutions who preached the healthiest, wisest conduct and lifestyle while acting, in fact, very far from it. Beware of people who present simple ways to be happy.\n" +
            "\n" +
            "\n" +
            "Just like Memnon, your wisdom will be most likely acquired through your experiences rather than by applying a theoretical approach to achieve it. You will eventually learn to understand what you like and dislike.\n" +
            "\n" +
            "\n" +
            "Each person's path is unique, there's no one rule fits all.\n" +
            "\n" +
            "\n" +
            "Today, the temptation is great to feel overwhelmed and underachieving when we're frequently exposed to self-improvement content by YouTubers, life coaches preaching simple methods to lead the healthiest, most successful life.\n" +
            "\n" +
            "\n" +
            '"Get up at 5am every day, eat healthy, exercise, take cold showers, run, run marathons, be successful..."\n' +
            "\n" +
            "\n" +
            "You spend more time consuming self-improvement content than actually acting to improve?\n" +
            "\n" +
            "\n" +
            "Don't worry, so do many people.\n" +
            "\n" +
            "\n" +
            "Beware not to be duped by their apparent success. Positive thinking is a lucrative and popular trend, not all you see corresponds to what goes on behind the scenes. Not to say that you should not aim to improve, but embracing your imperfections is part of learning to accept yourself as you truly are!",
        choiceA: "Replay Meta",
        choiceB: null,
        aToward: 8,
        bToward: null,
        uri: "https://annarezk.com/researchProj/memnon/metaMemnon.mp3",
      },
    ],
  },
];
export default stories;
