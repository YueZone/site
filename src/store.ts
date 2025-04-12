import { atom } from "nanostores";
import type { HeaderNavItem } from "./_types/HeaderNavItem";

// 仅限服务端修改！
export const headerNavItems = atom<HeaderNavItem[]>([
    {title: "INDEX", subtitle: "首页", href: "/#index"},
    {title: "INFORMATION", subtitle: "情报", href: "/#more"},
    {title: "MORE", subtitle: "更多内容", href: "/#more"},
])

export const showFooter = atom(false);

export const showHeaderNavMenu = atom(false);
