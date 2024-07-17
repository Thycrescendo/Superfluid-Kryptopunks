import { Client } from 'xrpl';

const client = new Client('wss://s.altnet.rippletest.net:51233'); // testnet for development

const connectClient = async () => {
  if (!client.isConnected()) {
    await client.connect();
  }
};

export { client, connectClient };
