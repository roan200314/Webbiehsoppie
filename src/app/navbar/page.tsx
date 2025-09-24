import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className=" text-black  pt-4">
      <ul className="grid grid-cols-5">
        <Link className="font-bold underline" href="/">Home</Link>
        <Link className="font-bold underline" href="#">About</Link>
        <Link className="font-bold underline" href="#">Faq</Link>
        <Link className="font-bold underline" href="/shopping-cart">Shopping cart</Link>
        <input className="place-self-end" type="text" placeholder="Search.."></input>
      </ul>
      <div>
        
      </div>
    </nav>
  );
}
