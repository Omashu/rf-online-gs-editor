import { forEach } from 'lodash';
import * as ITEM_TYPES from './item_types';

export const PREFIXES = {
  [ITEM_TYPES.FACE]: 'if',
  [ITEM_TYPES.UPPER]: 'iu',
  [ITEM_TYPES.LOWER]: 'il',
  [ITEM_TYPES.GAUNTLET]: 'ig',
  [ITEM_TYPES.SHOE]: 'is',
  [ITEM_TYPES.HELMET]: 'ih',
  [ITEM_TYPES.WEAPON]: 'iw',
  [ITEM_TYPES.SHIELD]: 'id',
  [ITEM_TYPES.CLOAK]: 'ik',
  [ITEM_TYPES.RING]: 'ii',
  [ITEM_TYPES.AMULET]: 'ia',
  [ITEM_TYPES.BULLET]: 'ib',
  [ITEM_TYPES.MAKETOOL]: 'im',
  [ITEM_TYPES.POTION]: 'ip',
  [ITEM_TYPES.BAG]: 'ie',
  [ITEM_TYPES.BATTERY]: 'it',
  [ITEM_TYPES.ORE]: 'io',
  [ITEM_TYPES.RESOURCE]: 'ir',
  [ITEM_TYPES.FORCE]: 'ic',
  [ITEM_TYPES.UNITKEY]: 'in',
  [ITEM_TYPES.BOOTY]: 'iy',
  [ITEM_TYPES.MAP]: 'iz',
  [ITEM_TYPES.TOWN]: 'iq',
  [ITEM_TYPES.DUNGEONKEY]: 'ix',
  [ITEM_TYPES.ANIMUS]: 'ij',
  [ITEM_TYPES.TOWER]: 'gt',
  [ITEM_TYPES.TRAP]: 'tr',
  [ITEM_TYPES.SIEGEKIT]: 'sk',
  [ITEM_TYPES.TICKET]: 'ti',
  [ITEM_TYPES.QUEST]: 'ev',
  [ITEM_TYPES.RECOVERY]: 're',
  [ITEM_TYPES.BOX]: 'bx',
  [ITEM_TYPES.FIRECRACKER]: 'fi',
  [ITEM_TYPES.RADAR]: 'rd',
  [ITEM_TYPES.PAGER]: 'lk',
  [ITEM_TYPES.COUPON]: 'cu',
  [ITEM_TYPES.CASHMINING]: 'un',
  [ITEM_TYPES.MAUHEAD]: 'un',
  [ITEM_TYPES.MAUUPPER]: 'un',
  [ITEM_TYPES.MAULOWER]: 'un',
  [ITEM_TYPES.MAUARM]: 'un',
  [ITEM_TYPES.MAUSHOULDER]: 'un',
  [ITEM_TYPES.MAUBACK]: 'un',
  [ITEM_TYPES.MAUBULLET]: 'un',
};

export const FINITES = {
  [ITEM_TYPES.FACE]: 0,
  [ITEM_TYPES.UPPER]: 1,
  [ITEM_TYPES.LOWER]: 2,
  [ITEM_TYPES.GAUNTLET]: 3,
  [ITEM_TYPES.SHOE]: 4,
  [ITEM_TYPES.HELMET]: 5,
  [ITEM_TYPES.WEAPON]: 6,
  [ITEM_TYPES.SHIELD]: 7,
  [ITEM_TYPES.CLOAK]: 8,
  [ITEM_TYPES.RING]: 9,
  [ITEM_TYPES.AMULET]: 10,
  [ITEM_TYPES.BULLET]: 11,
  [ITEM_TYPES.MAKETOOL]: 12,
  [ITEM_TYPES.POTION]: 13,
  [ITEM_TYPES.BAG]: 14,
  [ITEM_TYPES.BATTERY]: 15,
  [ITEM_TYPES.ORE]: 16,
  [ITEM_TYPES.RESOURCE]: 17,
  [ITEM_TYPES.FORCE]: 18,
  [ITEM_TYPES.UNITKEY]: 19,
  [ITEM_TYPES.BOOTY]: 20,
  [ITEM_TYPES.MAP]: 21,
  [ITEM_TYPES.TOWN]: 22,
  [ITEM_TYPES.DUNGEONKEY]: 23,
  [ITEM_TYPES.ANIMUS]: 24,
  [ITEM_TYPES.TOWER]: 25,
  [ITEM_TYPES.TRAP]: 26,
  [ITEM_TYPES.SIEGEKIT]: 27,
  [ITEM_TYPES.TICKET]: 28,
  [ITEM_TYPES.QUEST]: 29,
  [ITEM_TYPES.RECOVERY]: 30,
  [ITEM_TYPES.BOX]: 31,
  [ITEM_TYPES.FIRECRACKER]: 32,
  [ITEM_TYPES.RADAR]: 34,
  [ITEM_TYPES.PAGER]: 35,
  [ITEM_TYPES.COUPON]: 36,
  [ITEM_TYPES.CASHMINING]: 33,
  [ITEM_TYPES.MAUHEAD]: 37,
  [ITEM_TYPES.MAUUPPER]: 38,
  [ITEM_TYPES.MAULOWER]: 39,
  [ITEM_TYPES.MAUARM]: 40,
  [ITEM_TYPES.MAUSHOULDER]: 41,
  [ITEM_TYPES.MAUBACK]: 42,
  [ITEM_TYPES.MAUBULLET]: 43,
};

