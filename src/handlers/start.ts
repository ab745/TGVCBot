/**
 * Copyright 2021  Arnab Paryali and the Contributors - https://github.com/ArnabXD/TGVCBot/graphs/contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { Composer, InlineKeyboard } from 'grammy';
import { escape } from 'html-escaper';

const composer = new Composer();

export default composer;

composer.command('start', ctx => {
  let text =
    `Hi <a href="tg://user?id=${ctx.from!.id}">${escape(
      ctx.from!.first_name + ' ' + ctx.from!.last_name,
    )}</a>\n` +
    `I'm <b>Lycia</b>, <i>The Music Bot</i>.\n` +  
    `I can Play Songs in Group Voice Chats.\n` +
    `\n` +  
    `Maintained by <a href="https://t.me/NeuroticAssociation">Neurotic Association</a>`;
  return ctx.reply(text, {
    reply_markup: new InlineKeyboard().url(
      'Add me',
      'http://t.me/LyciaMusicBot?startgroup=true',
    ),
    disable_web_page_preview: true,
    parse_mode: 'HTML',
  });
});
