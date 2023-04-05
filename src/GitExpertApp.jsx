import {useState} from 'react'
import  {AddCategory, GifGrid }  from './components/index'


export const GitExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) =>{
        if ( categories.includes(newCategory)) return;
        setcategories([ newCategory, ...categories])
        //setcategories(cat => [...cat, 'naruto'])
    }
  return (
      <>
        <h1>GitExpertApp</h1>

        <AddCategory 
            onNewCategory = { event => onAddCategory(event) }
        />

        <button onClick={onAddCategory}>Agregar</button>
        <ol>
            { categories.map( category => (
                <GifGrid 
                    key={category} 
                    category={ category }
                />
            )) 
            }
        </ol>
      </>
  )
}
