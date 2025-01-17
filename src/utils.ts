/**
 * Copyright 2021 Arnab Paryali and the Contributors - https://github.com/ArnabXD/TGVCBot/graphs/contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import bot, { log } from './bot';
import { stringify } from 'querystring';
import { Chat } from './types/chat';
import { QueueData } from './queue';
import { escape } from 'html-escaper';

export const commandExtractor = (text: string) => {
  let parts = /^\/([^@\s]+)@?(?:(\S+)|)\s?([\s\S]+)?$/i.exec(text.trim());
  return {
    text: text,
    command: parts ? parts[1] : null,
    bot: parts ? parts[2] : null,
    args: parts ? parts[3] : null
  };
};

export const hhmmss = (duration: string): string => {
  let sec = parseInt(duration, 10);
  let hms = new Date(1000 * sec).toISOString().substr(11, 8).split(':');
  let str = ``;
  hms[0] !== '00' ? (str += `${parseInt(hms[0], 10)}h `) : (str += ``);
  hms[1] !== '00' ? (str += `${parseInt(hms[1], 10)}m `) : (str += ``);
  hms[2] !== '00' ? (str += `${parseInt(hms[2], 10)}s`) : (str += ``);
  return str;
};

export const sendPlayingMessage = async (chat: Chat, data: QueueData) => {
  let text =
    `Playing <a href="${data.link}">${data.title}</a>\n` +
    `<b>&#10143;</b> Duration : ${hhmmss(data.duration)}\n` +
    `<b>&#10143;</b> Requested by <a href="tg://user?id=${
      data.requestedBy.id
    }">${escape(data.requestedBy.first_name)}</a>`;
  try {
    await bot.api.sendPhoto(
      chat.id,
      "https://telegra.ph/file/4a058c58b9e783da5d184.jpg",
      {
        caption: text,
        parse_mode: 'HTML'
      }
    );
    console.log(`[LyciaMusicBot][${chat.name}] Playing - ${data.title}`);
  } catch (err) {
    await bot.api.sendMessage(chat.id, text, { parse_mode: 'HTML' });
    await log(escape(String(err)));
  }
};

export const sendFailedToStreamMessage = async (chat: number, error: Error) => {
  bot.api.sendMessage(
    chat,
    'Failed to stream the song\n`' + error.message + '`',
    { parse_mode: 'MarkdownV2' }
  );
};

export const getMessageLink = (chat: number, message_id: number) => {
  let chat_id = chat.toString();
  return `https://t.me/c/${chat_id.slice(
    chat_id.startsWith('-100') ? 4 : 1
  )}/${message_id}`;
};

export const getDownloadLink = async (id: string) =>
  `https://api.telegram.org/file/bot${bot.token}/${
    (await bot.api.getFile(id)).file_path
  }`;
