import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Chip from '@mui/material/Chip';
import SvgIcon from '@mui/material/SvgIcon';
import MessageChatSquareIcon from 'src/icons/untitled-ui/duocolor/message-chat-square';

import styled from 'styled-components';
import HomeSmileIcon from 'src/icons/untitled-ui/duocolor/home-smile';
import LayoutAlt02Icon from 'src/icons/untitled-ui/duocolor/layout-alt-02';
import LineChartUp04Icon from 'src/icons/untitled-ui/duocolor/line-chart-up-04';
import Lock01Icon from 'src/icons/untitled-ui/duocolor/lock-01';
import Users03Icon from 'src/icons/untitled-ui/duocolor/users-03';
import XSquareIcon from 'src/icons/untitled-ui/duocolor/x-square';
import { tokens } from 'src/locales/tokens';
import { paths } from 'src/paths';
import Bell01Icon from '@untitled-ui/icons-react/build/esm/Bell01';
import { UserCircle } from '@untitled-ui/icons-react';
import { notifications } from './notifications-button/notifications';

const SidebarItem = styled.div`
  margin-bottom: 10px; /* Adjust the value as needed */
`;


export const useSections = () => {
  const { t } = useTranslation();

  return useMemo(() => {
    return [
      {
        items: [
          {
            title: 'Home',
            path: paths.dashboard.index,
            icon: (
              <SvgIcon fontSize="small">
                <HomeSmileIcon />
              </SvgIcon>
            ),
          },

          {
            title: 'Notifications',
            path: paths.dashboard.notifications,
            icon: (
              <SvgIcon fontSize="small">
                <Bell01Icon />
              </SvgIcon>
            ),
          },

           {
             title: 'Account',
             path: paths.dashboard.account,
             icon: (
               <SvgIcon fontSize="small">
                 <HomeSmileIcon />
               </SvgIcon>
             ),
           },

           {
            title: 'Chat',
            path: paths.dashboard.chat,
            icon: (
              <SvgIcon fontSize="small">
                <MessageChatSquareIcon />
              </SvgIcon>
            ),
          },
          {
            title: 'Blog',
            path: paths.dashboard.blog.index,
            icon: (
              <SvgIcon fontSize="small">
                <LayoutAlt02Icon />
              </SvgIcon>
            ),
          },
          // {
          //   title: t(tokens.nav.auth),
          //   icon: (
          //     <SvgIcon fontSize="small">
          //       <Lock01Icon />
          //     </SvgIcon>
          //   ),
          //   items: [
          //     {
          //       title: t(tokens.nav.login),
          //       items: [
          //         {
          //           title: 'Classic',
          //           path: paths.authDemo.login.classic,
          //         },
          //         {
          //           title: 'Modern',
          //           path: paths.authDemo.login.modern,
          //         },
          //       ],
          //     },
          //     {
          //       title: t(tokens.nav.register),
          //       items: [
          //         {
          //           title: 'Classic',
          //           path: paths.authDemo.register.classic,
          //         },
          //         {
          //           title: 'Modern',
          //           path: paths.authDemo.register.modern,
          //         },
          //       ],
          //     },
          //     {
          //       title: t(tokens.nav.forgotPassword),
          //       items: [
          //         {
          //           title: 'Classic',
          //           path: paths.authDemo.forgotPassword.classic,
          //         },
          //         {
          //           title: 'Modern',
          //           path: paths.authDemo.forgotPassword.modern,
          //         },
          //       ],
          //     },
          //     {
          //       title: t(tokens.nav.resetPassword),
          //       items: [
          //         {
          //           title: 'Classic',
          //           path: paths.authDemo.resetPassword.classic,
          //         },
          //         {
          //           title: 'Modern',
          //           path: paths.authDemo.resetPassword.modern,
          //         },
          //       ],
          //     },
          //     {
          //       title: t(tokens.nav.verifyCode),
          //       items: [
          //         {
          //           title: 'Classic',
          //           path: paths.authDemo.verifyCode.classic,
          //         },
          //         {
          //           title: 'Modern',
          //           path: paths.authDemo.verifyCode.modern,
          //         },
          //       ],
          //     },
          //   ],
          // },
        ],
      },
    ];
  }, [t]);
};
