import { Wallet } from 'xrpl';

export const generateWallet = () => {
  return Wallet.generate();
};