export const CONV_DECIMALS = {
  [ITEM_TYPES.FACE]: 192,
  [ITEM_TYPES.UPPER]: 192,
  [ITEM_TYPES.LOWER]: 192,
  [ITEM_TYPES.GAUNTLET]: 192,
  [ITEM_TYPES.SHOE]: 192,
  [ITEM_TYPES.HELMET]: 192,
  [ITEM_TYPES.WEAPON]: 192,
  [ITEM_TYPES.SHIELD]: 192,
  [ITEM_TYPES.CLOAK]: 192,
  [ITEM_TYPES.RING]: 192,
  [ITEM_TYPES.AMULET]: 192,
  [ITEM_TYPES.BULLET]: 192,
  [ITEM_TYPES.MAKETOOL]: 192,
  [ITEM_TYPES.POTION]: 192,
  [ITEM_TYPES.BAG]: 192,
  [ITEM_TYPES.BATTERY]: 192,
  [ITEM_TYPES.ORE]: 192,
  [ITEM_TYPES.RESOURCE]: 192,
  [ITEM_TYPES.FORCE]: 192,
  [ITEM_TYPES.UNITKEY]: 192,
  [ITEM_TYPES.BOOTY]: 192,
  [ITEM_TYPES.MAP]: 192,
  [ITEM_TYPES.TOWN]: 192,
  [ITEM_TYPES.DUNGEONKEY]: 192,
  [ITEM_TYPES.ANIMUS]: 192,
  [ITEM_TYPES.TOWER]: 160,
  [ITEM_TYPES.TRAP]: 112,
  [ITEM_TYPES.SIEGEKIT]: 96,
  [ITEM_TYPES.TICKET]: 112,
  [ITEM_TYPES.QUEST]: 128,
  [ITEM_TYPES.RECOVERY]: 80,
  [ITEM_TYPES.BOX]: 80,
  [ITEM_TYPES.FIRECRACKER]: 144,
  [ITEM_TYPES.RADAR]: 80,
  [ITEM_TYPES.PAGER]: 240,
  [ITEM_TYPES.COUPON]: 96,
  [ITEM_TYPES.CASHMINING]: 128,
  [ITEM_TYPES.MAUHEAD]: 128,
  [ITEM_TYPES.MAUUPPER]: 128,
  [ITEM_TYPES.MAULOWER]: 128,
  [ITEM_TYPES.MAUARM]: 128,
  [ITEM_TYPES.MAUSHOULDER]: 128,
  [ITEM_TYPES.MAUBACK]: 128,
  [ITEM_TYPES.MAUBULLET]: 128,
};

export const getFiniteByTypeName = type => FINITES[type];
export const getPrefixByTypeName = type => PREFIXES[type];
export const getTypeNamesByPrefix = prefix => {
  const types = [];
  forEach(PREFIXES, (val, type) => (val === prefix ? types.push(type) : null));
  return types;
};
export const getConvDecimalByTypeName = type => CONV_DECIMALS[type];
