import { Composer } from 'telegraf';


const help: string =
    `*Commands Available :*\n\n` +
    `\n` +  
    `/jiosaavn or /jsvn : Play songs from JioSaavn\n` +
    `/ytplay or /yt : Play songs from YouTube\n` +
    `/play : Reply this command to audio files to play the file\n` +
    `/queue or /playlist : Check queued songs list\n` +
    `/p or /pause : Pause the stream\n` +
    `/r or /pause: Resume the stream\n` +
    `/next or /skip : Skip the current song\n` +
    `/stopvc : Stop the stream\n` +
    `/help : Show this Menu`

export const Help = Composer.command('help', async ctx => {
    
    await ctx.replyWithMarkdownV2(ctx.chat.type === 'private' ? help : 'This Command works in private Only' );
    
})
