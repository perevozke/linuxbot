require('dotenv').config()
const TelegramApi = require('node-telegram-bot-api')
const schedule = require('node-schedule')
const TGTOKEN = process.env.TGTOKEN

const bot = new TelegramApi(TGTOKEN, {polling: true})

function start() {

    chatID = -1 // chatID можно узнать словив в ответном msg msg.chat.id либо же использовать https://t.me/username_to_id_bot

    let exercises = ['пример1', 'пример2', 'пример3'] // закиньте ваши упражнения
    let goslings = ['src/goslingUkraine.jpg', 'src/goslingProgress.jpg', 'src/goslingBeach.jpg', 'src/goslingGym.jpg'] // закиньте ваши пикчи, по необходимости добавьте новых и впишите


    const rule = new schedule.RecurrenceRule();
    rule.minute = 0

    const job = schedule.scheduleJob(rule, function () {
        let exercise = exercises[Math.floor(Math.random() * 2)]

        let amount = Math.floor(Math.random() * 11) + 5

        let photo = goslings[Math.floor(Math.random() * 59)]
        bot.sendPhoto(-1001877583375, photo, {caption: `сделать ${exercise} ${amount} раз`});
    });
}
start()