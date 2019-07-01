Vue.component('tabButton', {
  props: {
    buttonName: String
  },
  template: `
  <button @click='buttonPressed' class='w3-button'>{{buttonName}}</button>
  `,
  methods: {
    buttonPressed() {
      this.$emit('menu-select', this.buttonName)
    }
  }
})
Vue.component('macaron', {
  props: {
    krMenu: String,
    engMenu: String,
    path: String
  },
  template: `
  <div class="w3-center">
    <img @click='colorChange'  :src=path :alt=krMenu :class = gray :isSoldout = false class="w3-image" style="width:100%" >
    <p class="w3-large">{{krMenu}}<br>({{engMenu}})</p>
  </div>
  `,
  data() {
    return {
      // krMenu : '테스트',
      // engMenu : 'testMenu',
      // img: 'assets/menu6.png',
      gray: ''
    }
  },
  methods: {
    colorChange() {
      if (!this.isSoldout) {
        this.gray = 'w3-grayscale-max'
        this.isSoldout = true
        this.$emit('sold-out', {
          krMenu: this.krMenu,
          engMenu: this.engMenu
        })
      } else {
        this.gray = ''
        this.isSoldout = false
        this.$emit('on-sale')
      }
    }
  }
})

Vue.component('beverage', {
  props: {
    krMenu: String,
    engMenu: String,
    price: String
  },
  template: `
  <div class="w3-center">
  <span class="w3-large">{{krMenu}}  </span>
  <span class="w3-large">({{engMenu}})  </span>
  <span class="w3-large">{{price}}</span>
  </div>
  `
})

var app = new Vue({
  el: '#app',
  methods: {
    pushList(menuName) {
      this.soldOutMenus.push(menuName)
    },
    popList(menuName) {
      this.soldOutMenus.pop(menuName)
    },
    menuChange(id) {
      //console.log(id)
      if (id === '마카롱') {
        this.macaronMenu = true
        this.beverageMenu = false
      }
      if (id === '음료') {
        this.beverageMenu = true
        this.macaronMenu = false
      }
    }
  },
  data: {
    macaronMenu: true,
    beverageMenu: false,
    Mmenus: [{
        krMenu: '앙쑥(2.2)',
        engMenu: 'Sediment wormwood',
        path: 'assets/menu1.png'
      },
      {
        krMenu: '라즈베리',
        engMenu: 'Raspberry',
        path: 'assets/menu2.png'
      },
      {
        krMenu: '얼그레이 밀크티',
        engMenu: 'Earlgrey Milk tea',
        path: 'assets/menu3.png'
      },
      {
        krMenu: '다크가나슈',
        engMenu: 'Darkganache',
        path: 'assets/menu4.png'
      },
      {
        krMenu: '오레오',
        engMenu: 'Oreo',
        path: 'assets/menu5.png'
      },
      {
        krMenu: '쏠티 캐러멜',
        engMenu: 'Salty Caramel',
        path: 'assets/menu6.png'
      }
    ],
    soldOutMenus: [],
    Bmenus: [{
        krMenu: '에스프레소',
        engMenu: 'Espresso',
        price: 3.0
      },
      {
        krMenu: '아메리카노',
        engMenu: 'Americano',
        price: 3.0
      },
      {
        krMenu: '카페라테',
        engMenu: 'Cafe Latte',
        price: 3.5
      },
      {
        krMenu: '바닐라라테',
        engMenu: 'Vanilla Latte',
        price: 4.0
      },
      {
        krMenu: '플랫화이트',
        engMenu: 'Flat White',
        price: 3.5
      },
      {
        krMenu: '샷추가',
        engMenu: 'add shot',
        price: 1.0
      },
      {
        krMenu: '딸기라테',
        engMenu: 'Strawberry Latte',
        price: 4.0
      },
      {
        krMenu: '말차라테',
        engMenu: 'Matcha Latte',
        price: 4.0
      },
      {
        krMenu: '히비스커스 티/에이드',
        engMenu: 'Hibiscus Tea/Ade',
        price: 4.5
      },
      {
        krMenu: '월간 클류티',
        engMenu: 'Monthly Klyuch Tea',
        price: 4.0
      },
      {
      krMenu: '카모마일',
        engMenu: 'Chamomile Tea',
        price: 4.0
      },
      {
        krMenu: '카모마일 레몬',
        engMenu: 'Chamomile Lemon Tea',
        price: 4.5
      },
      {
        krMenu: '생맥주',
        engMenu: 'Lager',
        price: 4.0
      },
      {
        krMenu: '유자맥주',
        engMenu: 'Citron Lager',
        price: 4.5
      },
      {
        krMenu: '유자보드카',
        engMenu: 'Citron Vodka',
        price: 5.5
      },
      {
        krMenu: '깔루아밀크',
        engMenu: 'Kahlua Milk',
        price: 5.5
      },
      {
        krMenu: '럼 추가',
        engMenu: 'add Rum',
        price: 1.5
      },
      {
        krMenu: '밀크티',
        engMenu: 'Milk Tea',
        price: 3.5
      },
      {
        krMenu: '초콜렛',
        engMenu: 'Chocolate',
        price: 4.0
      },
      {
        krMenu: '흑당 밀크티',
        engMenu: 'Brown Sugar Milk Tea',
        price: 3.5
      },
      {
        krMenu: '흑당 펄 밀크티',
        engMenu: 'B.W Sugar Pearl Milk Tea',
        price: 4.0
      },
      {
        krMenu: '흑당 말차라테',
        engMenu: 'B.W Sugar Match Latte',
        price: 4.0
      }
    ]
  }
})
