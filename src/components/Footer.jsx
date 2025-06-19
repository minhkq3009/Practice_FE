export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 pt-8 pb-12 text-center space-y-6">
      {/* SVG Icon */}
      <div className="flex justify-center">
        <img src="/assets/Group40.svg" alt="Decorative Icon" className="w-full h-auto object-contain" />
      </div>


      {/* Description */}
      <p className="text-sm text-gray-500 max-w-xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur.
      </p>

      {/* Copyright */}
      <p className="text-sm font-light text-gray-400">© 2012–2020 Nordic Rose Co. All rights reserved.</p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 text-sm underline text-gray-400">
        <a href="#" className="hover:text-white">Twitter</a>
        <a href="#" className="hover:text-white">LinkedIn</a>
        <a href="#" className="hover:text-white">RSS</a>
      </div>
    </footer>
  );
}
