import Link from "next/link";
import LogoWhite2 from "../../../public/assets/imgs/logo/logo-main.png";
import LogoBlack from "../../../public/assets/imgs/logo/logo-black.png";
import Image from "next/image";

export default function LogoItem() {
  return (
    <>
      <div className="header__logo-2">
        <Link href={"/home"} className="logo-dark">
          <Image
            priority
            id="logo_main"
            width={"100%"}
            height={150}
            src={LogoWhite2}
            style={{ position: "absolute", top: "-30px"}}
            alt="Site Logo"
          />
        </Link>
        <Link href={"/home"} className="logo-light">
          <Image
            priority
            id="logo_main"
            width={"100%"}
            height={150}
            src={LogoWhite2}
            style={{ position: "absolute", top: "-30px"}}
            alt="Site Logo"
          />
        </Link>
      </div>
    </>
  );
}
