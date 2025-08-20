"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  let [name, setName] = useState("JP");

  return (
    <div className="">
      Hoi {name}!
      <button
        onClick={() => setName(name + " Frank")}
        className="border-1 p-2 m-3 border-amber-600 bg-slate-300 hover:bg-slate-900 hover:text-white hover:cursor-pointer"
      >
        Verander naam
      </button>
    </div>
  );
}
