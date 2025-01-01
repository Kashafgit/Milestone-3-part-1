"use client";
import { useState } from "react";

const Comments = () => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState<string[]>([]);

    const handleComment = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setComment(event.target.value);
    };

    const handlePostComment = () => {
        if (comment.trim()) {
            setComments([...comments, comment]); // Add the new comment to the list
            setComment(""); // Clear the input field
        }
    };

    return (
        <div className="md:p-4  lg:p-8 ">
            <h1 className="text-2xl sm:text-3xl font-bold my-5">Comments</h1>
            <p className="text-gray-600 mb-4">No comment yet!</p>
            
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
                <textarea
                    value={comment}
                    onChange={handleComment}
                    placeholder="Leave your comment"
                    className="border border-black rounded px-2 py-2  w-80 md:w-full "
                />
                <button
                    onClick={handlePostComment}
                    className="ml-0 sm:ml-2 px-4 py-2 w-80 bg-black text-white rounded hover:bg-gray-800 md:w-full "
                >
                    Post
                </button>
            </div>

            <div className="py-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">All Comments</h3>
                <ul className="list-disc list-inside">
                    {comments.map((e, index) => (
                        <li key={index} className="text-gray-800 py-1 text-sm sm:text-base">
                            {e}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Comments;
