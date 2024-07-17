import { client, connectClient } from './xrplClient';

export const mintNFT = async (wallet, uri) => {
  await connectClient();

  const transaction = {
    TransactionType: 'NFTokenMint',
    Account: wallet.address,
    URI: xrpl.convertStringToHex(uri), // Convert URI to hex
    Flags: 8, // Indicates the token is transferable
    NFTokenTaxon: 0, // A value to identify the type of token
  };

  const prepared = await client.autofill(transaction);
  const signed = wallet.sign(prepared);
  const result = await client.submitAndWait(signed.tx_blob);

  if (result.result.meta.TransactionResult === 'tesSUCCESS') {
    return result.result;
  } else {
    throw new Error(`Transaction failed: ${result.result.meta.TransactionResult}`);
  }
};
