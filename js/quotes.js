const quotes = [
    {
        quote : "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
        author : "괴테",
    },
    {
        quote : "만약 우리가 할 수 있는 일을 모두 한다면 우리들은 우리자신에 깜짝 놀랄 것이다.",
        author : "에디슨",
    },
    {
        quote : "고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다.",
        author : "베토벤",
    },
    {
        quote : "겨울이 오면 봄이 멀지 않으리",
        author : "셸리",
    },
    {
        quote : "자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다.",
        author : "오손 웰스",
    },
    {
        quote : "이미끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라.",
        author : "탈무드",
    },
    {
        quote : "진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다. ",
        author : "아인슈타인",
    },
    {
        quote : "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.",
        author : "단테",
    },
    {
        quote : "화려한 일을 추구하지 말라. 중요한 것은 스스로의 재능이며, 자신의 행동에 쏟아 붓는 사랑의 정도이다.",
        author : "마더 테레사",
    },
    {
        quote : "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.",
        author : "헬렌 켈러",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;