import { FC } from 'react';
import { BarLoader } from 'react-spinners';
import { Overlay } from '../utils/styles';

export const Spinner = () => <Overlay><BarLoader color="white" /></Overlay>;
