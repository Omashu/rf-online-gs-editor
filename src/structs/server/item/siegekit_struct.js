import Struct from '../../../classes/Struct';

export default new Struct().fromSchema1([
  { child: { type: Number, name: 'nIndex', len: 32 } },
  { child: { type: String, name: 'strCode', len: 64 } },
  { child: { type: Boolean, name: 'bExist', len: 32 } },
  { child: { type: String, name: 'strModel', len: 64 } },
  { child: { type: Number, name: 'nIconIDX', len: 32 } },
  { child: { type: String, name: 'strName', len: 64 } },
  { child: { type: Number, name: 'nKindClt', len: 32 } },
  { child: { type: Number, name: 'nItemGrade', len: 32 } },
  { child: { type: Number, name: 'nUsableType', len: 32 } },
  { child: { type: Number, name: 'nSubType', len: 32 } },
  { child: { type: String, name: 'strCivil', len: 64 } },
  { child: { type: Number, name: 'nLevelLim', len: 32 } },
  { child: { type: Number, name: 'nUpLevelLim', len: 32 } },
  { child: { type: Number, name: 'nExpertID1', len: 32 } },
  { child: { type: Number, name: 'nExpertLim1', len: 32 } },
  { child: { type: Number, name: 'nExpertID2', len: 32 } },
  { child: { type: Number, name: 'nExpertLim2', len: 32 } },
  { child: { type: Number, name: 'nMoney', len: 32 } },
  { child: { type: Number, name: 'nStdPrice', len: 32 } },
  { child: { type: Number, name: 'nStdPoint', len: 32 } },
  { child: { type: Number, name: 'nGoldPoint', len: 32 } },
  { child: { type: Number, name: 'nKillPoint', len: 32 } },
  { child: { type: Number, name: 'nProcPoint', len: 32 } },
  { child: { type: Number, name: 'nStoragePrice', len: 32 } },
  { child: { type: Boolean, name: 'bAbr', len: 32 } },
  { child: { type: Number, name: 'nDurUnit', len: 32 } },
  { child: { type: Boolean, name: 'bRepair', len: 32 } },
  { child: { type: Number, name: 'nRepPrice', len: 32 } },
  { child: { type: Number, name: 'nEffState', len: 32 } },
  { child: { type: Number, name: 'fMinDst', len: 32, as: 'float' } },
  { child: { type: Number, name: 'fMaxDst', len: 32, as: 'float' } },
  { child: { type: Number, name: 'nGACorSpd', len: 32 } },
  { child: { type: Number, name: 'fGAAF', len: 32, as: 'float' } },
  { child: { type: Number, name: 'nEffCode__1', len: 32 } },
  { child: { type: Number, name: 'nEffUnit__1', len: 32, as: 'float' } },
  { child: { type: Number, name: 'nEffCode__2', len: 32 } },
  { child: { type: Number, name: 'nEffUnit__2', len: 32, as: 'float' } },
  { child: { type: Number, name: 'nEffCode__3', len: 32 } },
  { child: { type: Number, name: 'nEffUnit__3', len: 32, as: 'float' } },
  { child: { type: Number, name: 'nEffCode__4', len: 32 } },
  { child: { type: Number, name: 'nEffUnit__4', len: 32, as: 'float' } },
  { child: { type: Number, name: 'nDuration', len: 32 } },
  { child: { type: Boolean, name: 'bSell', len: 32 } },
  { child: { type: Boolean, name: 'bExchange', len: 32 } },
  { child: { type: Boolean, name: 'bGround', len: 32 } },
  { child: { type: Boolean, name: 'bStoragePossible', len: 32 } },
  { child: { type: Boolean, name: 'bUseableNormalAcc', len: 32 } },
  { child: { type: Number, name: 'nUpgrade', len: 32 } },
  { child: { type: String, name: 'strTooltipIndex', len: 64 } },
  { child: { type: Number, name: 'nAttEffType', len: 32 } },
  { child: { type: Boolean, name: 'bIsTime', len: 32 } },
]);