import React, { useState, useEffect } from 'react';
import { BiShare } from "react-icons/bi";


const videos = [
  {
    src: '/assets/Epic Overtake Drama in Formula E_ Safety Car Moments.mp4',
    title: 'Epic Overtake Drama in Formula E Safety Car Moments',
    description: 'Momento emocionante de uma ultrapassagem épica na Fórmula E, durante momentos do Safety Car.'
  },
  {
    src: '/assets/Sebastian Buemi Claims Formula E Championship Victory!.mp4',
    title: 'Sebastian Buemi Claims Formula E Championship Victory!',
    description: 'Sebastian Buemi vence o campeonato da Fórmula E com uma corrida incrível.'
  }
];

const VideoComponent = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Função para alternar vídeos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 90000); // Troca de vídeo a cada 90 segundos 
    
    return () => clearInterval(interval); 
  }, []);

  const currentVideo = videos[currentVideoIndex];

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      {/* Área do vídeo com proporção ajustada */}
      <div style={{ flex: '1 1 280px', display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            position: 'relative',
            width: '100%', 
            maxWidth: '400px', 
            paddingBottom: '80%', 
            overflow: 'hidden',
          }}
        >
          <video
            key={currentVideo.src}
            controls
            autoPlay
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <source src={currentVideo.src} type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      </div>

      {/* Área de título, descrição e botão */}
      <div style={{ 
        flex: '1 1 280px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-start',
        marginTop: '100px' 
      }}>
        <div>
          <h2 style={{ fontSize: '30px', margin: '0 0 10px 0' }}>{currentVideo.title}</h2>
          <p style={{ fontSize: '20px', margin: '0 0 20px 0' }}>{currentVideo.description}</p>
        </div>

        {/* Botão de compartilhar  */}
        <div style={{ marginTop: '20px' }}>
          <button
            onClick={() => {
              navigator.clipboard.writeText(currentVideo.src);
              alert('Link do vídeo copiado para a área de transferência!');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 20px',
              backgroundColor: '#01adfd',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            <BiShare style={{ marginRight: '8px' }} /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
