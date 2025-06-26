import React from "react";

export default function ReadMePage() {
  return (
    <div className="bg-yellow-400 min-h-screen font-sans text-black">
      {/* Header */}
      <header
        className="text-black"
        style={{
          paddingTop: "65px",
          paddingBottom: "32px",
          paddingLeft: "131px",
          paddingRight: "431px",
        }}
      >
        <p className="text-[20px]">Version 1.0 (Mar 25, 2020)</p>
        <h1 className="text-[200px] font-bold leading-none">Read me</h1>
      </header>

      {/* Main Content */}
      <main
        className="bg-white text-black space-y-[90px]"
        style={{
          paddingTop: "103px",
          paddingBottom: "302px",
          paddingLeft: "131px",
          paddingRight: "25%",
        }}
      >
        {/* Section 1 */}
        <section>
          <h2 className="text-[44px] font-bold mb-[26px]">
            How this file can be used
          </h2>
          <p className="border-l-4 border-black pl-4 text-[20px]">
            Feel free to use this file in any way you want, you can edit a copy
            of this file as much as you want for non-commercial or commercial
            purposes. It’s not necessary, but if you want, you can ping me at
            @mikamatikainen on Twitter when using this file. Would be just nice
            to see how this evolves :-) <br />
            Images: Copyright © Unsplash or Mika Matikainen.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-[44px] font-bold mb-[26px]">
            A note about typefaces
          </h2>
          <p className="border-l-4 border-black pl-4 text-[20px]">
            This file is using platform-native typefaces for iOS & macOS,
            designed by Apple. To make texts editable, you can download the
            typefaces at
            <a
              href="https://developer.apple.com/fonts/"
              className="underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              developer.apple.com/fonts
            </a>
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-[44px] font-bold mb-[26px]">
            Fonts used on the live site
          </h2>

          <div className="border-l-4 border-black pl-4 space-y-6">
        <p className="text-[20px]">
          Just for reference or if you're interested, I list here the typefaces I’m using on in the live site at
          <a
            href="https://www.nordicrose.net"
            className="underline ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            nordicrose.net
          </a>. If you’d like to use them in your own project, I added links for you as well to make it easier to purchase the required license.
        </p>

        {/* GTF Chapter */}
        <div className="space-y-[12px]">
          <h3 className="font-light" style={{ fontSize: "50px" }}>GTF Chapter</h3>
          <p className="text-[20px] leading-[24px]">Used in the logo as a vector outline</p>
          <p className="text-[20px]">
            by{" "}
            <a
              className="underline"
              href="https://www.goodtypefoundry.com/chapter"
              target="_blank"
              rel="noopener noreferrer"
            >
              Good Type Foundry
            </a>
          </p>
        </div>

        {/* Mackay Bold */}
        <div className="space-y-[12px]">
          <h3 className="font-bold" style={{ fontSize: "50px" }}>Mackay Bold</h3>
          <p className="text-[20px] leading-[24px]">Large headlines</p>
          <p className="text-[20px]">
            by{" "}
            <a
              className="underline"
              href="https://www.myfonts.com/fonts/rene-bieder/mackay/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rene Gieder
            </a>
          </p>
        </div>

        {/* Harriet Text */}
        <div className="space-y-[12px]">
          <h3 className="font-light" style={{ fontSize: "50px" }}>Harriet Text</h3>
          <p className="text-[20px] leading-[24px]">Body copy</p>
          <p className="text-[20px]">
            by{" "}
            <a
              className="underline"
              href="https://okaytype.com/typefaces/harriet"
              target="_blank"
              rel="noopener noreferrer"
            >
              Okay Type
            </a>
          </p>
        </div>

        {/* Basis Grotesque Pro */}
        <div className="space-y-[12px]">
          <h3 className="font-light" style={{ fontSize: "50px" }}>Basis Grotesque Pro</h3>
          <p className="text-[20px] leading-[24px]">UI elements, some subtitles and some body copy</p>
          <p className="text-[20px]">
            by{" "}
            <a
              className="underline"
              href="https://www.colophon-foundry.org/typefaces/basis-grotesque/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Colophon Foundry
            </a>
          </p>
        </div>

        {/* NOKIA CELLPHONE FC */}
        <div className="space-y-[12px]">
          <h3 className="font-black tracking-widest" style={{ fontSize: "50px" }}>NOKIA CELLPHONE FC</h3>
          <p className="text-[20px] leading-[24px]">Some playful elements at some point, maybe</p>
          <p className="text-[20px]">
            by{" "}
            <a
              className="underline"
              href="https://www.dafont.com/nokia-cellphone.font"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zeh Fernando
            </a>, available for free at Dafont
          </p>
        </div>
      </div>

        </section>
      </main>
    </div>
  );
}
