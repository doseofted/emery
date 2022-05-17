import { UnaryPredicate } from '../types';
import { checkAll, negate } from './utils';

// Core
// ------------------------------

export const isFinite: UnaryPredicate<number> = Number.isFinite;
export const isInfinite = negate(isFinite);

export const isInteger: UnaryPredicate<number> = Number.isInteger;
export const isFloat = negate(isInteger);

export const isNegativeZero = (value: number) => 1 / value === Number.NEGATIVE_INFINITY;
export const isNegative = (value: number) => value < 0;
export const isPositive = (value: number) => value > 0;
export const isNonNegative = (value: number) => value >= 0;
export const isNonPositive = (value: number) => value <= 0;

// Convenience
// ------------------------------

export const isNegativeInteger = checkAll(isInteger, isNegative);
export const isPositiveInteger = checkAll(isInteger, isPositive);
export const isNonNegativeInteger = checkAll(isInteger, isNonNegative);
export const isNonPositiveInteger = checkAll(isInteger, isNonPositive);

export const isNegativeFloat = checkAll(isFloat, isNegative);
export const isPositiveFloat = checkAll(isFloat, isPositive);
export const isNonNegativeFloat = checkAll(isFloat, isNonNegative);
export const isNonPositiveFloat = checkAll(isFloat, isNonPositive);
