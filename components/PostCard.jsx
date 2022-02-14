import React from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

import { graphCMSImageLoader } from "../util";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative shadow-md w-full h-60 lg:h-80 mb-6">
        <Image
          alt={post.title}
          className="shadow-lg rounded-t-lg lg:rounded-lg"
          layout="fill"
          objectFit="cover"
          src={post.featuredImage.url}
        />
      </div>
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="flex lg:flex-row flex-col lg:gap-8 gap-4 justify-center mb-8 w-full font-medium text-lg text-gray-700">
        <div className="flex items-center justify-center gap-2">
          <Image
            loader={graphCMSImageLoader}
            alt={post.author.name}
            height="30px"
            width="30px"
            className="rounded-full"
            src={post.author.photo.url}
          />
          <div>{post.author.name}</div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </div>
      </div>
      {/* Excerpt */}
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>
      {/* Continue Reading Button */}
      <div className="flex justify-center">
        <Link href={`/post/${post.slug}`}>
          <div className="transition duration-500 transform hover:-translate-y-1 bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
            Continue Reading
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
