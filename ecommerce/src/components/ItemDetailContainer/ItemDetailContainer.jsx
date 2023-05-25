import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../Data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/config'
const ItemDetailContainer = () => {
    const [Product, setProduct] = useState (null)
    const[ loading, setLoading] = useState (true)

    const { itemId } = useParams()
    useEffect (() => {
        setLoading(true)
        const docRef = doc (db, 'Products', itemId)
        
        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setProduct (productAdapted)
        })
    }, [itemId])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...Product} />
        </div>
    )
}

export default ItemDetailContainer
