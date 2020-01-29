import BigNumber from '@turtlenetwork/bignumber';

BigNumber.config.set({
    ROUNDING_MODE: BigNumber.ROUND_MODE.ROUND_DOWN,
});

export { BigNumber };
