import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from '@crema/context/AppContextProvider';
import AppThemeProvider from '@crema/context/AppThemeProvider';
import AppLocaleProvider from '@crema/context/AppLocaleProvider';
import AppAuthProvider from './core/AppAuthProvider';
import AuthRoutes from '@crema/components/AuthRoutes';
import AppLayout from './core/AppLayout';
import '@crema/mockapi';
import { GlobalStyles } from './core/theme/GlobalStyle';
import { Normalize } from 'styled-normalize';
// ví dụ file này giwof code thêm chức năng vào đây chẳng hạn đó như t comment này cũng à thay đổi nội dung file ok
// giờ push file lên
// nó báo là k có gì thay đổi
// vì m chưa commit
const App = () => (
  <AppContextProvider>
    <AppThemeProvider>
      <AppLocaleProvider>
        <BrowserRouter>
          <AppAuthProvider>
            <AuthRoutes>
              <GlobalStyles />
              <Normalize />
              <AppLayout />
            </AuthRoutes>
          </AppAuthProvider>
        </BrowserRouter>
      </AppLocaleProvider>
    </AppThemeProvider>
  </AppContextProvider>
);
// giả sử t code vào đây đoạn này
export default App;
