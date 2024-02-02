import { CartReducer } from "./reducer";
import {configureStore} from '@reduxjs/toolkit'

const defaultState = {cart:[]};

export const store = configureStore({reducer:CartReducer, preloadedState: defaultState})