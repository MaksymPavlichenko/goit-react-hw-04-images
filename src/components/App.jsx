import { useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [image, setImage] = useState('');
  const [query, setQuery] = useState('');

  const modalIsOpen = img => {
    setImage(img);
  };

  const modalIsClose = () => {
    setImage('');
  };

  const form = query => {
    setQuery(query);
  };

    return (
      <>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr0',
            gridGap: '16px',
            paddingBottom: '24px',
          }}
        >
          <Searchbar onSubmit={form} />
          <ImageGallery
            query={query}
            handlerOpenModal={modalIsOpen}
          />
          {image && <Modal image={image} onClose={modalIsClose} />}
        </div>
      </>
    );

}