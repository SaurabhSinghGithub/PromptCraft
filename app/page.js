"use client"

import Typewriter from 'typewriter-effect';
import Feed from '@components/Feed';


export default function Home() {

  return (
    <section className='w-full my-5 flex flex-col justify-center items-center gap-4'>
      <h1 className='w-[70%] max-sm:w-[100%] flex justify-center items-center flex-col gap-2 rounded-full px-[40px] py-[15px] text-center text-[#ebe5e5]'>Explore & Disseminate
        <br className='sm:hidden' />
        <span className='typewriter mx-2 text-[#ffe29f]'>
          ChatGPT Prompts
          {/* Pri Prompts */}
        </span>
        <div class="sprinkler text-center"></div>
      </h1>

      <p className='max-w-4xl mx-auto text-center font-bold text-[#383838]'>
        <Typewriter
          options={{
            strings: ['PromptCraft is a AI-driven platform designed to explore engaging prompts.', 'Empowering individuals to unleash their creativity.', 'Share your imaginative ideas with the world.'],
            autoStart: true,
            loop: true,
          }}
        />
      </p>

      {/* <p className='max-w-4xl mx-auto text-center font-bold text-[#383838]'>
        <Typewriter
          options={{
            strings: ['Heyy Pri, go ahead and explore prompts. Hope you like it. Happy prompting!!!'],
            autoStart: true,
            loop: true,
          }}
        />
      </p> */}

      {/* <p className='max-w-4xl mx-auto text-center font-bold text-extra-color'> PromptCraft is a AI-driven platform designed to explore, generate, and distribute engaging prompts.</p> */}

      {/* <p className='max-w-4xl mx-auto text-center font-bold text-[#383838]'> PromptCraft is a cutting-edge AI-driven platform designed to explore, generate, and distribute engaging prompts, empowering individuals to unleash their creativity and share their imaginative ideas with the world.</p> */}

      <Feed />



    </section>
  )
}
