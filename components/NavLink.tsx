import Link from "next/link"
import { FC } from "react";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    download?: boolean;
    toggleNav: () => void;
}

const NavLink: FC<NavLinkProps> = (props) => {
    return (
        <li onClick={props.toggleNav} className={"px-4 py-1 " + (props.download ? 'rounded-xl bg-primary-light' : 'opacity-75')}>
            {
                props.download ?
                    <a href={props.href} download>{props.children}</a> :
                    <Link href={props.href}>{props.children}</Link>
            }
        </li>
    );
}

export default NavLink;