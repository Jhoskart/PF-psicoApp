import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    FormControl,
    FormLabel,
    Grid,
    Input,
    InputGroup,
    InputLeftAddon,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
  } from '@chakra-ui/react'
import { psychoFavs } from '../../../slice/psico/thunks.js';
import { getPsychoFavs } from '../../../slice/psico/thunks.js';
import { Link } from 'react-router-dom';
  
  function CompanySettings() {

    const idUserBack = useSelector(state => state.auth.authBack.id);
    const idUserGoogle = useSelector(state => state.auth.authGoogle.id);
    const psicologoFavs = useSelector(state => state.psicology.psychologiFavs);
    const dispatch = useDispatch();

    const idUser = idUserBack ? idUserBack : idUserGoogle;

    useEffect(() => {
      dispatch(getPsychoFavs(idUser));
    }, []);

    const deleteFavs = (idPsico) => {
      dispatch(psychoFavs('DELETE',idUser, idPsico));
      setTimeout(() => {
        dispatch(getPsychoFavs(idUser));
      },50);
    }

    return (
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
      >
        {
          psicologoFavs.favoritos?.length > 0 ? <div>
            {
              psicologoFavs.favoritos.map(fav => {
                return <>
                  <FormControl id="companyId">
                  <FormLabel>ID</FormLabel>
                  <InputGroup>
                    <InputLeftAddon color="gray.500">
                      <svg width="1em" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </InputLeftAddon>
                    <Input
                      focusBorderColor="brand.blue"
                      type="text"
                      placeholder="ID del psicologo"
                    />
                  </InputGroup>
                </FormControl>
                <FormControl id="companyName">
                  <FormLabel>Nombre</FormLabel>
                  <Link to={`/psico/${fav.idPsico}`}>
                    <Input focusBorderColor="brand.blue" type="text" placeholder="Nombre del psicologo" value={fav.psicofavorito}/>
                  </Link>
                </FormControl>
                <button onClick={() => deleteFavs(fav.idPsico)}>Eliminar</button>
                </> 
              })
            }
          </div> : <>Ningún psicologo en favoritos</>
        }

        {/* <FormControl>
          <FormLabel>Size</FormLabel>
          <NumberInput>
            <NumberInputField placeholder="6000" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl> */}
      </Grid>
    )
  }
  
  export default CompanySettings