import imageData from '@/data/imageData';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Search from './Search';
import { ReactSortable } from 'react-sortablejs';
import LoginModal from './LoginModal';
import { useSession } from 'next-auth/react';

const ImageGrid = styled(ReactSortable)`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr ;
    gap: 20px;
    @media screen and (max-width: 768px) {
        grid-template-columns: 2fr 2fr;
    }
`;

const Image = styled.img`
    width: 500px;
    height: 350px;
    border-radius: 12px;
    @media screen and (max-width: 768px) {
        width: 400px;
        height: 200px;
    }
`;

const Gallery = () => {

    const [filteredImages, setFilteredImages] = useState(imageData);
    const [loading, setLoading] = useState(true);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const { data: session } = useSession();

    useEffect(() => {
        setTimeout(() => {
          setLoading(false); // Set loading to false after loading is done
        }, 2000);
      }, []);

    const handleDragStart = (event) => {
    if (!session) {
        // Displaying the login modal
        setShowLoginModal(true);
        event.preventDefault(); // Prevent drag and drop for unauthenticated users
    }
    };
  
    const handleSearch = (searchTerm) => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    const filtered = imageData.filter((image) =>
      image.tags.some((tag) => tag.toLowerCase().includes(lowercaseSearchTerm))
    );
    setFilteredImages(filtered);
  };

  const handleOnSort = (newList) => {
    setFilteredImages(newList);
  };

  const handleImageClick = () => {
    if (!session) {
      setShowLoginModal(true);
    }
  };

  const handleTouchStart = () => {
    if (!session) {
      setShowLoginModal(true);
    }
  };

  return (
    <div>
        <Search onSearch={handleSearch}/>
            <>
                <ImageGrid list={filteredImages} setList={handleOnSort}>
                    {filteredImages.map((image) => (
                        <div key={image.id} draggable={!!session} onDragStart={handleDragStart} onTouchStart={handleTouchStart}>
                            {loading ? (
                                <div className="spinner"></div>
                            ) : (
                                <Image 
                                    src={image.url} 
                                    alt={image.title}
                                    width={400}
                                    height={250}
                                    onClick={handleImageClick}
                                    className={!session ? 'no-drag' : ''}
                                />
                            )}
                        </div>
                    ))}
                </ImageGrid>
            <LoginModal 
                isOpen={showLoginModal}
                onRequestClose={() => setShowLoginModal(false)}
            />
            </>
    </div>
  )
}

export default Gallery;
