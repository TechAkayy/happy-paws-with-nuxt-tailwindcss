import { computed } from 'vue'

export interface Post {
  date: Date
  author: string
  title: string
  twitter: string
}

function byDate(a, b) {
  return Number(new Date(b.date)) - Number(new Date(a.date))
}

export async function getPosts() {
  const { data: posts } = await useAsyncData('blog-navigation', () => {
    return queryContent('blog').find()
  })

  return computed(() => posts.value.sort(byDate))
}

export async function getPost() {
  const slug = useRoute().params.slug.toString().replace(/,/g, '/')
  const { data: post } = await useAsyncData(slug, () => {
    return queryContent('blog', slug).findOne()
  })

  return post
}
