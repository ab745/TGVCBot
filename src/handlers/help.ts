import { Composer } from 'telegraf';


const help: string =
    `*Commands Available :*\n\n` +
    `\n` +  
    `/jiosaavn or /jsvn : Play songs from JioSaavn\n` +
    `/ytplay or /yt : Play songs from YouTube\n` +
    `/play : Reply this command to audio files to play the file\n` +
    `/queue or /next : Check queued songs list\n` +
    `/p or /pause : Pause the stream\n` +
    `/r or /pause: Resume the stream\n` +
    `/next or /skip : Skip the current song\n` +
    `/stopvc : Stop the stream\n` +
    `/help : Show this Menu`

export const Help = Composer.command('help', async ctx => {
    
    if (ctx.chat.type === 'channel', 'group', 'supergroup') return await ctx.reply("This Command works in private Only");
    
    if (ctx.chat.type === 'private') return await ctx.replyWithMarkdownV2(help);
    
})
