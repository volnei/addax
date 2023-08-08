import Image from "next/image";
import React from "react";

export default function Header() {
    return (<header className="p-2 flex gap-4 justify-between">
        <Image src="logo.svg" width={80} height={60}  alt="ADDA - Fisioterapia" />
        <div>

        </div>
    </header>)
}
