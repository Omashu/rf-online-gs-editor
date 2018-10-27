import Struct from '~/classes/Struct';

export default new Struct().fromSchema1([
  { child: { type: Number, name: 'nIndex', len: 32 } },
  { child: { type: String, name: 'strCode', len: 64 } },
  { child: { type: String, name: 'strName', len: 64 } },
  { child: { type: Number, name: 'nRace', len: 32 } },
  { child: { type: Boolean, name: 'bWarType', len: 32 } },
  { child: { type: Number, name: 'fTarDecType', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fLevel', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fExt', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fAttFcStd', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fMinAFSelProb', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fMaxAFSelProb', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fAttSklUnit', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fDefSklUnit', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fWeakPart', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fStdDefFc', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fFireTol', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fWaterTol', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fSoilTol', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fWindTol', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fAttTechID1', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fAttTech1UseProb', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fAttTechID2', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fAttTech2UseProb', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fAttTechID3', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fAttTech3UseProb', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fAttTechMinAFProb', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fAttTechMinAF', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fAttTechMaxAFProb', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fAttTechMaxAF', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fPSecTechID', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fMSecTechID', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fMaxHP', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fHPRecDelay', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fHPRecUnit', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fAttSpd', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fAttMoTime1', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fAttMoTime2', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fViewExt', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fAttExt', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fMRefExt', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fCopTime', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fMovSpd', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fWarMovSpd', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fScaleRate', len: 32, as: 'float' } },
  { child: { type: Boolean, name: 'bScaleChange', len: 32 } },
  { child: { type: Number, name: 'fWidth', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fWaitTime', len: 32, as: 'float' } },
  { child: { type: Number, name: 'nAsitReqRate', len: 32 } },
  { child: { type: Number, name: 'nAsitAptRate', len: 32 } },
  { child: { type: String, name: 'strChildMon', len: 64 } },
  { child: { type: Number, name: 'nChildMonNum', len: 32 } },
  { child: { type: Number, name: 'fEmoType', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fDamHPStd', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fEmoImpStdTime', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fGoodToOrdHPPer', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fOrdToBadHPPer', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fBadToWorseHPPer', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fEspTFProb', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fTypeCompTerms', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fPSecTechChat', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fPAttTechChat', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fEmo0Chat', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fEmo0ChatProb', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fEmo1Chat', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fEmo1ChatProb', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fEmo2Chat', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fEmo2ChatProb', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fEmo3Chat', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fEmo3ChatProb', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fEmo4Chat', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fEmo4ChatProb', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fAsitReqSteEspChat', len: 32, as: 'float' } },
  {
    child: {
      type: Number,
      name: 'fAsitReqSteEspChatProb',
      len: 32,
      as: 'float',
    },
  },
  {
    child: { type: Number, name: 'fAsitReqSteHelpChat', len: 32, as: 'float' },
  },
  {
    child: {
      type: Number,
      name: 'fAsitReqSteHelpChatProb',
      len: 32,
      as: 'float',
    },
  },
  { child: { type: Number, name: 'fAsitReqSteCopChat', len: 32, as: 'float' } },
  {
    child: {
      type: Number,
      name: 'fAsitReqSteCopChatProb',
      len: 32,
      as: 'float',
    },
  },
]);
