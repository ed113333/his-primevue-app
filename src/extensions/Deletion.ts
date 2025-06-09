// src/extensions/Deletion.ts
import { Mark, mergeAttributes } from '@tiptap/core'
import type { RawCommands } from '@tiptap/core'

export const Deletion = Mark.create({
  name: 'deletion',

  addAttributes() {
    return {
      user: {
        default: null,
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'del',
        getAttrs: dom => {
          if (typeof dom === 'string') return {}
          return {
            user: (dom as HTMLElement).getAttribute('data-user'),
          }
        },
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
     const user = HTMLAttributes.user || 'unknown'
    return ['del', mergeAttributes(
      {
        title: `新增者：${user}`, // hover 顯示用戶名稱
      },
      HTMLAttributes
    ), 0]
  },

  addCommands() {
    return {
      setDeletion:
        (attributes: Record<string, any>) =>
        ({ commands }: { commands: any }) => {
          return commands.setMark(this.name, attributes)
        },
    } as Partial<RawCommands>
  },
})
