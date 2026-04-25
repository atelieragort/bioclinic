"use client";

import { useState } from "react";

export default function GrantAccess() {
  const [status, setStatus] = useState("idle");

  return (
    <div>
      <button onClick={() => setStatus("success")}>
        Grant Access
      </button>
      {status === "success" && <p>Access granted ✅</p>}
    </div>
  );
}