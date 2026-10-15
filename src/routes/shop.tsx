import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageIntro } from '@/components/site-shell';
import { pageMeta } from '@/lib/page-meta';
import bridge from '@/assets/bond-bridge.png.asset.json';
import pro from '@/assets/bond-bridge-pro.png.asset.json';

export const Route = createFileRoute('/shop')({ head: () => pageMeta('Shop Bond | Spectrum Window Coverings Canada', 'Explore Bond Bridge and Bond Bridge Pro from Spectrum, your Canadian Bond distributor. Contact us for availability and ordering.'), component: Shop });
function Shop() {
  return <><PageIntro eyebrow="Bond, brought to Canada" title="A smarter connection." description="Explore Bond smart home control, available through Spectrum. Find the right connection for your home or your next project." /><section className="section"><div className="product-grid">{[{ name: 'Bond Bridge', image: bridge.url, description: 'Bring compatible remote-controlled shades, fans, and fireplaces to your phone. Connect with Alexa and Google Home.' }, { name: 'Bond Bridge Pro', image: pro.url, description: 'Discover Bond’s professional bridge for connected spaces. Talk to Spectrum about the right solution for your project.' }].map((product) => <article className="product-card" key={product.name}><img className="product-photo" src={product.image} alt={product.name} width={1000} height={1000} /><h2>{product.name}</h2><p>{product.description}</p><div className="flex flex-wrap gap-3"><Button asChild><Link to="/contact">Enquire to order <ArrowUpRight /></Link></Button><Button variant="outline" asChild><Link to="/bond">Explore Bond</Link></Button></div></article>)}</div></section><section className="local-band"><div><h2>Looking for window coverings?</h2><p>Discover a made-for-you approach to shades, blinds, and drapery.</p></div><Button size="lg" asChild><Link to="/contact">Talk to Spectrum <ArrowUpRight /></Link></Button></section></>;
}