import calendar from './assets/calendar.png';
import check from './assets/check.png';
import sun from './assets/sun.png';
import suns from './assets/suns.png';

export const data = {
  minRequest: 1_665,
  maxRequest: 10_000,
  titleName: 'Эко-отель "Счастье"',
  titleType: 'Проектный ЦФА.',
  titlePeriod: '1-2 года',
  p1: 'Проектный ЦФА — это инвестиции в строительство и развитие инфраструктуры соответствующего объекта в целях получения дохода от продажи реализованного объекта или со сдачи объекта в аренду.',
  p2: 'Покупая Проектный ЦФА, вы получаете права на финансовые результаты от будущей продажи реализованного объекта конечному собственнику или арендные доходы от объекта, переданного в операционное управление профильной управляющей компании. У вас не возникает обременений по строительству, содержанию и управлению объектом – все сделает девелоперский холдинг.',
  p3: 'Проектный ЦФА – это инновационный продукт, выпускаемый в формате ЦФА.',
  cfaNumber: 'YKNT-1-DTD-092024-00073',
  cfaPrice: '1500 ₽',
  cfaVolume: 'от 1 500 000 ₽ до 15 000 000 ₽',
  cfaVolumeM2: 'от 10 м2 до 100 м2',
  cfaPeriodPayment: 'Интервальная',
  cfaDuration: '1 - 2 года (проектная и арендная фазы)',
  hideSellDate: false,

  imgRows: [
    {
      title: 'Коммерческий проект "под ключ"',
      subtitle: 'Проектное партнёрство с профильным девелопером',
      img: sun,
    },
    {
      title: 'Ожидаемая доходность',
      subtitle: '20 - 22% годовых',
      img: suns,
    },
    {
      title: 'Комфортный срок',
      subtitle: 'Срок инвестиций 1-2 года',
      img: calendar,
    },
    {
      title: 'Условное досрочное погашение',
      subtitle: 'Возможность выхода из проекта по завершению проектной фазы',
      img: check,
    },
  ],
  emitment: 'ООО "УК "ЯХОНТЫ" ОТЕЛИ.РУ"',
  address: '143513, Московская Область, г.о. Истра, д Лечищево, тер. Яхонты Истра, зд. 2, помещ. 5',
  site: 'https://yahonty.ru/',
};
