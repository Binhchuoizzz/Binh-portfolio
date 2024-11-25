import { useState, useEffect } from 'react';
// form spree
import { useForm, ValidationError } from "@formspree/react";
import AnimatedText from './AnimatedText';
import Image from 'next/image';
import { FaCheckCircle } from "react-icons/fa";

const Contact = () => {
     const [state, handleSubmit] = useForm("mnnqvzpa");

     // state for form input
     const [formData, setFormData] = useState({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: "",
     });

     // state to control icon visibility and button text
     const [showIcon, setShowIcon] = useState(false);

     //handle input changes
     const handleChange = (e) => {
          {/* setFormData({ ...formData, [e.target.name]: e.target.value });
          if (e.target.name === 'email') {
               setShowIcon(e.target.value.includes('@'));
          } */}
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
     };

     // clear the form after submission and handle message visibility
     useEffect(() => {
          if (state.succeeded) {
               setShowIcon(true);// show the success icon
               // clear for inputs
               setFormData({
                    firstname: "",
                    lastname: "",
                    email: "",
                    phone: "",
                    message: "",
               });

               // hide the icon and revert button text after 3 seconds
               const timer = setTimeout(() => {
                    setShowIcon(false);
               }, 3000);

               // clean up the timer on component unmount or before re-running effect
               return () => clearTimeout(timer);
          }
     }, [state.succeeded]);

     // handle form submission
     const handleFormSubmit = async (event) => {
          event.preventDefault(); // prevent default form submission
          handleSubmit(formData); // call formspree's submit handler with formData
     };
     return (
          <section className='pt-8 xl:pt-12 pb-32' id='contact'>
               <div className='container mx-auto'>
                    <div className='flex flex-col items-center xl:flex-row gap-16'>
                         <div className='flex-1 mx-auto xl:mx-0 flex flex-col'>
                              <AnimatedText
                                   text="Let's Work Together"
                                   textStyles="h2 mb-12 text-center xl:text-left"
                              />
                              {/* from */}
                              <form
                                   onSubmit={handleFormSubmit}
                                   className="flex flex-col gap-6 w-full max-w-[480px]"
                              >
                                   {/* firstname & lastname fields */}
                                   <div className='flex gap-8'>
                                        {/* firstname */}
                                        <div className='flex-1'>
                                             <label
                                                  htmlFor="firstname"
                                                  className='block mb-2 text-md font-medium text-primary'
                                             >
                                                  Frist Name <span className='text-accent'>*</span>
                                             </label>
                                             <input
                                                  onChange={handleChange}
                                                  type="text"
                                                  id="firstname"
                                                  name="firstname"
                                                  value={formData.firstname}
                                                  className='input'
                                                  placeholder='First Name'
                                                  required
                                             />
                                        </div>
                                        {/* lastname */}
                                        <div className='flex-1'>
                                             <label
                                                  htmlFor="lastname"
                                                  className='block mb-2 text-md font-medium text-primary'
                                             >
                                                  Last Name <span className='text-accent'>*</span>
                                             </label>
                                             <input
                                                  onChange={handleChange}
                                                  type="text"
                                                  id="lastname"
                                                  name="lastname"
                                                  value={formData.lastname}
                                                  className='input'
                                                  placeholder='Last Name'
                                                  required
                                             />
                                        </div>
                                   </div>
                                   {/* email field */}
                                   <div>
                                        <label
                                             htmlFor="email"
                                             className='block mb-2 text-md font-medium text-primary'
                                        >
                                             Email <span className='text-accent'>*</span>
                                        </label>
                                        <input
                                             onChange={handleChange}
                                             type="text"
                                             id="email"
                                             name="email"
                                             value={formData.email}
                                             className='input'
                                             placeholder='yourmail@email.com'
                                             required
                                        />
                                        <ValidationError
                                             prefix='Email'
                                             field='email'
                                             errors={state.errors}
                                             message='Please enter a valid email address'
                                        />
                                   </div>
                                   {/* phone field */}
                                   <div>
                                        <label
                                             htmlFor="phone"
                                             className='block mb-2 text-md font-medium text-primary'
                                        >
                                             Phone number <span className='text-accent'>*</span>
                                        </label>
                                        <input
                                             onChange={handleChange}
                                             type="number"
                                             id="phone"
                                             name="phone"
                                             value={formData.phone}
                                             className='input'
                                             placeholder='+1 (234) 567 890'
                                        />
                                   </div>
                                   {/* message field */}
                                   <div>
                                        <label
                                             htmlFor="message"
                                             className='block mb-2 text-md font-medium text-primary'
                                        >
                                             Message <span className='text-accent'>*</span>
                                        </label>
                                        <textarea
                                             onChange={handleChange}
                                             type="text"
                                             id="message"
                                             name="message"
                                             value={formData.message}
                                             className='textarea'
                                             placeholder='Leave me a message...'
                                             rows="5"
                                             required
                                        />
                                        <ValidationError
                                             prefix='Message'
                                             field='message'
                                             errors={state.errors}
                                        />
                                   </div>
                                   {/* submit button */}
                                   <button
                                        type='submit'
                                        disabled={state.submitting}
                                        className='btn btn-accent flex items-center justify-center gap-2'
                                   >
                                        {
                                             state.submitting ?
                                                  (
                                                       <span>Sending...</span>
                                                  ) : (
                                                       <>
                                                            {/* show icon with opacity transitition */}
                                                            < FaCheckCircle
                                                                 className={`absolute text-white text-lg transition-opacity
                                                                 duration-500 ease-in-out ${showIcon ? "opacity-100" : "opacity-0"
                                                                      }`}
                                                            />
                                                            <span
                                                                 className={`transition-opacity duration-500 ease-in-out ${showIcon ? "opacity-0" : "opacity-100"
                                                                      }`}
                                                            >
                                                                 Send message
                                                            </span>
                                                       </>
                                                  )
                                        }
                                   </button>
                              </form>
                         </div>
                         {/* image */}
                         <div className='hidden xl:flex relative w-[577px] h-[664px] rounded-lg
                         overflow-hidden'>
                              <Image
                                   src="/assets/setup.jpg"
                                   className='object-cover'
                                   fill
                                   quality={100}
                                   alt=""
                              />
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default Contact