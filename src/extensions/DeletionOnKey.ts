import { Extension } from '@tiptap/core'
import type { KeyboardShortcutCommand } from '@tiptap/core'

export const DeletionOnKey = Extension.create({
  name: 'deletionOnKey',

  addKeyboardShortcuts(): Record<string, KeyboardShortcutCommand> {
    return {
      Backspace: ({ editor }) => {
        const { state, commands } = editor
        const { from, to } = state.selection
        const currentUser = this.options.user // 從登入資料取

        if (from === to) {
          // 沒有選取文字，照正常刪除
          return false
        }

        // 套用刪除標記
        commands.setMark('deletion', { user: currentUser })

        // 不做實際刪除，攔截預設行為
        return true
      },

      Delete: ({ editor }) => {
        const { state, commands } = editor
        const { from, to } = state.selection
        const currentUser = this.options.user // 從登入資料取
        if (from === to) {
          return false
        }

        commands.setMark('deletion', { user: currentUser })

        return true
      },
    }
  },
})
