var tweets = [

    {
        tweet: " 18 million",
        username: "Miles",
        age: "13",
        created_at: "9-12-2019",
    },
    {
        tweet: "Whos there",
        username: "Brady",
        age: "72",
        created_at: "11-2-2020",
    },
    {
        tweet: "Been there",
        username: "Craig",
        age: "17",
        created_at: "1-12-2020",
    },
    {
        tweet: "This is the best",
        username: "Donald",
        age: "21",
        created_at: "11-12-2010",
    },
    {
        tweet: "Tweet talking",
        username: "Shaelyn",
        age: "63",
        created_at: "1-2-2012",
    },
    {
        tweet: "Twitter 1",
        username: "Thomas",
        age: "12",
        created_at: "1-15-2020",
    },
    {
        tweet: "Twitter 2",
        username: "Ryerson",
        age: "27",
        created_at: "8-12-2010",
    },
    {
        tweet: "Tweet it",
        username: "Blair",
        age: "33",
        created_at: "11-2-2013",
    },
    {
        tweet: "Tweet 1",
        username: "Candice",
        age: "24",
        created_at: "7-12-2020",
    },
    {
        tweet: "Tweet 3",
        username: "Mia",
        age: "45",
        created_at: "6-12-2017",
    },

];

// for(var index = 0; index < tweets.length; index++) {
//     console.log(tweets[index].tweet);
//     console.log(tweets[index].username);
//     console.log(tweets[index].age);
//     console.log(tweets[index].created_at);
// }


function checkAge(tweet) {
    return tweet.age >= 18;
}

var eightteenPlusTweets = tweets.filter (checkAge);
console.log(eightteenPlusTweets);



