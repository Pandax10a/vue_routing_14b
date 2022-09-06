import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import GamePage from '@/views/GamePage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LoginPage,
    meta: [{
      title: 'Login Page'
    },
    {
      name: 'description',
      content: 'This is where u sign away your secrets'
    },
    {
      name: 'author',
      content: 'Me meme'
    }

    ]
  },
  {
    path: '/numberduel',
    component: GamePage,
    meta: [{
      title: 'The Dueling stage'
    },
    {
      name: 'description',
      content: 'Numbers that is exciting'
    },
    {
      name: 'author',
      content: 'Me meme'
    }

    ]
  }
  
]

const router = new VueRouter({
  routes
})

export default router
//  added the codes to inject meta tags and added the info that passes to it in the above
router.beforeEach (
  (to, from ,next) => {
    // tearing down existing meta tags
    let current_meta_tags = document.querySelectorAll(`meta`);
    for (let i = 0; i<current_meta_tags.length; i++) {
      current_meta_tags[i].remove();
    }
    // inserting a new title
    let new_meta_tags = to[`meta`];
    document.querySelector(`title`)[`innerText`] = new_meta_tags[0][`title`];
    
    // inserting new meta tags
    for(let i = 0; i<new_meta_tags.length; i++) {
      document.querySelector(`head`).insertAdjacentHTML(`beforeend`,
      `<meta name="${new_meta_tags[i][`name`]}"
      content="${new_meta_tags[i][`content`]}">`)
    }
    // inserting standard meta tags
    document.querySelector(`head`).insertAdjacentHTML(`afterbegin`,
    `<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-Width,initial-scale=1.0">`);
    // using from so compiler doesnt "..."
    from;
    // calling the next function  so we can let router continue
    next();
  }
)
