import { Composer } from 'grammy';

const composer = new Composer();

export default composer;

const help =
 `*Commands Available :*\n\n` +
    `/jiosaavn or /jsvn : Play songs from JioSaavn\n` +
    `/ytplay or /yt : Play songs from YouTube\n` +
    `/play : Reply this command to audio files to play the file\n` +
    `/queue or /playlist : Check queued songs list\n` +
    `/p or /pause : Pause the stream\n` +
    `/r or /resume: Resume the stream\n` +
    `/next or /skip : Skip the current song\n` +
    `/stopvc : Stop the stream\n` +
    `/help : Show this Menu`;

composer.command('help', ctx => ctx.reply(help, { parse_mode: 'MarkdownV2' }));
