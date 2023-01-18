export interface NavItem {
  title: string
  href: string
}

export type NavItems = {
  mainNav: NavItem[]
  footerNav: NavItem[]
}
