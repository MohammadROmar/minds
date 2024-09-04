import { lazy, Suspense } from "react";

import LoadingFallback from "./components/LoadingFallback/LoadingFallback.tsx";

const MainHeader = lazy(() => import("./components/MainHeader/MainHeader.tsx"));
const MainFooter = lazy(() => import("./components/MainFooter/MainFooter.tsx"));
const LandingPage = lazy(() => import("./pages/Landing/Landing.tsx"));

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <MainHeader />
      <main className="main">
        <LandingPage />
      </main>
      <MainFooter />
    </Suspense>
  );
}
