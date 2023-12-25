import Image from 'next/image';
import About from '@/components/about';
import Intro from '@/components/home';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import ModeToggle from '@/components/toggle';
import { Button } from '@/components/ui/button';
import SectionDivider from '@/components/section-divider';
import Projects from '@/components/projects';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-12 pt-24">
      <Intro/>
      <SectionDivider/>
      <About/>
      <SectionDivider/>
      <Projects/>
      <SectionDivider/>
      <Skills/>
      <SectionDivider/>
      <Experience/>
      {/* <section id="contact" className='my-96 scroll-mt-28'>contact</section> */}

    </main>
  )
}
