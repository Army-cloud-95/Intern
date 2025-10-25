import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
    
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=400&h=300&fit=crop' 
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const aboutText = "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.\n\nI was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...";
  
  const experiencesText = "Throughout my career at Salesforce, I've had the opportunity to work with diverse clients across various industries. My expertise lies in understanding customer needs and providing tailored solutions.\n\nI've successfully closed deals worth over $2M and maintained a 95% customer satisfaction rate. I believe in building long-term relationships rather than just making sales.";
  
  const recommendedText = "I highly recommend checking out our latest product innovations and customer success stories. These resources have helped many of our clients achieve their business goals.\n\nFeel free to reach out if you'd like personalized recommendations based on your specific needs and challenges.";

  function getContent() {
    if (activeTab === 'about') return aboutText;
    if (activeTab === 'experiences') return experiencesText;
    return recommendedText;
  }

  function handleNext() {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }
  // for add image we have to add new images via multer (backend) as i am doing this project in frontend only so i will add some static images on clicking add image button

  function addNewImage() {
    const newImages = [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop',
      

    ];
    const randomImg = newImages[Math.floor(Math.random() * newImages.length)];
    setImages([...images, randomImg]);
  }

  const displayedImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex">
      <div className="w-1/2 border-r border-gray-700"></div>

      <div className="w-1/2 flex items-center justify-center p-12">
        <div className="w-full max-w-2xl">
         
          <div className="bg-gray-700 rounded-3xl p-6 mb-5 shadow-lg">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-gray-400 text-xl">
                ?
              </div>
              
              <div className="bg-black rounded-full p-1 flex gap-1">
                <button
                  onClick={() => setActiveTab('about')}
                  className={`px-5 py-2 rounded-full text-sm font-medium ${
                    activeTab === 'about' 
                      ? 'bg-gray-800 text-white shadow-md' 
                      : 'text-gray-400'
                  }`}>
                  About Me
                </button>
                <button
                  onClick={() => setActiveTab('experiences')}
                  className={`px-5 py-2 rounded-full text-sm font-medium ${
                    activeTab === 'experiences' 
                      ? 'bg-gray-800 text-white shadow-md' 
                      : 'text-gray-400'
                  }`}>
                  Experiences
                </button>
                <button
                  onClick={() => setActiveTab('recommended')}
                  className={`px-5 py-2 rounded-full text-sm font-medium ${
                    activeTab === 'recommended' 
                      ? 'bg-gray-800 text-white shadow-md' 
                      : 'text-gray-400'
                  }`}>
                  Recommended
                </button>
              </div>
            </div>

            <div className="bg-gray-600 rounded-2xl p-5 h-52 overflow-y-auto text-gray-200 text-sm leading-relaxed">
              {getContent()}
            </div>
          </div>

         
          <div className="bg-gray-700 rounded-3xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-gray-400 text-xl">
                  ?
                </div>
                
                <div className="bg-black rounded-full px-6 py-2 text-white text-sm font-semibold">
                  Gallery
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={addNewImage}
                  className="bg-gray-900 text-white rounded-full px-5 py-2 text-xs font-bold flex items-center gap-2 shadow-md hover:bg-gray-800">
                  <Plus size={16} />
                  ADD IMAGE
                </button>
                
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-800 disabled:opacity-40">
                  <ChevronLeft size={20} />
                </button>
                
                <button
                  onClick={handleNext}
                  disabled={currentIndex >= images.length - 3}
                  className="bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-800 disabled:opacity-40">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {displayedImages.map((img, idx) => (
                <div
                  key={currentIndex + idx}
                  className="aspect-square rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={img}
                    alt={`Gallery ${idx}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}