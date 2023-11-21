import Link from "next/link";

export default function ProductListingPage() {

  return (
    <div>
      {
        [1, 2, 3, 4].map((item, index) => (
          <div key={index} className="text-blue-500 hover:text-blue-600">
            <Link href={`/products/${item}`}>
              Product {item}
            </Link>
          </div>
        ))
      }
    </div>
  )
}