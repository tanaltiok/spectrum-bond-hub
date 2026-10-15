import { createFileRoute } from '@tanstack/react-router';
import { ArrowUpRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageIntro } from '@/components/site-shell';
import { pageMeta } from '@/lib/page-meta';
import room from '@/assets/spectrum-living-room.jpg';

export const Route = createFileRoute('/contact')({ head: () => pageMeta('Contact Spectrum | Richmond Window Coverings & Bond Canada', 'Contact Spectrum Window Coverings in Richmond, BC for window coverings, Bond products, compatibility enquiries, and Canadian distribution.'), component: Contact });
function Contact() {
  return <><PageIntro eyebrow="Let’s make it yours" title="Talk to Spectrum." description="A new look for your windows. A smarter connection for your home. We’d love to hear what you have in mind." /><section className="section contact-grid"><div><div className="eyebrow">Richmond, British Columbia</div><h2>Great spaces start<br />with a conversation.</h2><div className="contact-block"><h3>Window coverings & Bond</h3><p>Contact our team about your space, Bond compatibility, product availability, or Canadian distribution.</p></div><div className="contact-block"><h3>Call Spectrum</h3><a href="tel:+16042318788">604 231 8788</a></div><div className="mt-7 flex flex-wrap gap-3"><Button size="lg" asChild><a href="tel:+16042318788"><Phone />Call our team</a></Button><Button size="lg" variant="outline" asChild><a href="https://www.google.com/maps/search/?api=1&query=Spectrum+Window+Coverings+Richmond+BC" target="_blank" rel="noopener noreferrer">Find Spectrum <ArrowUpRight /></a></Button></div></div><img src={room} className="contact-photo" alt="Beautiful roller shades in a contemporary living room" width={1920} height={1024} /></section></>;
}