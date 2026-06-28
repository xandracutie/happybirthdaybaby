/* ════════════════════════════════════════════════════════
   EDIT ME — everything you'd want to personalize lives here.
   The HTML/CSS/JS never need to change for normal edits.
   ════════════════════════════════════════════════════════ */

/* ── 🎵 SONG ──
   Name shown in the player. To add the actual audio file, open
   index.html, find <audio id="aud">, and add inside it:
   <source src="song.mp3" type="audio/mpeg">
   (drop "song.mp3" in the same folder as index.html) */
const SONG_NAME = 'My dedicated song for you';

/* ── 🔒 LOCK SCREEN ──
   The date she has to type correctly to open the site. */
const LOCK_MONTHS = ['october','oct','10'];
const LOCK_DAY = 13;


const HERO_PHOTO = 'photo1.jpg';

// FEATURED — 3 large photos ("Chapter I")
const FD = [
  { img:'photo2.jpg', n:'Memory 001', c:'The first time I really saw you — not just looked, but truly saw. That moment changed something in me forever.', tag:'always' },
  { img:'photo3.jpg', n:'Memory 002', c:'You were laughing about something silly and I remember thinking: I want to hear that laugh every single day.', tag:'favourite' },
  { img:'photo4.jpg', n:'Memory 003', c:'Some moments are so perfect they feel borrowed from a dream. This was one of them.', tag:'forever' },
];

// LIBRARY — 12 photos masonry ("Chapter II")
const LD = [
  { img:'photo5.jpg',  n:'Memory 004', c:'The quiet mornings. I didn\'t know how much they meant until they became my favourite part of the day.', sz:'tall' },
  { img:'photo6.jpg',  n:'Memory 005', c:'This one makes me smile without fail, every single time.', sz:'wide' },
  { img:'photo7.jpg',  n:'Memory 006', c:'You and the golden hour — a completely natural pair.', sz:'sq' },
  { img:'photo8.jpg',  n:'Memory 007', c:'The in-between moments are always the most honest ones.', sz:'sq' },
  { img:'photo9.jpg',  n:'Memory 008', c:'I didn\'t know ordinary could feel this extraordinary until you were in it.', sz:'tall' },
  { img:'photo10.jpg', n:'Memory 009', c:'This is what happiness looks like. I\'m keeping it here forever.', sz:'wide' },
  { img:'photo11.jpg', n:'Memory 010', c:'The world was moving and we were completely still — just for a second.', sz:'sq' },
  { img:'photo12.jpg', n:'Memory 011', c:'You looked at me like that and I completely forgot what I was going to say.', sz:'sq' },
  { img:'photo13.jpg', n:'Memory 012', c:'Time moves differently when you\'re there. Slower. Softer. Better.', sz:'sq' },
  { img:'photo14.jpg', n:'Memory 013', c:'There\'s a kind of light that only exists in certain moments. You carry it.', sz:'tall' },
  { img:'photo15.jpg', n:'Memory 014', c:'I keep coming back to this one. There\'s something in it I\'m still figuring out.', sz:'wide' },
  { img:'photo16.jpg', n:'Memory 015', c:'If I could go back to any moment, it would be one that looked exactly like this.', sz:'sq' },
];

// STRIP / TIMELINE — 8 photos, drag to scroll ("Chapter III")
const SD = [
  { img:'photo17.jpg', n:'Memory 016', yr:'a beginning', c:'Before all the big things, there were these small, perfect ones.' },
  { img:'photo18.jpg', n:'Memory 017', yr:'together',    c:'We didn\'t plan this. The best ones never are.' },
  { img:'photo19.jpg', n:'Memory 018', yr:'golden',      c:'I\'ll never forget how the light caught you in this moment.' },
  { img:'photo20.jpg', n:'Memory 019', yr:'always',      c:'You were glowing here. You usually are, but especially here.' },
  { img:'photo21.jpg', n:'Memory 020', yr:'ours',        c:'This belongs to us — nobody else needs to understand it.' },
  { img:'photo22.jpg', n:'Memory 021', yr:'still',       c:'Still my favourite memory. Still.' },
  { img:'photo23.jpg', n:'Memory 022', yr:'soft',        c:'The kind of quiet that feels full rather than empty.' },
  { img:'photo24.jpg', n:'Memory 023', yr:'forever',     c:'If I had to point to a single moment — it might be this one.' },
];

