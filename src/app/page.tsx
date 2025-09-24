export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-3xl text-black font-bold ">The webshop</h1>

      <div className="grid h-56 grid-cols-4 gap-4">
        <div className="bg-red-600">red</div>
        <div className="bg-blue-600">blue</div>
        <div className="bg-gray-600">gray</div>
        <div className="bg-yellow-600">yellow</div>
      </div>

      <div className="bg-black mt-10">
        <div className="pb-5">
          <h1 className="flex justify-center text-white">About us</h1>
        </div>
          <div className="grid h-25 grid-cols-3 gap-4 flex justify-center">
          <div className="flex justify-center pl-5">Why</div>
          <div className="flex justify-center">Where</div>
          <div className="flex justify-center">Which</div>
          </div>  
      </div>
    </main>
  );
}
