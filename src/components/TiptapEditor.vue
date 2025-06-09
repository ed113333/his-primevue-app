<template>
  <div class="p-4 space-y-4">
    <!-- 編輯器 -->
    <div>
      <h2 class="text-lg font-semibold mb-2">內容編輯區</h2>
      <EditorContent :editor="editor"   class="border border-gray-300 p-4 rounded shadow-sm min-h-[150px]"  />
    </div>
    

    <!-- 操作按鈕 -->
    <div class="space-x-2">
      <Button label="儲存草稿" @click="saveContent" />
      <Button label="載入草稿到原來的textarea" @click="loadContent" />
      <Button label="載入草稿到下方預覽" @click="loadContentToDraftViewer" />

      <Button label="審核變更" @click="reviewChanges" severity="warning" />
    </div>

    <!-- 唯讀草稿預覽區（Editor） -->
    <div>
      <h3 class="font-bold">草稿預覽（唯讀）</h3>
      <EditorContent :editor="draftViewer" class="border p-2 rounded shadow bg-gray-50" />
    </div>

    <!-- 審核後的唯讀文章（歷史紀錄） -->
    <div v-if="reviewedHtml" class="prose border p-4 rounded shadow bg-gray-50 relative">
      <h4>審核後結果：</h4>
      <div v-html="reviewedHtml"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { Deletion } from '../extensions/Deletion'
import { DeletionOnKey } from '../extensions/DeletionOnKey'
import { Insertion } from '../extensions/Insertion'
import { InsertionOnInput } from '../extensions/InsertionOnInput'

const currentUser = '欣怡'

const editor = useEditor({
  content: '<p>Hello 選文字後按 Backspace 就會標記刪除</p>',
  extensions: [
    StarterKit,
    Deletion.configure({ user: currentUser }),
    DeletionOnKey.configure({ user: currentUser }),
    Insertion.configure({ user: currentUser }),
    InsertionOnInput.configure({ user: currentUser }),
  ],
})


// 唯讀草稿預覽器（另一個 Editor 實例）
const draftViewer = useEditor({
  editable: false,
  extensions: [
    StarterKit,
    Deletion,
    Insertion,
  ],
})


const reviewedHtml = ref('')

// 儲存草稿內容（使用 JSON 格式保存所有標記與屬性）
const saveContent = () => {
  const json = editor.value?.getJSON()
  if (json) {
    localStorage.setItem('draft', JSON.stringify(json))
    alert('草稿已儲存！')
  }
}

// 載入草稿內容（還原所有標記）
const loadContent = () => {
  const raw = localStorage.getItem('draft')
  if (raw) {
    const json = JSON.parse(raw)
    editor.value?.commands.setContent(json)
  }
}

// 載入草稿到下方的唯讀 Viewer
const loadContentToDraftViewer = () => {
  const raw = localStorage.getItem('draft')
  if (raw) {
    const json = JSON.parse(raw)
    draftViewer.value?.commands.setContent(json)
  }
}


// 審核：移除 <del> 與 <span data-insertion>
const reviewChanges = () => {
  const html = editor.value?.getHTML() || ''
  const doc = new DOMParser().parseFromString(html, 'text/html')

  // 移除 <del>
  doc.querySelectorAll('del').forEach(el => el.remove())

  // 將 <span data-insertion> 展平
  doc.querySelectorAll('span[data-insertion]').forEach(el => {
    const span = el as HTMLElement
    const textNode = document.createTextNode(span.textContent || '')
    el.replaceWith(textNode)
  })

  reviewedHtml.value = doc.body.innerHTML
}
</script>

<style scoped>
/* 顯示新增文字 */
.prose span[data-insertion] {
  background-color: #e6ffe6;
  color: green;
}

/* 顯示刪除文字 */
.prose del[data-user] {
  text-decoration: line-through;
  color: gray;
  position: relative;
  cursor: help;
}

/* hover 時顯示作者 */
.prose del[data-user]::after {
  content: attr(data-user);
  display: none;
  position: absolute;
  top: -1.5em;
  left: 0;
  background: #fefefe;
  color: #333;
  font-size: 12px;
  border: 1px solid #ccc;
  padding: 2px 6px;
  white-space: nowrap;
  border-radius: 4px;
  z-index: 10;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.prose del[data-user]:hover::after {
  display: inline-block;
}
</style>
