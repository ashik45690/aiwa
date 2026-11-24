import { useEffect, useState } from "react";
import { shop } from "../data/shop";

function minutesInShopTime(): number {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: shop.timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  return hour * 60 + minute;
}

function isOpenNow(): boolean {
  const now = minutesInShopTime();
  return now >= shop.opensAt && now < shop.closesAt;
}

/** Live open/closed state based on the shop's local (IST) time. */
export function useOpenStatus(): boolean {
  const [open, setOpen] = useState(isOpenNow);

  useEffect(() => {
    const id = window.setInterval(() => setOpen(isOpenNow()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return open;
}
