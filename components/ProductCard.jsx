import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <Link 
    href="/product/1"
    className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
  >
    <img className="w-full" src="/cloth.jpg" alt="Product Image" />
    <div className="p-4 text-black/90">
      <h2 className="text-lg font-medium">Product Name</h2>
      <div className="flex items-center text-black/50">
        <p className="mr-2 text-lg font-semibold">Rs2000</p>
        <p className="text-base font-medium line-through">Rs25000.00</p>
      </div>
      <p className="ml-auto text-base font-medium text-green-500">
        20% off
      </p>
    </div>
  </Link>
  
  );
};

export default ProductCard;

// import { getDiscountedPricePercentage } from "@/utils/helper";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// // { data: { attributes: p, id } }
// const ProductCard = () => {
//     return (
//         <Link
//             // href={`/product/${p.slug}`}
//             className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
//         >
//             <Image
//                 width={500}
//                 height={500}
//                 src={p.thumbnail.data.attributes.url}
//                 alt={p.name}
//             />
//             <div className="p-4 text-black/[0.9]">
//                 <h2 className="text-lg font-medium">{p.name}</h2>
//                 <div className="flex items-center text-black/[0.5]">
//                     <p className="mr-2 text-lg font-semibold">
//                         &#8377;{p.price}
//                     </p>

//                     {p.original_price && (
//                         <>
//                             <p className="text-base  font-medium line-through">
//                                 &#8377;{p.original_price}
//                             </p>
//                             <p className="ml-auto text-base font-medium text-green-500">
//                                 {getDiscountedPricePercentage(
//                                     p.original_price,
//                                     p.price
//                                 )}
//                                 % off
//                             </p>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </Link>
//     );
// };

// export default ProductCard;
