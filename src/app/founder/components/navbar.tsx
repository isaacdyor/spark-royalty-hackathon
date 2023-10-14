import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black-500 border-b border-slate-600 p-4">
      <div className="mx-auto flex items-center justify-between">
        <Link href="/" passHref>
          <p className="ml-2 mr-8 text-xl font-semibold text-white md:ml-6 lg:ml-8">
            Sparket
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
