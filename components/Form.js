import React from 'react'
import Link from 'next/link'

const Form = ({ type, submitting, handleSubmit, post, setPost
}) => {
    return (
        <section className="card my-5">

            <h1 className='text-center'>{type} Post</h1>
            <p className='text-center my-3'>
                Unleash your creativity and share captivating prompts with the world, as you delve into limitless possibilities on our AI-powered platform.</p>

            <form onSubmit={handleSubmit} className='flex flex-col gap-3 p-5 rounded-lg bg-[#e5e1e1]'>

                <label className='font-bold' htmlFor="prompt">Write AI Prompt</label>

                <textarea name="" id="prompt" cols="30" rows="10" placeholder='Start typing your AI Prompt' className='w-full p-2 rounded-lg border-none outline-none' value={post.prompt} onChange={(e) => setPost({ ...post, prompt: e.target.value })} required>
                </textarea>

                <label className='font-bold' htmlFor="tag">Tags of Prompt (#Cars, #ChatGPT, #Development)</label>

                <input type="text" name="" id="tag" placeholder='#Tag' className='w-full p-2 rounded-lg border-none outline-none' value={post.tag} onChange={(e) => setPost({ ...post, tag: e.target.value })} required/>

                <div className="buttons flex justify-end gap-1">
                    <Link href="/">
                        <div className='px-4 py-2 border-none cursor-pointer'>Cancel</div>
                    </Link>
                    <button className='px-4 py-2 border-none rounded-3xl bg-orange-500 hover:bg-orange-300 text-white cursor-pointer' type='submit' disabled={submitting}>
                        {submitting ? `${type}ing` : type }
                    </button>
                </div>

            </form>


        </section>

    )
}

export default Form