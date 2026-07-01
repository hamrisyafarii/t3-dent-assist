import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { SidebarTrigger } from "~/components/ui/sidebar";

const Header = () => {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b py-8 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" />
        <Link href="/">
          <h1 className="text-base font-medium">Dent Assist</h1>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Link href="/feedback">
            <Button variant="outline" size="sm" className="cursor-pointer">
              Saran
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="default" size="sm" className="cursor-pointer">
              Tentang Kami
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