/* ── REASONS I LOVE YOU ──
   Interactive flip cards. "front" is what shows first (kept short —
   a number or a tiny word), "back" is the reason, revealed on click. */
const REASONS = [
  { front:'01', back:'The way you laugh at your own jokes before anyone else even gets them.' },
  { front:'02', back:'How you remember small details about people most others would forget.' },
  { front:'03', back:'The way you say our call sign "BABU" when you\'re about to tell me something exciting.' },
  { front:'04', back:'How you make even the most ordinary Tuesday feel like an special day.' },
  { front:'05', back:'The way you care for the people you love, quietly and without needing credit.' },
  { front:'06', back:'How being near you has always felt like coming home.' },
];

/* ── LETTERS — 4 short letters, click to open & read ── */
const LETTERS = [
  {
    tag: 'Letter I · The first one',
    title: 'On the day I knew',
    preview: 'There is a particular kind of knowing that arrives quietly — not all at once, but slowly, like something being uncovered...',
    body: `<p>There is a particular kind of knowing that arrives quietly — not all at once, but slowly, like something being uncovered. That's how it was with you.</p>
<p>I remember the exact moment I stopped pretending I was just your friend. We were somewhere ordinary — the kind of place you'd forget immediately — and you said something, laughed at something, and I thought: <em>oh. There it is.</em></p>
<p>I've been carrying that moment around ever since. Not because it was dramatic, but because it was so unmistakably true. And truth, when you find it, tends to stay.</p>
<p>Happy birthday, Ace. I'm glad the knowing found me.</p>`,
    sig: '— always yours'
  },
  {
    tag: 'Letter II · About you',
    title: 'Everything I notice',
    preview: 'I notice the way you listen — actually listen, not just wait for your turn to speak. I notice how you make space for people without even realising...',
    body: `<p>I notice the way you listen — <em>actually</em> listen, not just wait for your turn to speak. I notice how you make space for people without even realising you're doing it.</p>
<p>I notice the way you laugh when something catches you off guard — unguarded, real, a little surprised by yourself. I notice how you are kinder to strangers than most people are to their closest friends.</p>
<p>I notice you, Ace. I always have. I just thought you should know.</p>
<p>On this birthday, I want you to know that every small thing you do — every gentle, generous, quietly extraordinary thing — it does not go unseen. Not by me.</p>`,
    sig: '— someone who notices everything'
  },
  {
    tag: 'Letter III · For hard days',
    title: 'When you need to read this',
    preview: 'Save this one for a day that feels too heavy. For when the world is loud and you\'ve forgotten, just for a moment, how much you matter...',
    body: `<p>Save this one for a day that feels too heavy. For when the world is loud and you've forgotten, just for a moment, how much you matter.</p>
<p>On those days, I want you to come back here and read this: <em>you are not too much. You are not too little. You are exactly right.</em></p>
<p>The things that make you feel like you don't fit are often the exact things that make you irreplaceable. Your sensitivity. Your depth. The way you feel things fully, all the way down.</p>
<p>Those are not flaws. Those are the whole point of you.</p>
<p>I mean it. Every word. Come back and read it again if you need to.</p>`,
    sig: '— on your side, always'
  },
  {
    tag: 'Letter IV · For your birthday',
    title: 'What I wish for you',
    preview: 'On your birthday, I don\'t wish you something grand. I wish you the small things — the ones that are actually large once you\'re old enough to know...',
    body: `<p>On your birthday, I don't wish you something grand. I wish you the small things — the ones that are actually large, once you're old enough to know.</p>
<p>I wish you mornings that feel like a gift rather than an obligation. I wish you one conversation this year that you'll still think about a decade from now. I wish you the kind of laughter that makes your stomach hurt in the best way.</p>
<p>I wish you the courage to ask for what you need, and the grace to receive it when it comes. I wish you rest — real rest, not just the absence of motion.</p>
<p>And I wish you this: the knowledge, somewhere in your chest where the quiet things live, that <em>you are loved. That you have always been loved. That you will go on being loved.</em></p>
<p>Happy birthday, Ace. This year is going to be something beautiful.</p>`,
    sig: '— with my whole heart, October 13'
  }
];

