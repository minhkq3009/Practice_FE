import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";
import articles from "../data/articles";

export default function ArticleDetail() {
  return (
    <>
      <Header />

      {/* Title + Subtitle */}
      <div className="text-center max-w-4xl mx-auto mt-[52px] mb-[32px] px-[16px]">
        <h1 className="text-[36px] md:text-[54px] font-bold font-serif leading-snug mb-[24px] md:mb-[32px]">
          A few words about this blog platform, Ghost, and how this site was made
        </h1>
        <p className="text-[16px] md:text-[20px] text-gray-500">
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </p>
      </div>

      {/* Featured Image */}
      <div className="w-full">
        <img
          src="/featured.png"
          alt="Feature"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Article Block 1 */}
      <article className="max-w-3xl mx-[20px] md:mx-auto text-gray-800 text-[16px] md:text-[20px]">
        <div className="mt-8">
          <div className="h-[1px] bg-black mb-[24px]"></div>
          {/* Avatar and Intro */}
          <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
            <img
              src="/assets/avatar.png"
              alt="Author"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-[16px]">Mika Matikainen</p>
              <p className="text-[16px]">Apr 15, 2020 · 4 min read</p>
            </div>
          </div>

          <p className="mb-[34px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus.
          </p>

          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.
          </p>

          <h2 className="text-[32px] md:text-[26px] font-bold font-serif mt-10 mb-4">Next on the pipeline</h2>

          <p className="mb-4">
            Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
          </p>

          <p className="mb-4">
            Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla.
          </p>
        </div>
      </article>

      {/* Article Image and Caption in Between */}
      <div className="my-8 px-0">
        <div className="w-full mx-auto sm:w-[80%] md:w-[70vw] xl:w-[50vw] max-w-none md:max-w-[100vw]">
          <img
            src="/assets/article.png"
            alt="Article Visual"
            className="w-full h-auto"
          />
          <p className="text-center text-[16px] text-gray-500 mt-2 px-[16px]">
            Image caption centered this way and I’ll make this a bit longer to indicate the amount of line-height.
          </p>
        </div>
      </div>
      {/* Article Block 2 */}
      <article className="max-w-3xl mx-[20px] md:mx-auto text-gray-800 text-[16px] md:text-[20px] pb-[91px] md:pb-[132px]">
        <p className="mb-4">
          Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
        </p>
        <p className="mb-4">
          Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li>First item in the list</li>
          <li>Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet</li>
          <li>Third item in the list</li>
        </ul>

        <p className="mb-4">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
        </p>

        <p className="mb-6">Thanks for reading, Mika</p>

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

        <div className="text-[16px] text-black-900 mb-[34px]">Tags: product design, culture</div>

        <div className="border-t border-dashed border-gray-300 mb-[34px]"></div>

        {/* Author Info */}
        <div className="flex items-center gap-4 mt-6">
          <img
            src="/assets/avatar.png"
            alt="Author Detail Avatar"
            className="w-[70px] h-[70px] rounded-full object-cover"
          />
          <p className="text-[16px] text-gray-700">
            <strong className="uppercase">MIKA MATIKAINEN</strong> is a Design Founder & Advisor. Berlin School of Creative Leadership Executive MBA participant. Zippie advisor. Wolt co-founder, and Nordic Rose stakeholder.
          </p>
        </div>
      </article>

      {/* Separator line */}
      <div className="w-screen h-[1px] bg-gray-900 mb-0 mt-0"></div>

        {/* Bọc chung 2 phần vào 1 div lớn */}
        <article className="max-w-3xl mx-[20px] md:mx-auto pt-[62px] md:pt-[73px] pb-[52px] md:pb-[111px]">

          {/* WHAT TO READ NEXT */}
          <section className="text-center mb-[82px] md:mb-[114px]">
            <h3 className="font-bold mb-[27px] text-[32px] md:text-[44px]">What to read next</h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[28px] gap-y-[32px]">
                {articles.slice(0, 6).map((item, index) => (
                  <ArticleCard key={index} {...item} />
                ))}
              </div>
            </div>
          </section>

          {/* SIGN-UP SECTION */}
          <section className="border border-solid border-[1px] border-black px-6 py-10 max-w-2xl mx-auto text-center relative">
            <div className="absolute top-0 left-0 right-0 h-2 bg-black"></div>

            <h3 className="text-[28px] md:text-[36px] font-bold mb-4">Sign up for the newsletter</h3>
            <p className="text-[16px] md:text-[20px] text-gray-700 mb-6">
              If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared.
            </p>

            <form className="w-full max-w-xl mx-auto mt-6">
              <div className="flex flex-row flex-nowrap w-full">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="border border-black px-4 py-2 flex-grow min-w-0 rounded-none"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 font-semibold tracking-wider shrink-0"
                >
                  SIGN UP
                </button>
              </div>
            </form>
          </section>
        </article>
      <Footer />
    </>
  );
}
