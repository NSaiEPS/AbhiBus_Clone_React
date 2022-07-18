import {configureStore}  from '@reduxjs/toolkit'
import loginreducer from './Slices'

export const store=configureStore({
    reducer:{
        // loginreducer:
        data:loginreducer

    }
})