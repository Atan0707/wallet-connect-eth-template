# Wallet Connect Template

A modern Next.js 15 template for building Web3 applications with wallet connection capabilities.

## Features

- **Next.js 15** with App Router and TurboPack
- **Web3 Integration** with ethers.js and Reown AppKit
- **Modern UI** with TailwindCSS and Framer Motion
- **TypeScript** for type safety

## Getting Started

First, install the dependencies:

```bash
yarn 
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Ethereum Development (Using Ethers)

You will need to import these first:

```bash
import { ethers, Eip1193Provider } from "ethers";
import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";
```

To interact with contract:
```bash

#  // Get current user's wallet address
const { address: currentUserAddress } = useAppKitAccount();
const { walletProvider } = useAppKitProvider("eip155");

const provider = new ethers.BrowserProvider(walletProvider as Eip1193Provider);
const signer = await provider.getSigner();
const contract = new ethers.Contract(Contract_Address, Contract_ABI, signer);
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
