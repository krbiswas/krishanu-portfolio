import { ElementType, ReactNode } from "react";

type GlassSurfaceProps = {
  children: ReactNode;
  className?: string;
  strong?: boolean;
  as?: ElementType;
};

export function GlassSurface({
  children,
  className = "",
  strong = false,
  as: Tag = "div",
}: GlassSurfaceProps) {
  return (
    <Tag className={`glass ${strong ? "glass-strong" : ""} rounded-[var(--radius-lg)] ${className}`}>
      <div className="relative z-[2]">{children}</div>
    </Tag>
  );
}
