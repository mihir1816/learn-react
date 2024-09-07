import {configureStore } from '@reduxjs/toolkit'
import historyreducer from './Slice'

export const store = configureStore({
    reducer : historyreducer
}) 