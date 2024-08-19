import Link from "next/link";

type NavItemProps = {
  text: string;
  href: string;
};

export function NavItem({ text, href }: NavItemProps) {
  return (
    <Link href={href} className="flex-none">
      <div className="group relative overflow-hidden *:transition-all *:duration-500 *:ease-in-out">
        <div className="transition-all group-hover:-translate-y-full group-hover:opacity-0">
          {text}
        </div>
        <div
          aria-hidden="true"
          className="absolute top-full opacity-0 group-hover:-translate-y-full group-hover:opacity-100"
        >
          {text}
        </div>
      </div>
    </Link>
  );
}
