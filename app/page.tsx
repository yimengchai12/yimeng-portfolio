import Image from 'next/image';
import About from '@/components/about';
import Intro from '@/components/home';
import ModeToggle from '@/components/toggle';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModeToggle/>
      <Intro/>
      {/* <section id="about" className='my-96 scroll-mt-28'>about</section> */}
      <About/>
      <section id="projects" className='my-96 scroll-mt-28'>projects</section>
      <section id="skills" className='my-96 scroll-mt-28'>skills</section>
      <section id="experience" className='my-96 scroll-mt-28'>experience</section>
      <section id="contact" className='my-96 scroll-mt-28'>contact</section>

    </main>
  )
}
