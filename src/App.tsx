import {
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Root from "./pages/Root";
import HomePage from "./pages/HomePage";

import ChichenItza from "./pages/ChichenItza";
import ChichenItzaLocation from "./locationPages/ChichenItzaLocation";
import ChristTheRedeemer from "./pages/ChristTheRedeemer";
import ChristTheRedeemerLocation from "./locationPages/ChristTheRedeemerLocation";
import Colosseum from "./pages/Colosseum";
import ColosseumLocation from "./locationPages/ColosseumLocation";
import GizaPyramids from "./pages/GizaPyramids";
import GizaPyramidsLocation from "./locationPages/GizaPyramidsLocation";
import GreatWallOfChina from "./pages/GreatWallOfChina";
import GreatWallOfChinaLocation from "./locationPages/GreatWallOfChinaLocation";
import MachuPicchu from "./pages/MachuPicchu";
import MachuPicchuLocation from "./locationPages/MachuPicchuLocation";
import Petra from "./pages/Petra";
import PetraLocation from "./locationPages/PetraLocation";
import TajMahal from "./pages/TajMahal";
import TajMahalLocation from "./locationPages/TajMahalLocation";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="chichen-itza">
        <Route index element={<ChichenItza />} />
        <Route path="location" element={<ChichenItzaLocation />} />
      </Route>
      <Route path="christ-the-redeemer">
        <Route index element={<ChristTheRedeemer />} />
        <Route path="location" element={<ChristTheRedeemerLocation />} />
      </Route>
      <Route path="colosseum">
        <Route index element={<Colosseum />} />
        <Route path="location" element={<ColosseumLocation />} />
      </Route>
      <Route path="giza-pyramids">
        <Route index element={<GizaPyramids />} />
        <Route path="location" element={<GizaPyramidsLocation />} />
      </Route>
      <Route path="great-wall-of-china">
        <Route index element={<GreatWallOfChina />} />
        <Route path="location" element={<GreatWallOfChinaLocation />} />
      </Route>
      <Route path="machu-picchu">
        <Route index element={<MachuPicchu />} />
        <Route path="location" element={<MachuPicchuLocation />} />
      </Route>
      <Route path="petra">
        <Route index element={<Petra />} />
        <Route path="location" element={<PetraLocation />} />
      </Route>
      <Route path="taj-mahal">
        <Route index element={<TajMahal />} />
        <Route path="location" element={<TajMahalLocation />} />
      </Route>
    </Route>
  ),
  { basename: "/new-wonders-of-the-world" }
);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
