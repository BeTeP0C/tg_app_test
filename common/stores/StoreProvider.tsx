"use client"
import React, { createContext, ReactNode } from 'react';
import RootStore from './rootStore';
import {  MobXProviderContext } from "mobx-react"

const rootStore = new RootStore ()

export const StoreContext = createContext<RootStore>(rootStore)

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MobXProviderContext.Provider value={rootStore}>
      {children}
    </MobXProviderContext.Provider>
  );
};
