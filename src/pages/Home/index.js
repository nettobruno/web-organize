// Dependencies
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import api from '../../services/api';

// Components
import SimpleInput from '../../components/SimpleInput';
import { showToast } from '../../components/Alert';
import Loader from '../../components/Loader';
import Modal from '../../components/Modal';

// Image
import iconSearch from '../../assets/icon-search.svg';
import iconTrash from '../../assets/icon-trash.svg';
import iconAccept from '../../assets/icon-accept.svg';

// Styles
import {
  Container,
  FormContent,
  BlockItems,
  Item,
  Check,
  ImageCheck,
  Title,
} from './styles';

function Home() {
  const { id } = useSelector((state) => state.auth);
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(false);
  const [modal, setModal] = useState(false);
  const [singleItem, setSingleItem] = useState(false);
  const formRef = useRef();

  async function getItems() {
    await api.get(`/items/index/${id}`).then((response) => {
      setItems(response.data);
    });
  }

  async function getSingleItem(itemId) {
    await api.get(`/items/show/${itemId}`).then((response) => {
      setSingleItem(response.data);
    });
  }

  async function removeItem(itemId) {
    setLoader(true);

    api
      .delete(`items/delete/${itemId}`)
      .then((response) => {
        showToast({
          type: 'success',
          message: response.data.message,
        });

        getItems(id);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        showToast({
          type: 'error',
          message: 'Algum erro aconteceu, tente novamente mais tarde',
        });
        setLoader(false);
      });
  }

  async function checkItem(itemId) {
    setLoader(true);

    api
      .put(`items/update/${itemId}`, {
        active: true,
      })
      .then(() => {
        getItems(id);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        showToast({
          type: 'error',
          message: 'Algum erro aconteceu, tente novamente mais tarde',
        });
        setLoader(false);
      });
  }

  async function removeCheckItem(itemId) {
    setLoader(true);

    api
      .put(`items/update/${itemId}`, {
        active: false,
      })
      .then(() => {
        getItems(id);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        showToast({
          type: 'error',
          message: 'Algum erro aconteceu, tente novamente mais tarde',
        });
        setLoader(false);
      });
  }

  async function createItems(data, { reset }) {
    setLoader(true);

    api
      .post(`items/store/${id}`, {
        title: data.create,
        active: true,
      })
      .then((response) => {
        if (response.data.error) {
          showToast({
            type: 'error',
            message: response.data.error,
          });
        }

        if (response.data.message) {
          showToast({
            type: 'success',
            message: response.data.message,
          });

          getItems(id);
        }

        reset();
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        showToast({
          type: 'error',
          message: 'Algum erro aconteceu, tente novamente mais tarde',
        });

        reset();
        setLoader(false);
      });
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Container>
      <div className="container">
        <Loader loader={loader} />

        <FormContent ref={formRef} onSubmit={createItems}>
          <SimpleInput name="create" placeholder="Criar" type="text" />
          <button type="submit">
            <img src={iconSearch} alt="" />
          </button>
        </FormContent>

        <BlockItems>
          {items.map((i) => (
            <Item key={i._id}>
              <Check
                onClick={() => {
                  if (i.active === true) {
                    removeCheckItem(i._id);
                  }

                  if (i.active === false) {
                    checkItem(i._id);
                  }
                }}
                checked={i.active === true}
              >
                <ImageCheck
                  checked={i.active === true}
                  src={iconAccept}
                  alt=""
                />
              </Check>
              <div className="block-text">
                <Title
                  checked={i.active === true}
                  onClick={() => {
                    getSingleItem(i._id);
                    setModal(true);
                    getItems();
                  }}
                >
                  {i.title}
                </Title>
              </div>
              <button
                className="search"
                type="submit"
                onClick={() => removeItem(i._id)}
              >
                <img src={iconTrash} alt="" />
              </button>

              <Modal
                setModal={setModal}
                modal={modal}
                setItems={setItems}
                item={singleItem}
              />
            </Item>
          ))}
        </BlockItems>
      </div>
    </Container>
  );
}

export default Home;
