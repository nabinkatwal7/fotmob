import { TopLeague } from "@/data/TopLeagues";
import Image from "next/image";
import React from "react";

const TopLeagues = () => {
  return (
    <div className="bg-[#1A1A1A] p-4 rounded-lg flex flex-col gap-4">
      <p>Top Leagues</p>
      <div className="flex flex-col gap-2">
        {TopLeague.map((league) => (
          <div key={league.id} className="flex flex-row items-center gap-2">
            <Image
              src={league.icon}
              alt={league.name}
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
            <p>{league.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopLeagues;
