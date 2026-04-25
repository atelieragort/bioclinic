"use client";

import { useState } from "react";

export default function MockWallet() {
  const [connected, setConnected] = useState(false);

  return (
    <div>
      <button onClick={() => setConnected(true)}>
        {connected ? "Connected" : "Connect Wallet"}
      </button>
    </div>
  );
}