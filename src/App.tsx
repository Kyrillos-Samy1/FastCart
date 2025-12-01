import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { reduxStore } from "./Redux/reduxStore";
import { Provider } from "react-redux";
import Guard from "./components/Guards/Guard";
import Loading from "./components/Loading Component/Loading";

//! Lazy imports
const AllProducts = lazy(
  () => import("./components/Product Component/AllProducts")
);
const NotFound = lazy(() => import("./components/NotFound Component/NotFound"));
const Layout = lazy(() => import("./components/Layout Component/Layout"));
const ContactUs = lazy(
  () => import("./components/Contact Us Component/Contact_Us")
);
const About = lazy(() => import("./components/About Component/About"));
const Home = lazy(() => import("./components/Home Component/Home"));
const Categories = lazy(
  () => import("./components/Categories Component/Categories")
);
const CategoryFiltration = lazy(
  () => import("./components/CategoryFiltration/CategoryFiltration")
);
const Product_Details = lazy(
  () => import("./components/Product Details Component/Product Details")
);
const Cart = lazy(() => import("./components/Cart Component/Cart"));
const Wishlist = lazy(() => import("./components/Wishlist Component/Wishlist"));
const Checkout = lazy(() => import("./components/Checkout Component/Checkout"));
const Login = lazy(() => import("./components/Login Component/Login"));
const Signup = lazy(() => import("./components/Signup Component/Signup"));
const Terms = lazy(() => import("./components/Terms Component/Terms"));
const Privacy = lazy(() => import("./components/Privacy Component/Privacy"));
const SearchResults = lazy(
  () => import("./components/Search Component/Search")
);

function App() {
  const date = new Date();
  const day = date.getDate();
  const year = date.getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const monthName = monthNames[date.getMonth()];
  const formattedDate = `${monthName} ${day}, ${year}`;

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Guard>
              <Home />
            </Guard>
          )
        },
        {
          path: "/products",
          element: (
            <Guard>
              <AllProducts />
            </Guard>
          )
        },
        {
          path: "/categories",
          element: (
            <Guard>
              <Categories />
            </Guard>
          )
        },
        {
          path: "/categories/:categoryName",
          element: (
            <Guard>
              <CategoryFiltration />
            </Guard>
          )
        },
        {
          path: "/productDetails/:id",
          element: (
            <Guard>
              <Product_Details />
            </Guard>
          )
        },
        {
          path: "/wishlist",
          element: (
            <Guard>
              <Wishlist />
            </Guard>
          )
        },
        {
          path: "/cart",
          element: (
            <Guard>
              <Cart />
            </Guard>
          )
        },
        {
          path: "/about",
          element: (
            <Guard>
              <About />
            </Guard>
          )
        },
        {
          path: "/checkout/cartId/:cartId",
          element: (
            <Guard>
              <Checkout />
            </Guard>
          )
        },
        {
          path: "*",
          element: <NotFound />
        },
        {
          path: "/contact",
          element: <ContactUs />
        },
        {
          path: "/terms",
          element: (
            <Terms
              companyName="FastCart"
              effectiveDate={`${formattedDate}`}
              contactEmail="kyrillossamy@outlook.com"
              contactPhone="+20-1271470997"
              contactAddress="Maadi, Cairo, Egypt"
            />
          )
        },
        {
          path: "/privacy",
          element: (
            <Privacy
              companyName="FastCart"
              effectiveDate={`${formattedDate}`}
              contactEmail="kyrillossamy@outlook.com"
              contactPhone="+20-1271470997"
              contactAddress="Maadi, Cairo, Egypt"
              termsOfServiceUrl="/terms"
            />
          )
        },
        {
          path: "/search",
          element: (
            <Guard>
              <SearchResults />
            </Guard>
          )
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    }
  ]);

  return (
    <>
      <Provider store={reduxStore}>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={route} />
        </Suspense>

        <ToastContainer position="top-right" />
      </Provider>
    </>
  );
}

export default App;