/* ── 🕯 MAKE A WISH ──
   Number of candles to blow out, and the message revealed once
   every single one has been clicked. */
const CANDLE_COUNT = 5;
const WISH_MESSAGE = 'Whatever you wished for — I hope it finds its way to you. And if it doesn\'t, I\'ll spend the year trying to be the one who gives it to you, i love you baby.';

/* ── ✉️ THE BIG LETTER ──
   This is the long, full letter — separate from the 4 short ones
   above. Write as much as you want here. Use TWO line breaks
   (press Enter twice) between paragraphs so each one is laid out
   properly. Wrap any word or phrase in <em>...</em> to italicize it
   in the rose colour, same as the other letters. */
const BIG_LETTER = {
  eyebrow: 'Before you go',
  heading: 'One More Thing',
  body: `I wanted to leave you with something longer than a caption and slower than a scroll — because some things don't fit in a small box, and what I feel for you is one of them.

I hope ma enjoy mo yung araw mo ngayon. I just want to say na thank you fro everything you've done for me, i'll always be here everytime na need mo ng someone welp as always. Good luck sa journey mo as future chef sa isang malaking cruise ship and I hope matupad mo lahat ng dreams mo in the future, i know naman na kaya mo as always kahit naman siguro wala ako?? (we sinungaling) kidding aside i always be there especially sa mga achievement mo sa buhay alam ko lahat ng pangarap mo soon matutupad mo. Pasensya ka na ha kung minsan lagi nalang ako galit sa ’yo hahahahahahaha tumatanda na kasi i mean hindi naman lagi diba leche ha pero sana hindi ka maumay sa ’kin minsan kasi pagod na rin ako galing school pag umuuwi binubuhos ko kasi lahat sa school i always do my best to get the award and i hope na andyan kapa kapag nakuha ko na ’yon hehehehehehehe. Pasensya kana kung minsan hindi ko na ffulfill yung mga gusto mo pero sana maisip mo soon na lahat ng gusto natin magagawa rin natin. Pasensya na dahil lagi nalang ako sakit sa ulo sa ’yo ginagawa ko naman rin lahat kahit papano pero if mapuno kana at hindi mo na kaya, you can always leave me (sinabi ko na ’yan ha permitted na so isumbat mo sa ’kin if ever na magalit ako soon kung ayaw mo na lol). Pasensya kana kung dahil ako minsan ang reason ng kalungkutan mo. Pasensya kana kung minsan sayo ko na pupunta yung galit ko sa pamilya. Pasensya kana kung sa ’yo ko pinupunta yung trauma na nakuha ko sa mga magulang ko kahit wala ka naman kasalanan especially sa papa ko.

Isang taon nalang graduate kana grabe ang bilis nakita ko lahat ng struggle, pagod, at commitment mo sa lahat sobrang proud ako sa lahat ng bagay na ’yon, proud ako sa mga bagay na nakuha mo. Deserve mo lahat ng pagmamahal na nakukuha mo ngayon, You always deserve everything. I hope bigyan kapa ni lord ng maraming blessing in the future and i hope na maging maganda ang future mo, i always believe in you ikyk. Wala na ’kong ibang hihilingan pa kundi ang successful mo lang. 

Ace Claidon, you will always have a special space in my heart. Thankyou for everything. I always love you no matter what, kahit anong flaws pa man ang nakikita mo sa sarili mo. You will always be the best man that I've ever met. Thankyou for making my life truly the best. Thank you because whenever na pagod ako sa lahat andyan ka. Thankyou kasi nung time na wala akong masasandalan andyan ka para sa ’kin. Thankyou for existing.  Maraming salamat sa maraming tao na nakasama kita sobrang pinasaya mo yung kalahati ng buhay ko na puno na ka walang kwentahang bagay sa taon na pinag samahan natin andami kong natutunan sa ’yo.`,
  sig: '— Youre Beloved, Xandra'
};
