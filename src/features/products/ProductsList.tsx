
import { useEffect } from "react"
import { fetchByProducts } from "./productsSlice";
import { useDispatch, useSelector  } from "react-redux";
import type { AppDispatch, RootState } from "../../store.tsx";
import Card from "./components/Card.tsx";
import type {ProductInterface} from './Types.ts'

const ProductsList =  () => {

  const dispatch = useDispatch<AppDispatch>();
 const { list, loading, error } = useSelector((state: RootState) => state.products);


useEffect(() => {
  dispatch(fetchByProducts());

 
}, [])

if(loading){
    return <h1>Loading...</h1>
}


if(error){
    return <h1>Error: {error}</h1>
}

  return (
     <>
     <h1 className="text-2xl font-bold mb-5" data-testid="product-heading">Products List</h1>
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">

     

        {
            list && list.map((product:ProductInterface) =>{
                return <Card key={product.id}>
                    <img  width={150} height={150} src={product.image} alt={product.title} className="w-40 h-40 object-cover mb-4 mx-auto" />
                    <h2 className="text-lg font-bold mb-2">{product.title}</h2>
                    <p className="text-gray-600 mb-4">{product.description.slice(0, 100)}...</p>
                    <p className="text-xl font-bold">${product.price}</p>
                </Card>
            })
        }
    </div>
    </>
  )
}

export default ProductsList