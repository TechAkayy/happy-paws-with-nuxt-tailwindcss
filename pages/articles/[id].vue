<script setup lang="ts">
  import { useArticles } from '@/composables/articles'

  const articleId = useRoute().params.id

  const { data: article } = await useAsyncData('articles', async () => {
    const { getArticle } = useArticles()
    return await getArticle(+articleId)
  })

  useHead({
    title: article.value.title,
  })
</script>
<template>
  <div>
    <ArticleCardHeader
      :cover="article.cover_image || article.social_image"
    ></ArticleCardHeader>
    <ArticleCard :article="article" />
  </div>
</template>
<style scoped></style>
