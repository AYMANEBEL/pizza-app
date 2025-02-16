export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rouneded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center ">
      <img src="/pizza.png" className="max-h-auto max-w-24 block mx-auto" alt="pizza" />
      </div>
      <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Pizza A beloved dish born in Italy, consisting of dough, sauce, cheese,
      </p>
      <button
        className="mt-4 bg-primary text-white rounded-full 
          px-8 py-2 "
      >
        Add to cart $12
      </button>
    </div>
  );
}
