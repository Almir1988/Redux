export const ADD_TODO = 'ADD_TODO'
export const LOGIN_USER='LOGIN_USER'




export function addTodo(Product) {
  
    if(Product.ProductName=== "meso" && Product.Quantity=== "44")
    {
           
       return {
       type: ADD_TODO,
       Product
         };
    }
    else
    { 

        Product={

            ProductName:'error',
            Quantity:'error'
        }

        
         return {
       type: ADD_TODO,
       Product
         };

    }
}

export function logIn(user) {
  
    if(user.username=== "admin" && user.password=== "admin")
    {
           
       return {
       type:LOGIN_USER,
       user
         };
    }
    else
    {
        user={

            username:'error',
            password:'error'
        }

        
         return {
       type: LOGIN_USER,
       user
         };
    
    }
}


