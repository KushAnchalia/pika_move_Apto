// backend/aptos_client.js
import { AptosClient, AptosAccount, HexString } from "aptos";
import dotenv from "dotenv";

dotenv.config();

const NODE_URL = process.env.APTOS_NODE || "https://fullnode.testnet.aptoslabs.com/v1";
export const client = new AptosClient(NODE_URL);

const privateKeyHex = process.env.APTOS_PRIVATE_KEY?.trim();
if (!privateKeyHex) {
  throw new Error("Please set APTOS_PRIVATE_KEY in your .env file");
}

export const account = new AptosAccount(HexString.ensure(privateKeyHex).toUint8Array());

export async function publishProof(encryptedHash, keyHash, aiHash) {
  const payload = {
    type: "entry_function_payload",
    function: `${process.env.APTOS_ACCOUNT_ADDRESS}::encrypted_art::upload_proof`,
    type_arguments: [],
    arguments: [encryptedHash, keyHash, aiHash],
  };

  const txnRequest = await client.generateTransaction(account.address(), payload);
  const signedTxn = await client.signTransaction(account, txnRequest);
  const res = await client.submitTransaction(signedTxn);
  await client.waitForTransaction(res.hash);

  return res.hash;
}
