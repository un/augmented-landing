import Link from "next/link";
import { Button } from "./ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";

export function StarGithub() {
  return (
    <Button asChild>
      <Link href="https://github.com/un/augmented" target="_blank">
        <div className="flex items-center gap-4">
          <SiGithub className="w-4 h-4" /> Star us on Github
        </div>
      </Link>
    </Button>
  );
}
