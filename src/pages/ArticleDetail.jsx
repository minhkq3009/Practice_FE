import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";
import articles from "../data/articles";

export default function ArticleDetail() {
  return (
    <>
      <Header />
      <article className="max-w-3xl mx-auto px-4 py-12 text-gray-800 text-base">
        {/* Title & Subtitle with center alignment and updated font sizes */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-[36px] md:text-[54px] font-bold font-serif mb-2 leading-snug">
            A few words about this blog platform, Ghost, and how this site was made
          </h1>

          <p className="text-[16px] md:text-[20px] text-gray-500 mb-8">
            Why Ghost (& Figma) instead of Medium, WordPress or other options?
          </p>
        </div>

        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-8">
          <img
            src="/featured.png"
            alt="Feature"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
          <img
            src="/assets/avatar.png"
            alt="Author"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">Mika Matikainen</p>
            <p>Apr 15, 2020 · 4 min read</p>
          </div>
        </div>

        {/* Paragraphs */}
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus.
        </p>

        <p className="mb-4">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.
        </p>

        {/* Section title */}
        <h2 className="text-2xl font-bold font-serif mt-10 mb-4">Next on the pipeline</h2>

        <p className="mb-4">
          Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
        </p>

        <p className="mb-4">
          Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla.
        </p>

        {/* Article image */}
        <div className="my-8">
          <img
            src="/assets/article.png"
            alt="Article Visual"
            className="w-full rounded-md"
          />
          <p className="text-center text-xs text-gray-500 mt-2">
            Image caption centered this way and I’ll make this a bit longer to indicate the amount of line-height.
          </p>
        </div>

        <p className="mb-4">
          Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
        </p>

        {/* List */}
        <ul className="list-disc pl-6 mb-4">
          <li>First item in the list</li>
          <li>Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet</li>
          <li>Third item in the list</li>
        </ul>

        <p className="mb-4">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
        </p>

        <p className="mb-6">Thanks for reading, Mika</p>

        {/* Social share */}
        <div className="flex gap-4 mb-6">
          <button
            aria-label="Share on Facebook"
            className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54V9.845c0-2.506 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </button>
          <button
            aria-label="Share on Twitter"
            className="p-2 rounded-full bg-sky-500 hover:bg-sky-600 text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </button>
        </div>

        {/* Tags */}
        <div className="text-xs text-gray-400">Tags: product design, culture</div>

         {/* What to read next */}
        <section className="border-t pt-10 mt-10">
          <h3 className="text- font-bold mb-6">What to read next</h3>
          <div className="flex justify-center">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {articles.slice(0, 6).map((item, index) => (
                <ArticleCard key={index} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Sign-up Section */}
        <section className="bg-gray-100 rounded-md py-10 px-6 mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">Join our newsletter</h3>
          <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto">
            Get access to featured articles and insider interviews delivered straight to your inbox once a month.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded w-full"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        </section>
      </article>

      <Footer />
    </>
  );
}
