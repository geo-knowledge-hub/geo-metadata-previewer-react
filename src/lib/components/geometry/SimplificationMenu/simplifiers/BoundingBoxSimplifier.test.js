/*
 * This file is part of GEO-Metadata-Previewer.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Metadata-Previewer is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';

import { Menu } from 'semantic-ui-react';

import { render } from '@tests/setup';

import { BoundingBoxSimplifier } from './BoundingBoxSimplifier';
import { MenuContextProvider } from '../SimplificationMenuContext';

describe('BoundingBoxSimplifier tests', () => {
  describe('Render tests', () => {
    it('should render without crashing', () => {
      render(
        <>
          <MenuContextProvider value={{ menu: {}, data: {} }}>
            <Menu>
              <BoundingBoxSimplifier />
            </Menu>
          </MenuContextProvider>
        </>
      );
    });
  });
});
