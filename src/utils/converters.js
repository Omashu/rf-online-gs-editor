import { isFinite, isString } from 'lodash';

import {
  getTypeNamesByPrefix,
  getConvDecimalByTypeName,
} from '~/structs/item_types_utils';

import { getNumberOfLetter } from './string';

export const DEFENCE_FACING_FALLBACK_VALUE = 1;

export const getEffect25PresentValue = effectValue =>
  parseFloat((effectValue / 1000).toString().replace(/[^\d,.]/g, ''));

export const getDefenceFacingPresentValue = ({ defFacing, defGap = 0.5 }) => {
  const f =
    isFinite(defFacing) && defFacing > 0
      ? defFacing
      : DEFENCE_FACING_FALLBACK_VALUE;
  return parseInt((100 / f) ** (10 / 13) + defGap, 10);
};

export const getDefenctFacingUnpresentValue = ({
  presentValue,
  defGap = 0.5,
}) => {
  const i = isFinite(presentValue) && presentValue >= 0 ? presentValue : 1;
  return (
    parseFloat(100 / (i - defGap) ** (13 / 10)) || DEFENCE_FACING_FALLBACK_VALUE
  );
};

// PR is welcome
export const getClientCode = (code = '') => {
  if (!isString(code)) {
    throw new Error(`Code must be a string not ${typeof code}`);
  }

  const formatted = code.toLowerCase();
  const crumbs = formatted.split('');
  const prefix = crumbs.slice(0, 2).join('');
  const typeNames = getTypeNamesByPrefix(prefix);

  if (typeNames.length <= 0) {
    throw new Error(`Unknown type by prefix ${prefix}`);
  }

  // because the parameters of the group are the same
  const typeName = typeNames[0];
  const convDecimal = getConvDecimalByTypeName(typeName);

  if (convDecimal === undefined) {
    throw new Error(`Unknown convert decimal by type name ${typeName}`);
  }

  const convCrumbs = crumbs.slice(2, crumbs.length);
  const result = [convDecimal];

  let zeroFrom;

  if (!/^\d$/.test(convCrumbs[0])) {
    result[0] += getNumberOfLetter(convCrumbs[0]);
  } else if (!/^\d$/.test(convCrumbs[1])) {
    result[0] += getNumberOfLetter(convCrumbs[1]);
  } else if (!/^\d$/.test(convCrumbs[2])) {
    result[0] += getNumberOfLetter(convCrumbs[2]);
  } else {
    result[0] += parseInt(convCrumbs[3] + convCrumbs[4], 16);
    zeroFrom = 3;
  }

  let nextCrumbs = [].concat(convCrumbs);

  if (zeroFrom !== undefined) {
    nextCrumbs = nextCrumbs.map((value, index) => {
      if (index >= zeroFrom) {
        return '0';
      }
      return value;
    });
  }

  if (!/^\d$/.test(nextCrumbs[1])) {
    result.push(getNumberOfLetter(nextCrumbs[1]));
  }

  if (!/^\d$/.test(nextCrumbs[2])) {
    result.push(getNumberOfLetter(nextCrumbs[2]));
  }

  result.push(nextCrumbs[3] + nextCrumbs[4]);

  const results = result
    .map(decimal => {
      const res = decimal.toString(16);
      const prepend = res.length === 1 ? '0' : '';
      return [prepend, res].join('');
    })
    .join('');

  return Array.from(Array(8))
    .map((_, index) => {
      if (results[index] !== undefined) {
        return results[index];
      }
      return '0';
    })
    .join('')
    .split(/(.{2})/g)
    .reverse()
    .join('')
    .toUpperCase();
};

export const getClientCodeAvoidError = code => {
  try {
    return getClientCode(code);
  } catch (err) {
    return null;
  }
};

export const convNPCodeServerToClient = code => {
  const int = parseInt(code, 16);
  const buf = Buffer.from([0, 0, 0, 0]);
  buf.writeInt32LE(int);
  return buf.toString('hex').toUpperCase();
};

export const convNPCodeClientToServer = code => {
  const fb = '00000';
  if (!code || !isString(code)) {
    return fb;
  }

  try {
    const buf = Buffer.from(code, 'hex');
    const int = buf.readInt32LE(0);
    const str = int.toString(16);
    return (str.length === 4 ? `0${str}` : str).toUpperCase();
  } catch (err) {
    return fb;
  }
};

export const convStringModelToHex1 = code => convNPCodeServerToClient(code);

export const convStringModelToHex2 = code => {
  const fill = str =>
    Array.from(Array(8))
      .map((_, index) => (str[index] !== undefined ? str[index] : '0'))
      .join('');

  const code1 = fill(`0${code}`);

  return convNPCodeServerToClient(code1);
};

export const convItemModelClientToServer = model => {
  const buf = Buffer.from(model, 'hex');
  const str = buf
    .slice(0, 3)
    .reverse()
    .toString('hex')
    .toUpperCase();
  return str;
};

export const convItemModelServerToClient = model => {
  const int = parseInt(model, 16);
  const buf = Buffer.from([0, 0, 0, 0]);
  buf.writeInt32LE(int);
  return buf.toString('hex').toUpperCase();
};
