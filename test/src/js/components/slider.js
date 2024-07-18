// Подключение свайпера
import Swiper, { Navigation, Pagination, Scrollbar } from "swiper";
Swiper.use([Navigation, Pagination, Scrollbar]);

const swiper = new Swiper('.main-banner__content', {
  slidesPerView: "auto",
});
