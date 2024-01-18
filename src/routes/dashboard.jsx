import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Layout as DashboardLayout } from 'src/layouts/dashboard';

const OverviewPage = lazy(() => import('src/pages/dashboard/index'));

// Blog
const BlogPostListPage = lazy(() => import('src/pages/dashboard/blog/list'));
const BlogPostDetailPage = lazy(() => import('src/pages/dashboard/blog/detail'));
const BlogPostCreatePage = lazy(() => import('src/pages/dashboard/blog/create'));

const AccountPage = lazy(() => import('src/pages/dashboard/account'));
const ChatPage = lazy(() => import('src/pages/dashboard/chat'));

// Customer
const CustomerListPage = lazy(() => import('src/pages/dashboard/customers/list'));
const CustomerDetailPage = lazy(() => import('src/pages/dashboard/customers/detail'));
const CustomerEditPage = lazy(() => import('src/pages/dashboard/customers/edit'));

// Order
const OrderListPage = lazy(() => import('src/pages/dashboard/orders/list'));
const OrderDetailPage = lazy(() => import('src/pages/dashboard/orders/detail'));

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: (
      <DashboardLayout>
        <Suspense>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      {
        index: true,
        element: <OverviewPage />,
      },
      {
        path: 'account',
        element: <AccountPage />,
      },
      {
        path: 'chat',
        element: <ChatPage />,
      },
      {
        path: 'blog',
        children: [
          {
            index: true,
            element: <BlogPostListPage />,
          },
          {
            path: 'create',
            element: <BlogPostCreatePage />,
          },
          {
            path: ':postId',
            element: <BlogPostDetailPage />,
          },
          {
            path: 'edit/:postId',
            element: <BlogPostCreatePage />,
          },
        ],
      },
      {
        path: 'customers',
        children: [
          {
            index: true,
            element: <CustomerListPage />,
          },
          {
            path: ':customerId',
            element: <CustomerDetailPage />,
          },
          {
            path: ':customerId/edit',
            element: <CustomerEditPage />,
          },
        ],
      },

      {
        path: 'orders',
        children: [
          {
            index: true,
            element: <OrderListPage />,
          },
          {
            path: ':orderId',
            element: <OrderDetailPage />,
          },
        ],
      },
    ],
  },
];
