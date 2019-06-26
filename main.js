Vue.component('tabButton', {
  props:{
    buttonName : String
  },
  template : `
  <button class='w3-button'>{{buttonName}}</button>
  `
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
        var menuName = this.krMenu + ' ' + '(' + this.engMenu + ')'
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
      console.log('hi');
    }
  },
  data: {
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

    }]
  }
})
