import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import getEmotionCache from './getEmotionCache';

const cache = getEmotionCache();

export const wrapRootElement = ({ element }:any) => {
  return <CacheProvider value={cache}>{element}</CacheProvider>;
};