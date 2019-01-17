/* eslint-disable no-undef */
import C from '../src/index.js';

describe('des', () => {
  it('encrypt 1', () => {
    expect(C.DES.encrypt(C.enc.Hex.parse('0000000000000000'), C.enc.Hex.parse('8000000000000000'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).ciphertext.toString())
      .toBe('95a8d72813daa94d');
  });
});