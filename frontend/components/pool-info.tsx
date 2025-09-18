"use client";

import { useEffect, useState } from "react";
import { Pool } from "@/lib/amm";
import { fetchCallReadOnlyFunction, bufferCV, STACKS_TESTNET } from "@stacks/transactions";

export interface PoolInfoProps {
  pool: Pool;
}

export function PoolInfo({ pool }: PoolInfoProps) {
  const [poolInfo, setPoolInfo] = useState<{
    balance0: number;
    balance1: number;
    liquidity: number;
    fee: number;
    price: number;
  } | null>(null);

  useEffect(() => {
    async function fetchPoolInfo() {
      try {
        const result = await fetchCallReadOnlyFunction({
          contractAddress: "ST3P49R8XXQWG69S66MZASYPTTGNDKK0WW32RRJDN",
          contractName: "amm",
          functionName: "get-pool-info",
          functionArgs: [bufferCV(Buffer.from(pool.id, "hex"))],
          senderAddress: "ST3P49R8XXQWG69S66MZASYPTTGNDKK0WW32RRJDN",
          network: STACKS_TESTNET,
        });
        if (result.type === "ok" && result.value.type === "tuple") {
          const value = result.value.value;
          setPoolInfo({
            balance0: Number(value["balance-0"].value.toString()),
            balance1: Number(value["balance-1"].value.toString()),
            liquidity: Number(value.liquidity.value.toString()),
            fee: Number(value.fee.value.toString()),
            price: Number(value.price.value.toString()) / 1_000_000,
          });
        }
      } catch (error) {
        console.error("Failed to fetch pool info", error);
      }
    }
    fetchPoolInfo();
  }, [pool]);

  if (!poolInfo) {
    return <div>Loading pool info...</div>;
  }

  return (
    <div className="border p-4 rounded-md max-w-xl w-full">
      <h2 className="text-lg font-bold mb-2">Pool Info</h2>
      <p>Balance Token 0: {poolInfo.balance0}</p>
      <p>Balance Token 1: {poolInfo.balance1}</p>
      <p>Liquidity: {poolInfo.liquidity}</p>
      <p>Fee: {poolInfo.fee / 100}%</p>
      <p>Price (Token0 / Token1): {poolInfo.price.toFixed(6)}</p>
    </div>
  );
}
