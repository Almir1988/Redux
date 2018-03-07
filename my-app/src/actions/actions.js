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

export function logIn(User) {
  
    if(User.username=== "admin" && User.password=== "admin")
    {
           
       return {
       type:LOGIN_USER,
       User
         };
    }
    else
    {
        User={

            username:'error',
            password:'error'
        }
         return {
       type: LOGIN_USER,
       User
         };
    
    }
}


