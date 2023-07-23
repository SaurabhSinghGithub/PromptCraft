"use client";
import Image from 'next/image'
import { FaClipboard } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation'

// const truncateText = (text, maxLength) => {
//     if (text.length > maxLength) {
//         return text.substring(0, maxLength) + "...";
//     }
//     return text;
// };

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {

    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();

    const [copy, setCopy] = useState("");

    const handleCopy = () => {
        setCopy(post.prompt);
        navigator.clipboard.writeText(post.prompt);
        setTimeout(() => {
            setCopy("");
        }, 3000);
    }

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text;
    };

    const handleProfileClick = () => {
        console.log(post);

        if (post.creator._id === session?.user.id) return router.push("/profile");

        router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
    };


    return (
        <div className="card-items flex flex-col gap-3 bg-white p-6 text-extra-color rounded-md cursor-pointer hover:bg-[#ffe9e9]">

            <div className="card-title flex justify-around gap-3 relative">

                <Image
                    src={post.creator.image}
                    width={40}
                    height={40}
                    alt="Card"
                    className='grow-0'
                    onClick={handleProfileClick}
                />

                <div className="name grow">
                    <h2 className='font-bold'>{post.creator.username}</h2>
                    <h3 className='text-xs'>{post.creator.email}</h3>
                </div>

                <div className="copy absolute right-0" onClick={handleCopy}>
                    {copy === post.prompt ?
                        <>
                            <FaCheck className='cursor-pointer text-[#3ee132]' />

                        </>
                        :
                        <>
                            <FaClipboard className='cursor-pointer hover:text-[#db8787]' />
                        </>
                    }
                </div>

            </div>

            <div className="card-prompt h-[150px]">
                <p>{truncateText(post.prompt, 150)}</p>
            </div>

            <div className="card-tag"
                onClick={() => handleTagClick && handleTagClick(post.tag)}
            >
                <p className='font-bold cursor-pointer mt-3'>{post.tag}</p>
            </div>

            {session?.user.id === post.creator._id && pathName === "/profile" && (
                <div className='flex justify-center items-center gap-5'>
                    <p className='cursor-pointer text-green-700' onClick={handleEdit}>
                        Edit
                    </p>
                    <p className='cursor-pointer text-red-700' onClick={handleDelete}>
                        Delete
                    </p>
                </div>
            )

            }

        </div>
    )
}

export default PromptCard