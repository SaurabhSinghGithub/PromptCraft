"use client";

import React from 'react'
import { useState, useEffect } from 'react';
import PromptCard from './PromptCard';


const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className="card border-2 p-4 grid grid-cols-1 gap-5 sm:grid-cols-2 min-[1200px]:grid-cols-3 mb-5">
            {data.map((prompt) => {
                return (
                    <PromptCard
                        key={prompt._id}
                        post={prompt}
                        handleTagClick={handleTagClick}
                    />
                )
            })}
        </div>
    )
}

const Feed = () => {

    // const [post, setPost] = useState([])
    const [allPosts, setAllPosts] = useState([]);

    // Search
    const [searchText, setSearchText] = useState("")
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState([]);

    const filterPrompts = (searchtext) => {
        const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
        return allPosts.filter(
            (item) =>
                regex.test(item.creator.username) ||
                regex.test(item.tag) ||
                regex.test(item.prompt)
        );
    };

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);

        // debounce method
        setSearchTimeout(
            setTimeout(() => {
                const searchResult = filterPrompts(e.target.value);
                setSearchedResults(searchResult);
            }, 500)
        );
    }

    const handleTagClick = (tagName) => {
        setSearchText(tagName);

        const searchResult = filterPrompts(tagName);
        setSearchedResults(searchResult);
    };

    useEffect(() => {
        const getPrompts = async () => {
            const response = await fetch("/api/prompt");
            const data = await response.json();
            // setPost(data);
            setAllPosts(data);

        }
        getPrompts();
    }, [])



    return (
        <>
            <form action="" className='w-3/4 max-sm:w-full'>
                <input type="text" name="" id="" placeholder='Search for Prompts' className='mt-4 p-2 border-none rounded-md mb-12 w-full outline-none'
                    required
                    onChange={handleSearchChange}
                    value={searchText}
                />
            </form>

            {/* <PromptCardList
                data={post}
                handleTagClick={handleTagClick}
            /> */}

            {/* All Prompts */}
            {searchText ? (
                <PromptCardList
                    data={searchedResults}
                    handleTagClick={handleTagClick}
                />
            ) : (
                <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
            )}

        </>

    )
}

export default Feed