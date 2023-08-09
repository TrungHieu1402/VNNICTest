import Home from "~/pages/Home";
import Agenda from "~/pages/Agenda";
import Workshop from "~/pages/Workshop";
import Contact from "~/pages/Contact";
import Photo from "~/pages/Photo";
import Register from "~/pages/Register";
import Speaker from "~/pages/Speaker";
import Sponsor from "~/pages/Sponsor";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/Agenda", component: Agenda },
  { path: "/Workshop", component: Workshop },
  { path: "/Contact", component: Contact },
  { path: "/Photo", component: Photo },
  { path: "/Register", component: Register },
  { path: "/Speaker", component: Speaker },
  { path: "/Sponsor", component: Sponsor },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
