"use client";

import Link from "next/link";
import { MessageSquare } from "lucide-react";

export default function StickyConsultCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <Link
        href="/contact"
        className="flex items-center gap-2 px-5 py-3 bg-[#3B82F6] text-white text-sm font-semibold rounded-full shadow-lg shadow-blue-500/30 hover:bg-[#2563EB] transition-all hover:scale-105 active:scale-95"
      >
        <MessageSquare size={18} />
        Free Consultation
      </Link>
    </div>
  );
}
