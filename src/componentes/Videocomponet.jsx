import { useState, useEffect } from 'react';
import { BiShare } from "react-icons/bi";
import EpicOvertake from '../assets/Epic Overtake Drama in Formula E_ Safety Car Moments.mp4';
import SebastianBuemi from '../assets/Sebastian Buemi Claims Formula E Championship Victory!.mp4';

const videos = [
  {
    src: EpicOvertake,
    title: 'Epic Overtake Drama in Formula E Safety Car Moments',
    description: 'Exciting moment of an epic overtake in Formula E, during Safety Car moments. 🏎️💨'
  },
  {
    src: SebastianBuemi,
    title: 'Sebastian Buemi Claims Formula E Championship Victory!',
    description: 'Sebastian Buemi wins the Formula E championship with an incredible race. 🏎️🏆.'
  }
];

const VideoComponent = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 90000); 
    
    return () => clearInterval(interval); 
  }, []);

  const currentVideo = videos[currentVideoIndex];

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start justify-center p-4 xl:w-3/5">
      <div className="flex-1 flex items-center justify-center w-full md:max-w-xs shadow-lg rounded-lg overflow-hidden">
        <div className="relative w-full aspect-[9/16] overflow-hidden">
          <video
            key={currentVideo.src}
            controls
            autoPlay
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={currentVideo.src} type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-start mt-4 sm:mt-0">
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-bold mb-3 text-gray-200">{currentVideo.title}</h2>
          <p className="text-lg text-gray-600 mb-5">{currentVideo.description}</p>
        </div>

        <div className="mt-5 flex justify-center sm:justify-start">
          <button
            onClick={() => {
              const fullUrl = `${window.location.origin}${currentVideo.src}`;
              navigator.clipboard.writeText(fullUrl);
              alert('Link do vídeo copiado para a área de transferência!');
            }}
            className="flex items-center px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300 ease-in-out shadow-md"
          >
            <BiShare className="mr-2 text-xl" /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
