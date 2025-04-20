import { useState, useEffect } from "react";

export default function useIsMobile() {
  const ua = navigator.userAgent.toLowerCase();
  const agents = [
    "iphone",
    "ipad",
    "ipod",
    "android",
    "linux",
    "windows phone",
  ];
  const [equipmentType, setEquipmentType] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    setEquipmentType(
      agents.some((item) => ua.includes(item)) ? "Mobile" : "PC"
    );
  }, []);

  return equipmentType;
}
