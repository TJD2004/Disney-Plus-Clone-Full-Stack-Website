import axios from 'axios';
import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useGoogleLogin } from "@react-oauth/google";
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const GoogleLoginButton: React.FC = ({loading,setLoading}) => {
  // const handleGoogleLogin = () => {
  //   // Open Google OAuth in the same window
  //   window.open('http://localhost:5000/api/auth/google', '_self');
  // };

  // const [user,setUser]=useState(null)
  const { register ,login} = useAuth();
  const navigate = useNavigate();
  const checkGoogleAuthentication = (user:object) => {
        console.log(user);
        if (user) {
            axios.get(
                    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: "application/json",
                        },

                    }
                ).then(async (res)=>{
                  console.log(res)
                  setLoading(true)
                    try {
      const user_response = await register(res.data.family_name,res.data.email,import.meta.env.VITE_GOOGLE_USER_PASSWORD);
      console.log(user_response)
     if(user_response.status==400){
           try {
      await login(res.data.email,import.meta.env.VITE_GOOGLE_USER_PASSWORD);
      setLoading(false)
      navigate('/', { replace: true });
    } catch (error: any) {
      setLoading(false)
      console.log(error)
    }
     }
           setLoading(false)
      navigate('/', { replace: true });
                       } catch (error: any) {
        console.log(error)
                }
              })
                
        }
    };
    const loginUsingGoogle = useGoogleLogin({
        onSuccess: (codeResponse) => {
            // setUser(codeResponse);
            const user = codeResponse;
            console.log(user)
            checkGoogleAuthentication(user);
        },
        onError: (error) => console.log("Login Failed:", error),
    });
  return (
    <button
      onClick={()=>loginUsingGoogle()}
      className="w-full flex items-center justify-center px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 rounded-lg bg-white hover:bg-gray-50 text-gray-900 font-medium transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
    >
      <FaGoogle className="mr-2 sm:mr-3 text-red-500 text-sm sm:text-base" />
      Continue with Google
    </button>
  );
};

export default GoogleLoginButton;