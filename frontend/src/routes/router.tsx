import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';
import { MainLayout } from '../views/MainLayout';
import { LoadingScreen } from '../components/LoadingScreen';

const Dashboard = lazy(() => import('../views/Dashboard'));
const Onboarding = lazy(() => import('../views/Onboarding'));
const Activity = lazy(() => import('../views/Activity'));
const Rewards = lazy(() => import('../views/Rewards'));
const Settings = lazy(() => import('../views/Settings'));
const Admin = lazy(() => import('../views/Admin'));

const rootRoute = createRootRoute({
  component: () => (
    <Suspense fallback={<LoadingScreen />}>
      <MainLayout />
    </Suspense>
  ),
});

const onboardingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <Suspense fallback={<LoadingScreen />}>
      <Onboarding />
    </Suspense>
  ),
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'dashboard',
  component: () => (
    <Suspense fallback={<LoadingScreen />}>
      <Dashboard />
    </Suspense>
  ),
});

const activityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'activity',
  component: () => (
    <Suspense fallback={<LoadingScreen />}>
      <Activity />
    </Suspense>
  ),
});

const rewardsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'rewards',
  component: () => (
    <Suspense fallback={<LoadingScreen />}>
      <Rewards />
    </Suspense>
  ),
});

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'settings',
  component: () => (
    <Suspense fallback={<LoadingScreen />}>
      <Settings />
    </Suspense>
  ),
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'admin',
  component: () => (
    <Suspense fallback={<LoadingScreen />}>
      <Admin />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([
  onboardingRoute,
  dashboardRoute,
  activityRoute,
  rewardsRoute,
  settingsRoute,
  adminRoute,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
