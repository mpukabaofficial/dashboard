import { useState } from 'react'



function LoginPage() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  

  

  return (
    <>
    <h1 className=''> Welcome to Hornet HQ</h1>
    <form>
      <div className='form-input'>
      <label>
    Username:
    <input type="text" name="Username:" />
  </label>
  
<button onClick={ () => setName("Forgot Username?")}>Forgot Username?</button>
      </div>
  

<div className='form-input'>
    
  <label>
    Password:
    <input type="text" name="Password" />
  </label>
  <button onClick={ () => setName("Forgot Password?")}>Forgot Password?</button>
  <input type="submit" value="Log In" />
</div>
    
</form>
    
   
    </>
  )
}

export default LoginPage