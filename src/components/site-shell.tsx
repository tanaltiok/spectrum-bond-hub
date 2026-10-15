import { Link, useRouterState } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, Menu, ShoppingBag, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const links = [{ label: 'Home', to: '/' }, { label: 'Shop All', to: '/shop' }, { label: 'Bond', to: '/bond' }, { label: 'Contact', to: '/contact' }] as const;

export function Brand() {
  return <Link to="/" className="brand" aria-label="Spectrum Window Coverings home"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span className="brand-name">spectrum<span className="brand-subtitle">Window Coverings</span></span></Link>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const navigation = links.map((link) => <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className={`nav-link ${pathname === link.to ? 'active' : ''}`}>{link.label}</Link>);
  return <><header className="site-header"><Brand /><nav className="desktop-nav" aria-label="Main navigation">{navigation}<span className="header-actions"><Button variant="ghost" size="icon" asChild><Link to="/shop" aria-label="Browse the shop" title="Browse the shop"><ShoppingBag size={19} /></Link></Button></span></nav><Button variant="ghost" size="icon" className="hidden max-[600px]:inline-flex" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</Button></header>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{navigation}</nav>}</>;
}

export function SiteFooter() {
  return <footer className="site-footer"><Brand /><p>© {new Date().getFullYear()} Spectrum Window Coverings. Richmond, BC.</p><div className="footer-links"><Link to="/bond">Bond in Canada <ArrowUpRight className="inline size-3" /></Link><Link to="/contact">Get in touch</Link></div></footer>;
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="page-intro"><div className="eyebrow"><span className="eyebrow-line" />{eyebrow}</div><h1 className="page-title">{title}</h1><p>{description}</p></div>;
}