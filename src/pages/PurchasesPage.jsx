import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch';
import getToken from '../utils/getToken';

const PurchasesPage = () => {
  const [ purchases, getPurchases ] = useFetch();

  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases';
    getPurchases(url, getToken());
  }, []);

  return (
    <div>
      {purchases.map((purchase, index) => (
        <div key={index}>
          <img src={purchase.image} alt={purchase.name} />
          <h2>{purchase.name}</h2>
          <p>Precio individual: {purchase.price}</p>
          <p>Cantidad: {purchase.quantity}</p>
          <p>Precio total: {purchase.price * purchase.quantity}</p>
        </div>
      ))}
    </div>
  );
}

export default PurchasesPage;