import React, {useState} from 'react';
import Logo from "../assets/icons/logo"
import "./navbar.css"
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUserName] = useState("");
  const [IsLoggedin, setIsLoggedin] = useState(false);

  const handleLogin = (user) => {
    setUserName(user);
    setIsLoggedin(true);
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    
    <div className='flex items-center bg-white-700 w-full h-[50px] justify-between px-10 sticky top-0 bg-white shadow-md' >
        <div className='flex gap-2 items-center '>
            <Logo/>
            <h1 className='font-black text-[25px]'>FASHION</h1>
        </div>
        <div className='flex gap-3 items-center font-medium'>
          
                <div><a href="#">CATALOGUE</a></div>
                <div><a href='#'>FASHION</a></div>
                <div><a href='#'>FAVOURITE</a></div>
                <div><a href='#'>LIFESTYLE</a></div>
                <span>
                  {IsLoggedin? (
                    <p>{`welcome,${username}`}</p>
                  ) : (
                    <button onClick={toggleModal} className='bg-black rounded-md text-white text-[11px] px-2 py-1 font-medium'>Login</button>
                  )}
                </span>

                {isModalOpen && (
                  <div className='modal'>
                    <div>
                      <h2>sign up</h2>
                      <form
                      onSubmit={(e) => {
                       e.preventDefault();
                       handleLogin(e.target.username.value);
                      }}
                      >
                      <input type="text" name='username' placeholder='username' required className='bg-red-400 m-30'/> <br />
                      <input type="email" name="email" placeholder='input email' required /> <br />
                      <input type="password" name='password' placeholder='password' required /><br />
                      <button type='submit'>sign up</button><br />
                      <button className='close' onClick={toggleModal}>close</button>
                      </form>
                    </div>
                  </div>
                )}
        </div>
    </div>
  )
}

export default Navbar;