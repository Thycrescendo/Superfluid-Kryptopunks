# Craddle

## Requirements

- [Node](https://nodejs.org/en/) >=14.0.0
- [Yarn](https://yarnpkg.com/) ^1.22.0

## Setup

Clone the repo:

```sh
$ git clone https://github.com/Thycrescendo/Craddle-meta-nft.git
```

## Development

Install dependencies:

```sh
$ yarn
```

You'll need RPC endpoints for all networks you plan to use during local development.  You can generate private RPC endpoints with [Infura](https://infura.io/) or [Alchemy](https://www.alchemy.com/), or search for public RPC endpoints to use.

Add the following environment variables to a `.env.local` file:

```
REACT_APP_ETHEREUM_RPC_URL=???
REACT_APP_POLYGON_RPC_URL=???
REACT_APP_FANTOM_RPC_URL=???
REACT_APP_ARBITRUM_RPC_URL=???
REACT_APP_ROPSTEN_RPC_URL=???
REACT_APP_RINKEBY_RPC_URL=???
REACT_APP_GOERLI_RPC_URL=???
REACT_APP_MUMBAI_RPC_URL=???
```

Run the app in development mode:

```sh
$ yarn start
```

Generate a browser-ready build artifact:

```sh
$ yarn build
```

Preview an app build:

```sh
$ yarn serve
```
