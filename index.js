

let resultado = (num) =>{
  let result = 0;
   
  for (let i = 0; i < num; i++) 
    {
    
        if( i % 3 === 0)
             {

                 result = result + i
            
             }

        if( i % 5 === 0)
            {

                 result = result + i

            }

    }

    return result

}


console.log (resultado(10))


