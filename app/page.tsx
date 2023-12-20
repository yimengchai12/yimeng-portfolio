import Image from 'next/image';
import About from '@/components/about';
import Intro from '@/components/home';
import ModeToggle from '@/components/toggle';
import { Button } from '@/components/ui/button';
import SectionDivider from '@/components/section-divider';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-12 pt-24">
      <Intro/>
      <SectionDivider/>
      <About/>
      <section id="projects" className='scroll-mt-28'>projects</section>
      <section id="skills" className='my-96 scroll-mt-28'>skills</section>
      <section id="experience" className='my-96 scroll-mt-28'>experience</section>
      <section id="contact" className='my-96 scroll-mt-28'>contact</section>

    </main>
  )
}
