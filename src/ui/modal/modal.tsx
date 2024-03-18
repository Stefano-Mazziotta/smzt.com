"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  return createPortal(
    <section
      className="fixed inset-0 flex h-full w-full items-center justify-center overflow-y-auto bg-black bg-opacity-95 p-2"
      id="overlay"
    >
      {children}
    </section>,
    document.getElementById("modal-root")!,
  );
}
