import { Extension } from '@tiptap/core'
import { Plugin, PluginKey } from 'prosemirror-state'
import type { EditorView } from 'prosemirror-view'

export const InsertionOnInput = Extension.create({
  name: 'insertionOnInput',

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey('insertionOnInput'),

        props: {
          handleTextInput: (view: EditorView, from: number, to: number, text: string) => {
            const { state, dispatch } = view
            const { tr, schema } = state
            const currentUser = this.options.user // 從登入資料取


            const deletionMark = schema.marks.deletion
            const insertionMark = schema.marks.insertion
            // 先插入文字
            tr.insertText(text, from, to)

            // 清除剛插入文字的 deletion mark（避免繼承）
            if (deletionMark) {
              tr.removeMark(from, from + text.length, deletionMark)
            }

            // 加上 insertion mark
            if (insertionMark) {
              const mark = insertionMark.create({ user: currentUser })
              tr.addMark(from, from + text.length, mark)
            }

            dispatch(tr)
            return true
          },
        },
      }),
    ]
  },
})
