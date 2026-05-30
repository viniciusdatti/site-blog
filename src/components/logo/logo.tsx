import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      title="Página inicial"
      className="inline-flex shrink-0 items-center gap-2"
    >
      <Image
        src="/logo.svg"
        alt=""
        width={23}
        height={24}
        unoptimized
        priority
        className="block size-6 shrink-0"
      />
      <span className="font-sans text-heading-xs text-white">Site.Set</span>
    </Link>
  );
};
