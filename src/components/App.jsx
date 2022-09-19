import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    image: '',
    query: '',
  };

  modalIsOpen = img => {
    this.setState({ image: img });
  };

  modalIsClose = () => {
    this.setState({ image: '' });
  };

  form = query => {
    this.setState({ query });
  };

  render() {
    const { image, query } = this.state;
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
          <Searchbar onSubmit={this.form} />
          <ImageGallery
            query={query}
            handlerOpenModal={this.modalIsOpen}
          />
          {image && <Modal image={image} onClose={this.modalIsClose} />}
        </div>
      </>
    );
  }
}