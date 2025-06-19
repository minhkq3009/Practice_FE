import { Link } from 'react-router-dom';

export default function FeaturedArticle() {
  return (
    <section className="text-center px-4 py-12 pb-0">
      <div className="mx-auto w-full max-w-3xl">
        <Link to="/article/ghost-platform">
          <img
            src="/featured.png"
            alt="Featured"
            className="w-full h-auto rounded-lg cursor-pointer"
          />
          <h2 className="font-bold mt-8 text-[36px] md:text-[54px] hover:underline cursor-pointer">
            A few words about this blog platform, Ghost, and how this site was made
          </h2>
        </Link>
        <p className="mt-2 text-[20px]">
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </p>
        <hr className="mt-[34px] mb-0 border-t border-gray-900 w-full" />
      </div>
    </section>
  );
}
