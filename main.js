const message0 = '“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”—Diane McLaren';
const message1 = '“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein';
const message2 = '“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi';
const message3 = '“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain';
const message4 = '“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”— Eleanor Roosevelt';
const message5 = '“When you change your thoughts, remember to also change your world.”—Norman Vincent Peale';
const message6 = '“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson';

const random = Math.floor(Math.random() * 7);
//console.log(random);
var message = "";

switch (random) {
    case 0:
        message = message0;
        break;
    case 1:
        message = message1;
        break;
    case 2:
        message = message2;
        break;
    case 3:
        message = message3;
        break;
    case 4:
        message = message4;
        break;
    case 5:
        message = message5;
        break;
    case 6:
        message = message6;
        break;
    default:
        console.log("Sorry, no more expressions...");
}
console.log(message);