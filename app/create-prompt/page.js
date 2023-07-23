"use client"

import React from 'react'
import Form from '@components/Form'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";

const page = () => {

  const { data: session } = useSession();
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  })

  const handleSubmit = async (e) => {

    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
          userId: session?.user.id,
        })
      })

      if (response.ok) {
        router.push("/")
      }

    } catch (error) {
      console.log(error)
    } finally {
      setSubmitting(false);
    }

  }

  return (
    <>
      <Form
        type='Craft'
        submitting={submitting}
        handleSubmit={handleSubmit}
        post={post}
        setPost={setPost}
      />
    </>
  )
}

export default page;