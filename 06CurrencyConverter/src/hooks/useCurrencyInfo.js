import {useEffect , useState} from 'react'

function useCurrencyInfo(currency){

    const [data , setData] = useState({})

    useEffect ( () => {
        fetch(`https://v6.exchangerate-api.com/v6/81f9f752bf145daf1dfbc4b7/latest/${currency}`) // Corrected the URL to include the currency variable
        .then(res => res.json())
        .then((res) => setData(res.conversion_rates)) // Corrected the data extraction to get the conversion rates
        console.log(data);
        
    }, [currency])


    console.log(data);
    
    return data
}



export default useCurrencyInfo
