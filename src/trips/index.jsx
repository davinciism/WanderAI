import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { AI_PROMPT, selectBudgetOptions, selectLocalityOptions } from '@/constants/options'
import React, { useEffect, useState } from 'react'
import { chatSession } from '@/service/AIModel';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';



function CreateTrip() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false)

  const handleInputChange=(name, value) => {
    setFormData({
      ...formData,
      [name]:value
    })
  }

  useEffect(()=>{
    console.log(formData);
  }, [formData])


  const login = useGoogleLogin({
    onSuccess:(codeResp)=> getUserProfile(codeResp),
    onError:(error)=>console.log(err)
  })

  const GenerateTrip = async () => {

    const user = localStorage.getItem('user')

    if(!user){
      setOpenDialog(true)
      return;
    }

    if(formData?.noOfDays>5){
      alert('Please enter number of days less than 5')
      return ;
    }
    if(formData?.noOfDays<=0){
      alert('Please enter number of days at least as 1')
      return ;
    }
    // console.log(formData);
    const FINAL_PROMPT = AI_PROMPT
    .replace('{locality}', formData?.locality)
    .replace('{mood}', formData?.mood)
    .replace('{noOfDays}', formData?.noOfDays)
    .replace('{budget}', formData?.budget)

    console.log(FINAL_PROMPT)

    const result = await chatSession.sendMessage(FINAL_PROMPT);

    console.log(result?.response?.text())

    navigate('/view-trip', { state: result?.response?.text() });
    
  }

  const getUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers:{
        Authorization:`Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((resp) => {
      console.log(resp)
      localStorage.setItem('user', JSON.stringify(resp.data))
      setOpenDialog(false);
      GenerateTrip();
    })
  }


  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-160 px-5 mt-10 mb-20'>
      <h1 className=''>Let us set your <span className='text-sky-500'>mood</span> and <span className='text-sky-500'>aspirations</span> for the trip ✨</h1>
      <p className='text-gray-500 text-xl mt-3'>Just provide some basic details for your trip. You don't have to worry about the location, figure out the activites and plan everything for your ADHD mind - allow us to handle it.</p>
      <div className='mt-20 flex flex-col gap-9'>
        <div>
          <h2 className='mb-4'>Important questions first, how do you want to feel?</h2>
          <Input placeholder={'adventurous, calming, relaxing ...'} type="text"
            onInput={(e)=>handleInputChange('mood',e.target.value)}
          />
        </div>
        <div>
          <h2 className='mb-4'>How many days do you have for the trip?</h2>
          <Input placeholder={'Example: 3'} type="number"
            onChange={(e)=>handleInputChange('noOfDays',e.target.value)}
          />
        </div>
        <div>
          <h2 className='mb-4'>What does your budget look like?</h2>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {selectBudgetOptions.map((item, index) => (
              <div key={index}
              className={`p-4 border rounded-lg hover:shadow-md cursor-pointer 
                ${formData?.budget==item.title&&'shadow-lg border-black'}`}
                onClick={()=>handleInputChange('budget', item.title)}
              >
                <h2>{item.icon}</h2>
                <h2>{item.title}</h2>
                <p className='text-lg text-gray-500'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className='mb-4'>Are we traveling local or catching flights?</h2>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {selectLocalityOptions.map((item, index) => (
              <div key={index} className={`p-4 border rounded-lg hover:shadow-md cursor-pointer 
                ${formData?.locality==item.title&&'shadow-lg border-black'}`}
                onClick={()=>handleInputChange('locality', item.title)}
              >
                <h2>{item.icon}</h2>
                <h2>{item.title}</h2>
                <p className='text-lg text-gray-500'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='my-12 flex justify-start'>
        <Button className='p-6' onClick={GenerateTrip}>Generate Trip ✨</Button>
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <h3 className='font-bold mb-4'>WanderAI</h3>
              <h2>Sign in with Google</h2>
              <p className='mb-6'>Sign in to the app using Google Auth</p>
              <Button className='w-full py-6' onClick={login}>Sign in with Google</Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default CreateTrip;