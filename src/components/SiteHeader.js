import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery,gql } from '@apollo/client'


const CATEGORIES = gql`query GetCategories{
    categories{
          data{
        id
        attributes{  
        name
        }
      }
    }
  }
`;


export default function SiteHeader() {
    const [categoriesData, setCategoriesData] = useState(null)
    const {loading , error , data } = useQuery(CATEGORIES);
    React.useEffect(() => {
        if (!loading) {
            if (!error) {
                setCategoriesData(data.categories.data)
                console.log(categoriesData);
            }
        }
    }, [loading])
    if(loading) return <p> Loading... </p>
    if(error) return <p> Error : </p>
    
  return (
    <div className='site-header'>
        <Link to='/'><h1>Doremon Reviews</h1></Link>
        <nav className='categories'>
            <span>Filter Review By Category:</span>
        {categoriesData && categoriesData.map(category =>(
            <Link key={category.id} to={`/category/${category.id}`}>{category.attributes.name}</Link>
        ))}
        </nav>
    </div>
  )
}
