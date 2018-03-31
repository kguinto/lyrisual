import React from 'react';

const pos = require('pos');
const posColorMap = require('./posColorMap');

const tagText = (text) => {
  const words = new pos.Lexer().lex(text);
  const tagger = new pos.Tagger();
  return tagger.tag(words);
};

const makeSpanArray = (taggedWords) => (
  taggedWords.map(([ word, pos ], index) => (
    <span key={index + word} style={{
      color: '#ffffff',
      backgroundColor: posColorMap[pos],
      fontWeight: 'bold',
      fontStyle: 'italic'
    }}>&nbsp;{ word }&nbsp;</span>
  ))
);

module.exports = { tagText, makeSpanArray };