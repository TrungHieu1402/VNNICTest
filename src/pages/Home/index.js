import { Carousel } from "flowbite";
import type {
  CarouselItem,
  CarouselOptions,
  CarouselInterface,
} from "flowbite";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

export default function Home() {
  const { t } = useTranslation();

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="m-0 py-4 w-screen flex justify-center">
      <div className="w-4/5">
        <div className="mb-4 lg:flex w-full lg:justify-between lg:h-[400px]">
          <div className="lg:w-3/5 w-full h-[400px] lg:h-full mb-2 lg:mb-0">
            <div
              id="default-carousel"
              className="relative w-full h-full"
              data-carousel="slide"
            >
              <div className="relative h-full overflow-hidden rounded-lg ">
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="https://2022.vnix-nog.vn/sites/default/files/styles/anh_trang_chu/public/sites/default/files/homepage_img/20180824-img_8916.jpg?itok=JpJpU_vo"
                    className="absolute block h-full w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>

                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="https://2022.vnix-nog.vn/sites/default/files/styles/anh_trang_chu/public/sites/default/files/homepage_img/nog31.jpg?itok=ECc96sOT"
                    className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>

                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="https://2022.vnix-nog.vn/sites/default/files/styles/anh_trang_chu/public/sites/default/files/homepage_img/vnixnog10_2.jpg?itok=BVd4cIuh"
                    className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>

                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="https://2022.vnix-nog.vn/sites/default/files/styles/anh_trang_chu/public/sites/default/files/homepage_img/1.jpg?itok=TMhs2FJn"
                    className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>

                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="https://2022.vnix-nog.vn/sites/default/files/styles/anh_trang_chu/public/sites/default/files/homepage_img/vnixnog4.jpg?itok=R-9_mDC2"
                    className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
              </div>

              <div className="absolute z-30 flex space-x-3  -translate-x-1/2 bottom-5 left-1/2">
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 4"
                  data-carousel-slide-to="3"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 5"
                  data-carousel-slide-to="4"
                ></button>
              </div>
              <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>

          <div className="lg:w-2/5 w-full lg:pl-4 h-full overflow-auto ">
            <div className="flex justify-center w-full py-[18px] border-[1px] border-[#dddddd]">
              <p className="text-[#f26c4f] font-bold text-[18px] ">
                {t("conference")} VNIX-NOG
              </p>
            </div>
            <div className="w-full flex justify-between border-[1px] border-[#dddddd]">
              <div className="p-2  w-1/4">
                <a href="https://2021.vnix-nog.vn/" className="text-[#337ab7]">
                  {t("conference")} VNIX-NOG 2021
                </a>
              </div>
              <div className="p-2  w-1/4">
                <p>28-29/9/2021</p>
              </div>
              <div className="p-2  w-2/4">
                <p>{t("event1")}</p>
              </div>
            </div>
            <div className="w-full flex justify-between border-[1px] border-[#dddddd]">
              <div className="p-2 w-1/4">
                <a href="https://2020.vnix-nog.vn/" className="text-[#337ab7]">
                  {t("conference")} VNIX-NOG 2020
                </a>
              </div>
              <div className="p-2 w-1/4">
                <p>30/9/2020</p>
              </div>
              <div className="p-2 w-2/4">
                <p>{t("event2")}</p>
              </div>
            </div>
            <div className="w-full flex justify-between border-[1px] border-[#dddddd]">
              <div className="p-2 w-1/4">
                <a href="https://2019.vnix-nog.vn/" className="text-[#337ab7]">
                  {t("conference")} VNIX-NOG 2019
                </a>
              </div>
              <div className="p-2 w-1/4">
                <p>22-23/8/2019</p>
              </div>
              <div className="p-2 w-2/4">
                <p>{t("event3")}</p>
              </div>
            </div>
            <div className="w-full flex justify-between border-[1px] border-[#dddddd]">
              <div className="p-2 w-1/4">
                <a href="https://2018.vnix-nog.vn/" className="text-[#337ab7]">
                  {t("conference")} VNIX-NOG 2018
                </a>
              </div>
              <div className="p-2 w-1/4">
                <p>24/8/2018</p>
              </div>
              <div className="p-2 w-2/4">
                <p>{t("event4")}</p>
              </div>
            </div>
            <div className="w-full flex justify-between border-[1px] border-[#dddddd]">
              <div className="p-2 w-1/4">
                <a href="https://2017.vnix-nog.vn/" className="text-[#337ab7]">
                  {t("conference")} VNIX-NOG 2017
                </a>
              </div>
              <div className="p-2 w-1/4">
                <p>25/8/2017</p>
              </div>
              <div className="p-2 w-2/4">
                <p>{t("event5")}</p>
              </div>
            </div>
            <div className="w-full flex justify-between border-[1px] border-[#dddddd]">
              <div className="p-2 w-1/4">
                <a href="https://2016.vnix-nog.vn/" className="text-[#337ab7]">
                  {t("conference")} VNIX-NOG 2016
                </a>
              </div>
              <div className="p-2 w-1/4">
                <p>23-24/11/2016</p>
              </div>
              <div className="p-2 w-2/4">
                <p>{t("event6")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 w-full border-[1px] rounded-2xl border-[#dddddd]">
          <div className="px-2 py-2 bg-[#133c8b] border-[1px] rounded-t-2xl border-[#dddddd]">
            <p className="font-bold text-[18px] text-white  ">{t("sponsor")}</p>
          </div>
          <div className=" flex justify-between">
            <div className="container">
              <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
              />

              <style>{cssstyle}</style>
              <Slider {...settings}>
                <div className="relative text-center lg:opacity-70 lg:hover:opacity-100 cursor-pointer p-10">
                  <a
                    className="flex justify-center "
                    href="https://www.vnnic.vn/"
                  >
                    <img
                      alt="description of image"
                      className="pb-1 h-24"
                      src="https://2022.vnix-nog.vn/sites/default/files/styles/anh_don_vi_tai_tro_tren_trang_chu/public/vnnic-logo-01.png?itok=9nh4JNCR"
                    />
                  </a>
                  <p className="font-semibold ">{t("organizationalunits")}</p>
                </div>
                <div className="relative text-center lg:opacity-70 lg:hover:opacity-100 cursor-pointer p-10 ">
                  <a
                    className="flex justify-center"
                    href="https://www.vnnic.vn/"
                  >
                    <img
                      alt="description of image"
                      className="pb-1 h-24"
                      src="https://2022.vnix-nog.vn/sites/default/files/styles/anh_don_vi_tai_tro_tren_trang_chu/public/isoc-dark-rgb_logo_2016-08-01_en_final_v01_0.png?itok=5NkiI-zQ"
                    />
                  </a>
                  <p className="font-semibold ">{t("GoldSponsor")}</p>
                </div>
                <div className="relative text-center lg:opacity-70 lg:hover:opacity-100 cursor-pointer p-10 ">
                  <a
                    className="flex justify-center"
                    href="https://www.vnnic.vn/"
                  >
                    <img
                      alt="description of image"
                      className="pb-1 h-24"
                      src="https://2022.vnix-nog.vn/sites/default/files/styles/anh_don_vi_tai_tro_tren_trang_chu/public/apnic-formal-logo_web.jpg?itok=9q3R4ucm"
                    />
                  </a>
                  <p className="font-semibold ">{t("SilverSponsor")}</p>
                </div>
                <div className="relative text-center lg:opacity-70 lg:hover:opacity-100 cursor-pointer p-10 ">
                  <a
                    className="flex justify-center"
                    href="https://www.vnnic.vn/"
                  >
                    <img
                      alt="description of image"
                      className="pb-1 h-24"
                      src="https://2022.vnix-nog.vn/sites/default/files/styles/anh_don_vi_tai_tro_tren_trang_chu/public/bbix_converted3.png?itok=e9mGdyid"
                    />
                  </a>
                  <p className="font-semibold ">{t("BronzeSponsor")}</p>
                </div>
                <div className="relative text-center lg:opacity-70 lg:hover:opacity-100 cursor-pointer p-10 ">
                  <a
                    className="flex justify-center"
                    href="https://www.vnnic.vn/"
                  >
                    <img
                      alt="description of image"
                      className="pb-1 h-24"
                      src="https://2022.vnix-nog.vn/sites/default/files/styles/anh_don_vi_tai_tro_tren_trang_chu/public/viettel_networks-01.jpg?itok=MjONXFcI"
                    />
                  </a>
                  <p className="font-semibold ">{t("ItemSponsor")}</p>
                </div>
                <div className="relative text-center lg:opacity-70 lg:hover:opacity-100 cursor-pointer p-10 ">
                  <a
                    className="flex justify-center"
                    href="https://www.vnnic.vn/"
                  >
                    <img
                      alt="description of image"
                      className="pb-1 h-24"
                      src="https://2022.vnix-nog.vn/sites/default/files/styles/anh_don_vi_tai_tro_tren_trang_chu/public/83c198c1f673322d6b62.jpg?itok=isL3kQaK"
                    />
                  </a>
                  <p className="font-semibold ">{t("ItemSponsor")}</p>
                </div>
                <div className="relative text-center lg:opacity-70 lg:hover:opacity-100 cursor-pointer p-10 ">
                  <a
                    className="flex justify-center"
                    href="https://www.vnnic.vn/"
                  >
                    <img
                      alt="description of image"
                      className="pb-1 h-24"
                      src="https://2022.vnix-nog.vn/sites/default/files/styles/anh_don_vi_tai_tro_tren_trang_chu/public/netnam_0_0.png?itok=0NNTzs0J"
                    />
                  </a>
                  <p className="font-semibold break-all">
                    {t("internetSponsor")}
                  </p>
                </div>
                <div className="relative text-center lg:opacity-70 lg:hover:opacity-100 cursor-pointer p-10 ">
                  <a
                    className="flex justify-center"
                    href="https://www.vnnic.vn/"
                  >
                    <img
                      alt="description of image"
                      className="pb-1 h-24"
                      src="https://2022.vnix-nog.vn/sites/default/files/styles/anh_don_vi_tai_tro_tren_trang_chu/public/vnnic-logo-01.png?itok=9nh4JNCR"
                    />
                  </a>
                  <p className="font-semibold ">{t("organizationalunits")}</p>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div className="mb-4 w-full border-[1px] rounded-2xl border-[#dddddd]">
          <div className="px-2 py-2 bg-[#cb3c34] border-[1px] rounded-t-2xl border-[#dddddd]">
            <p className="font-bold text-[18px] text-white  ">{t("speaker")}</p>
          </div>
          <div className=" flex justify-between">
            <div className="container">
              <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
              />
              <style>{cssstyle}</style>
              <Slider {...settings}>
                <div className="text-center cursor-pointer px-14 py-10">
                  <div className="w-full flex justify-center">
                    <img
                      alt="description of image"
                      className="pb-1 rounded-full w-[140px] "
                      src="https://2022.vnix-nog.vn/sites/default/files/styles/_nh_di_n_gi__vu_ng/public/17nam-truonggiang_1.jpg?itok=NxSJjFnC"
                    />
                  </div>
                  <p className="font-semibold pb-1 break-all">
                    {t("sir")} Nguyễn Trường Giang
                  </p>
                  <p className="font-semibold">VNNIC</p>
                </div>
                <div className="text-center cursor-pointer px-14 py-10">
                  <div className="w-full flex justify-center">
                    <img
                      alt="description of image"
                      className="pb-1 rounded-full w-[140px] "
                      src="https://2022.vnix-nog.vn/sites/default/files/styles/_nh_di_n_gi__vu_ng/public/nava-ipv6.png?itok=OoJe_97W"
                    />
                  </div>
                  <p className="font-semibold pb-1 break-all">
                    {t("sir")} Navaneethan C. Arjuman
                  </p>
                  <p className="font-semibold">NLTVC Education</p>
                </div>
                <div className="text-center cursor-pointer px-14 py-10">
                  <div className="w-full flex justify-center">
                    <img
                      alt="description of image"
                      className="pb-1 rounded-full w-[140px]  "
                      src="https://2022.vnix-nog.vn/sites/default/files/styles/_nh_di_n_gi__vu_ng/public/binh-lam-1534x1536.jpeg?itok=bEAkNGrR"
                    />
                  </div>
                  <p className="font-semibold pb-1 break-all">{t("sir")} Binh Lam</p>
                  <p className="font-semibold">NTT</p>
                </div>
                <div className="text-center cursor-pointer px-14 py-10">
                  <div className="w-full flex justify-center">
                    <img
                      alt="description of image"
                      className="pb-1 rounded-full w-[140px]  "
                      src="https://2022.vnix-nog.vn/sites/default/files/styles/_nh_di_n_gi__vu_ng/public/aftab-siddiqui.jpeg?itok=3Th1oVuR"
                    />
                  </div>
                  <p className="font-semibold pb-1 break-all">
                    {t("sir")} Aftab Siddiqui
                  </p>
                  <p className="font-semibold">ISOC</p>
                </div>
                <div className="text-center cursor-pointer px-14 py-10">
                  <div className="w-full flex justify-center">
                    <img
                      alt="description of image"
                      className="pb-1 rounded-full w-[140px]  "
                      src="https://2022.vnix-nog.vn/sites/default/files/styles/_nh_di_n_gi__vu_ng/public/tri-vnnic.jpg?itok=ONqGK-uc"
                    />
                  </div>
                  <p className="font-semibold pb-1 break-all">
                    {t("sir")} Nguyễn Văn Trí
                  </p>
                  <p className="font-semibold">ISOC</p>
                </div>
                <div className="text-center cursor-pointer px-14 py-10">
                  <div className="w-full flex justify-center">
                    <img
                      alt="description of image"
                      className="pb-1 rounded-full w-[140px]  "
                      src="https://2022.vnix-nog.vn/sites/default/files/styles/_nh_di_n_gi__vu_ng/public/toyama-2017-01.jpg?itok=fJmQprHb"
                    />
                  </div>
                  <p className="font-semibold pb-1 break-all">
                  {t("sir")} Katsuyasu Toyama
                  </p>
                  <p className="font-semibold">APIX</p>
                </div>
                <div className="text-center cursor-pointer px-14 py-10">
                  <div className="w-full flex justify-center">
                    <img
                      alt="description of image"
                      className="pb-1 rounded-full w-[140px]  "
                      src="https://2022.vnix-nog.vn/sites/default/files/styles/_nh_di_n_gi__vu_ng/public/loi-lv_0.jpg?itok=1Q2ZohUu"
                    />
                  </div>
                  <p className="font-semibold pb-1 break-all">
                    {t("sir")} Trần Văn Lợi
                  </p>
                  <p className="font-semibold">Long Van</p>
                </div>
                <div className="text-center cursor-pointer px-14 py-10">
                  <div className="w-full flex justify-center">
                    <img
                      alt="description of image"
                      className="pb-1 rounded-full w-[140px]  "
                      src="https://2022.vnix-nog.vn/sites/default/files/styles/_nh_di_n_gi__vu_ng/public/truong-vnnic.jpg?itok=vQWg93WN"
                    />
                  </div>
                  <p className="font-semibold pb-1 break-all">
                    {t("sir")} Nguyễn Xuân Trường
                  </p>
                  <p className="font-semibold">VNNIC</p>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div className="mb-4 lg:flex lg:justify-between ">
          <div className="lg:w-2/5 w-full mb-4 lg:mb-0">
            <img
              alt="description of image"
              className="rounded-xl"
              src="https://2022.vnix-nog.vn/sites/default/files/quynhon_diadiem1.jpg"
            />
          </div>

          <div className="lg:w-3/5 lg:pl-4 w-full">
            <div className="px-4 py-3 bg-[#e7edf5] rounded-xl">
              <div className="flex justify-center w-full p-3 ">
                <p className=" font-bold text-[18px] ">
                  {t("conference")} VNIX-NOG
                </p>
              </div>
              <div>
                <p>{t("firstabout")}</p>
                <br></br>
                <p>{t("secondabout")}</p>
                <br></br>
                <p>{t("endabout")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[440px]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

const cssstyle = `
.container {
  margin: 0 auto;
  padding: 0px 40px 24px 40px;
  width: full;
}

.slick-next:before, .slick-prev:before {
    color: #000;
}
`;
