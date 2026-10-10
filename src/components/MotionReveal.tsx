"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export function MotionReveal({
  children,
  delayMs = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delayMs?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Covers: no IntersectionObserver support, and any case where the page
    // loaded with this element already on screen or already scrolled past
    // (anchor-link navigation, restored scroll position on back/forward,
    // a hash jump) — the animation shouldn't be the thing standing between
    // a visitor and real content, so skip it and show immediately.
    const rect = node.getBoundingClientRect();
    const alreadyPastEntryPoint = typeof window === "undefined" || rect.top < window.innerHeight * 1.1;
    if (typeof IntersectionObserver === "undefined" || alreadyPastEntryPoint) {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
