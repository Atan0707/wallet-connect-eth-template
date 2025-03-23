"use client";

import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { useEffect, useState } from "react";
import { scrollSepolia } from "@wagmi/chains";
import { WALLETCONNECT_PROJECT_ID } from "./config";

// 1. Get projectId at https://cloud.reown.com
const projectId = WALLETCONNECT_PROJECT_ID;

// 2. Create a metadata object
const metadata = {
  name: "Blocknogotchi",
  description: "Blocknogotchi",
  url: "https://blocknogotchi.fun/", // origin must match your domain & subdomain
  icons: ["https://blocknogotchi.fun/favicon.ico"], // Updated to use your favicon
};

// 3. Create the AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  metadata,
  networks: [scrollSepolia],
  projectId,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    email: true,
    socials: ["google", "x", "github", "apple", "facebook", "farcaster"],
  },
});

// Monitor all custom events for debugging
if (typeof window !== "undefined") {
  const events = [
    "appkit:connected",
    "appkit:disconnected",
    "appkit:chain-changed",
    "appkit:account-changed",
  ];

  events.forEach((eventName) => {
    document.addEventListener(eventName, (e) => {
      console.log(`AppKit Event: ${eventName}`, e);
    });
  });
}

export const AppKit = (props: { children: React.ReactNode }) => {
  const [initialized, setInitialized] = useState(false);

  // Make sure AppKit is only initialized on the client side
  useEffect(() => {
    setInitialized(true);

    // Initialize additional logging
    console.log("AppKit component initialized and ready for connections");
  }, []);

  if (!initialized) {
    return null; // Return nothing during SSR to avoid hydration issues
  }

  return (
    <>
      {props.children}
      {/* Custom elements for AppKit can be added here */}
      {/* <appkit-button/> Reown AppKit standard button */}
    </>
  );
};